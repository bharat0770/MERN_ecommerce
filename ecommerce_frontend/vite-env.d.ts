/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_FIREBASE_KEY : string; 
VITE_AUTH_DOMAIN : string; 
VITE_PROJECT_ID : string; 
VITE_STORAGE_BUCKET: string; 
VITE_MESSAGING_SENDER_ID: string; 
VITE_APP_ID: string; 
VITE_MEASUREMENT_ID : string; 
VITE_SERVER : string; 
    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }