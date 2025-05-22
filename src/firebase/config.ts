// src/firebase/config.ts
// Mock Firebase implementation for development
// Import types from Firebase for better compatibility
import type { Auth, GoogleAuthProvider } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage, StorageReference, UploadResult } from 'firebase/storage';
import type { Analytics } from 'firebase/analytics';

// Mock Firebase Auth
class MockAuth implements Partial<Auth> {
  currentUser = null;
  
  onAuthStateChanged(callback: (user: any) => void) {
    callback(null);
    return () => {};
  }
  
  signOut() {
    return Promise.resolve();
  }
}

// Mock Firebase Firestore
class MockFirestore implements Partial<Firestore> {
  type = 'firestore' as const;
  app = {} as any;
  toJSON() { return {}; }
  
  collection(path: string) {
    return {
      doc: (id: string) => ({
        id,
        get: async () => ({
          exists: () => false,
          data: () => ({}),
          id
        }),
        set: async (data: any) => Promise.resolve(),
        update: async (data: any) => Promise.resolve(),
        delete: async () => Promise.resolve()
      }),
      add: async (data: any) => Promise.resolve({ id: 'mock-id' }),
      get: async () => ({
        docs: [],
        size: 0,
        forEach: () => {}
      })
    };
  }
}

// Mock Firebase Storage
class MockStorage implements Partial<FirebaseStorage> {
  app = {} as any;
  maxOperationRetryTime = 0;
  maxUploadRetryTime = 0;
}

// Create a mock reference factory
function mockStorageRef(path: string): StorageReference {
  return {
    bucket: 'mock-bucket',
    fullPath: path,
    name: path.split('/').pop() || '',
    parent: null,
    root: null,
    storage: {} as any,
    toString: () => path,
    // Add required methods with mock implementations
    getDownloadURL: async () => 'https://firebasestorage.mock.url/image.jpg',
    delete: async () => Promise.resolve(),
  } as unknown as StorageReference;
}

// Mock Storage ref function
const mockRef = (storage: FirebaseStorage, path: string) => mockStorageRef(path);

// Mock uploadBytes function for use in components
export const uploadBytes = async () => {
  return { ref: mockStorageRef('mock-path') } as unknown as UploadResult;
};

// Mock deleteObject function
export const deleteObject = async () => Promise.resolve();

// Mock getDownloadURL function
export const getDownloadURL = async () => 'https://firebasestorage.mock.url/image.jpg';

// Mock Firebase Analytics
class MockAnalytics implements Partial<Analytics> {
  app = {} as any;
  
  logEvent(eventName: string, eventParams?: any) {
    console.log(`Mock Analytics: ${eventName}`, eventParams);
  }
}

// Create and export mock instances
export const auth = new MockAuth() as unknown as Auth;
export const googleProvider = { id: 'google.com', name: 'Google' } as unknown as GoogleAuthProvider;
export const db = new MockFirestore() as unknown as Firestore;
export const storage = new MockStorage() as unknown as FirebaseStorage;

// Export storage ref function with proper typing
export const ref = mockRef;

// Mock logEvent function directly
export const logEvent = (analytics: Analytics, eventName: string, eventParams?: any) => {
  console.log(`Mock Analytics Event: ${eventName}`, eventParams);
};

// Export mock analytics
export const analytics = new MockAnalytics() as unknown as Analytics;

const app = {};
export default app;

