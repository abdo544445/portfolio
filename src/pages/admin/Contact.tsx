import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
`;

const MessagesList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const MessageItem = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .message-meta {
    font-size: 0.9rem;
    color: ${({ theme }) => theme === 'dark' ? '#b0b0b0' : '#666'};
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }
`;

const Button = styled.button<{ variant?: 'danger' | 'primary' }>`
  background: ${props => props.variant === 'danger' 
    ? '#e53e3e' 
    : props.variant === 'primary' 
      ? '#3182ce' 
      : '#718096'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  
  .filter-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : '#ffffff'};
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
`;

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  subject: string;
  createdAt: any; // firebase timestamp
  read: boolean;
}

const AdminContact: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');
  
  useEffect(() => {
    fetchMessages();
  }, []);
  
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const messagesCollection = collection(db, 'messages');
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesList = messagesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactMessage[];
      
      // Sort by date (newest first)
      messagesList.sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
        const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
      
      setMessages(messagesList);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleMarkAsRead = async (id: string, currentStatus: boolean) => {
    try {
      const messageRef = doc(db, 'messages', id);
      await updateDoc(messageRef, {
        read: !currentStatus
      });
      
      // Update the local state
      setMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === id ? { ...msg, read: !currentStatus } : msg
        )
      );
    } catch (error) {
      console.error('Error updating message status:', error);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'messages', id));
        
        // Update the local state
        setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };
  
  const filteredMessages = messages.filter(msg => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'read') return msg.read;
    if (filterStatus === 'unread') return !msg.read;
    return true;
  });
  
  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown Date';
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    } catch (error) {
      return 'Invalid Date';
    }
  };
  
  // Count of unread messages
  const unreadCount = messages.filter(msg => !msg.read).length;
  
  return (
    <ContactContainer>
      <h1>Contact Messages</h1>
      <p>You have {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}.</p>
      
      <FilterBar>
        <div className="filter-item">
          <label htmlFor="status-filter">Status:</label>
          <select
            id="status-filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
      </FilterBar>
      
      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <MessagesList>
          {filteredMessages.length === 0 ? (
            <p>No messages found.</p>
          ) : (
            filteredMessages.map(message => (
              <MessageItem key={message.id}>
                <h3>
                  {message.subject || 'No Subject'}
                  {!message.read && (
                    <span style={{ 
                      backgroundColor: '#3182ce', 
                      color: 'white',
                      fontSize: '0.8rem',
                      padding: '3px 8px',
                      borderRadius: '10px',
                      marginLeft: '10px'
                    }}>
                      New
                    </span>
                  )}
                </h3>
                <div className="message-meta">
                  <div>From: {message.name} ({message.email})</div>
                  <div>Received: {formatDate(message.createdAt)}</div>
                </div>
                <p style={{ whiteSpace: 'pre-wrap' }}>{message.message}</p>
                <div className="actions">
                  <Button 
                    onClick={() => handleMarkAsRead(message.id, message.read)}
                  >
                    Mark as {message.read ? 'Unread' : 'Read'}
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDelete(message.id)}
                  >
                    Delete
                  </Button>
                </div>
              </MessageItem>
            ))
          )}
        </MessagesList>
      )}
    </ContactContainer>
  );
};

export default AdminContact;
