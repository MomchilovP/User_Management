import drfProvider from 'ra-data-drf';
import { authProvider } from './firebaseProvider';
import { fetchUtils } from 'react-admin';

const httpClient = async (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = await getToken();
    options.headers.set('authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

async function getToken() {
    return authProvider.checkAuth().then((result) => result._lat);
};

export const djangoDataProvider = drfProvider('http://127.0.0.1:8000/api', httpClient);
