<<<<<<< HEAD
// import basic react requirements
import React from 'react';
import { Admin, Resource } from 'react-admin';

// import custom trackres and users components
import { ListLocators, CreateLocator, EditLocator } from './components/locators';
import { UsersList, UserCreate, UserEdit } from './components/users';

// import data and auth providers
import { djangoDataProvider } from './provider/djangoProvider';
import { authProvider } from './provider/firebaseProvider';

// import styling and icons
import { LocationOn, Person } from '@material-ui/icons';
import CustomLoginPage from './components/loginPage';
import { theme } from './components/theme';
// import { customRoutes } from './customRoutes'; need to fix the export


const App = () => {
    return (
        <Admin title='User M.' theme={theme} loginPage={CustomLoginPage} dataProvider={djangoDataProvider} authProvider={authProvider}>
            {permissions => {
                console.log('test', permissions);
                return ([
                    <Resource name="users" icon={Person} list={UsersList} create={UserCreate} edit={UserEdit} />,
                    <Resource name="location" icon={LocationOn} list={ListLocators} create={permissions['admin'] === true ? CreateLocator : null} edit={permissions['admin'] === true ? EditLocator : null} />
                ])
            }}
        </Admin>
    )
};
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> 92a43c08a895a6294e60b5e5d63eefd33d7fa641

export default App;
