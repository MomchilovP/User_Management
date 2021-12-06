import React from "react";
import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import ForgotPasswordButton from './forgotPassword';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '#/users',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
};

const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>;

const CustomLoginForm = props => (
    <div>
      <SignInScreen />
      <LoginForm {...props} />
      <ForgotPasswordButton {...props} />
    </div>
  );
  
  const CustomLoginPage = props => (
    <Login {...props}>
      <CustomLoginForm {...props}/>
    </Login>
  );
  
  export default CustomLoginPage;
  