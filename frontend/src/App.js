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
// import CustomLoginPage from './components/loginPage';
import { theme } from './components/theme';
// import { customRoutes } from './customRoutes'; need to fix the export

// loginPage={CustomLoginPage}

const App = () => {
    return (
        <Admin title='User M.' theme={theme} dataProvider={djangoDataProvider} authProvider={authProvider}>
            {permissions => {
                console.log('test', permissions);
                return ([
                    <Resource name="users" icon={Person} list={UsersList} create={UserCreate} edit={UserEdit} />,
                    <Resource name="locators" icon={LocationOn} list={ListLocators} create={permissions['admin'] === true ? CreateLocator : null} edit={permissions['admin'] === true ? EditLocator : null} />
                ])
            }}
        </Admin>
    )
};

export default App;
