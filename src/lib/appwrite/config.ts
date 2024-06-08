// import { Client, Account, Databases } from "appwrite";

// export const appwriteConfig = {
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   url: import.meta.env.VITE_APPWRITE_URL,
// //   // databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
// //   // storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
// //   // userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
// //   // postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
// //   // savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
// // };

// export const client = new Client();

// client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66571acb002edbb4c9ad');

// export const account = new Account(client);
// export const databases = new Databases(client);
// // export const storage = new Storage(client);
// // export const avatars = new Avatars(client);

import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  
  projectId: '66571acb002edbb4c9ad',
  databaseId:'665a0e0a00015147a183',
  storageId: '665a08b0001a65a226a6',
  userCollectionId: '665a0e8a001314f869b3',
  postCollectionId: '665a0e55002ea788110a',
  savesCollectionId: '665a0ece00142c50c0ac',
};

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);