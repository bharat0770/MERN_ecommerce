
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = exports.auth = exports.app = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = await (0, auth_1.getAuth)(exports.app);
exports.analytics = (0, analytics_1.getAnalytics)(exports.app);
