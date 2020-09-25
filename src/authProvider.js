import { useNotify, AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'react-admin';
import axios from 'axios';
//import decodeJwt from 'jwt-decode';
//import CryptoJS from 'crypto-js';
import crypto from 'crypto';



export default async (type, params) => {
    if (type === AUTH_LOGIN) {
    const { username, password,realm } = params;
    let data = JSON.stringify({ username, password, realm });
    let logindata = (username + ":" + password);
    const credentials = crypto.createHash('md5').update(logindata).digest("hex");

    return axios.put('https://api.yulsip.com/api/v1/user_auth', data, {
      params: {
        'credentials': credentials,
        'realm': realm,
        'method': 'md5',
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if (res.data.error || res.status !== 200) {
        throw new Error(res.data.error);
      }
      else {
        var token = res.data.data.token;
        var role = res.data.data.role;
        var realm = res.data.data.realm;
        var language = res.data.data.language;
        var apikey = res.data.data.apikey;
        console.log(token);
        console.log(role);
        console.log(realm);
        console.log(language);
        if ( token === 'undefined' || role === 'undefined' || realm === 'undefined' || language === 'undefined' ) {
          const notify = useNotify();
          notify('Invalid credentials');
        } else {
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('realm', realm);
          localStorage.setItem('language', language);
          localStorage.setItem('apikey', apikey);
          return Promise.resolve();
        }
      }
    });
  }

  if (type === AUTH_LOGOUT) {
    const loginrealm = localStorage.getItem('loginrealm')
    if ( loginrealm ) {
      localStorage.removeItem('loginrealm');
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('apikey');
      localStorage.removeItem('role');
      localStorage.removeItem('realm');
      localStorage.removeItem('language');
      return Promise.resolve();
    }
  }

  if (type === AUTH_ERROR) {
    const { status } = params.status;
    if (status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('apikey');
      localStorage.removeItem('role');
      localStorage.removeItem('realm');
      localStorage.removeItem('language');
      return Promise.reject({ redirectTo: '/login' });
    }
    return Promise.resolve();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role');
    return role ? Promise.resolve(role) : Promise.reject();
  }

};