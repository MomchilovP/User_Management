import { firebaseConfig, firebaseOptions } from './config';
import { FirebaseAuthProvider } from 'react-admin-firebase';

export const authProvider = FirebaseAuthProvider(firebaseConfig, firebaseOptions);