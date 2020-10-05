import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import Extensions from './Apps/Extensions';
import SIPProvider from './Apps/SipProviders'
import  Cdr from './Apps/Cdr';
import Carriers from './Apps/Carriers';
//import { EmergencyList, EmergencyEdit, EmergencyCreate } from './Emergency';
import Billing from './Apps/Billing';
import Clients from './Apps/Clients';
import TreeMenu from '@bb-tech/ra-treemenu';

import Dashboard from './Apps/Dashboard';
import authProvider from './authProvider.js';
import LoginPage from './LoginPage';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';
import Profile from './Apps/profile';
import UCPSettings from './Apps/settings';
import CallCenter from './Apps/CallCenter';
import ACL from './Apps/PBXConnect';
import IVR from './Apps/Ivr'
import Dispatcher from './Apps/Dispatcher'
import OpenSIPS from './Apps/OpenSIPS'

const App = () => (
    <Admin 
        title="UCP Console"
        loginPage={LoginPage} 
        dataProvider={dataProvider} 
        authProvider={authProvider} 
        dashboard={Dashboard}
        i18nProvider={i18nProvider}
        layout={Layout}
//        menu={TreeMenu}
    >
        {permissions => [
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin' || permissions === 'user'
                ? <Resource name="Profile" {...Profile} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin' || permissions === 'user'
                ? <Resource name="UCPSettings" {...UCPSettings} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Cdr" options={{ label: 'CDR' }} {...Cdr} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Ivr" options={{ label: 'IVR' }} {...IVR}/>
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'  || permissions === 'supervisor' || permissions === 'user'
                ? <Resource name="Callcenter" options={{ label: 'Call Center' }} {...CallCenter} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Extensions" options={{ label: 'Extensions' }} {...Extensions}/>
            : null,
//            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
//                ? <Resource name="PBXs" options={{ label: 'PBX Connect', isMenuParent: 'false'}} {...ACL}/>
//            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="PBXs" options={{ label: 'PBX Connect'}} {...ACL} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Trunks" options={{ label: 'SIP Providers' }}  {...SIPProvider} />
            : null,
            permissions === 'superadmin'
                ? <Resource name="OpenSIPS" options={{ label: 'OpenSIPS nodes' }} {...OpenSIPS}/>
            : null,
            permissions === 'superadmin'
                ? <Resource name="Dispatcher" options={{ label: 'Dispatcher' }} {...Dispatcher}/>
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Carriers" options={{ label: 'Carriers' }} {...Carriers}/>
            : null,
//            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
//              ? <Resource name="Emergency" options={{ label: 'Emergency Providers' }} list={EmergencyList} edit={EmergencyEdit} create={EmergencyCreate}/>
//            : null,
//            permissions === 'superadmin' || permissions === 'reseller'
//                ? <Resource name="Cell" options={{ label: 'Cell Networks' }} list={BillingList} edit={BillingEdit} create={BillingCreate}/>
//            : null,
//            permissions === 'superadmin' || permissions === 'reseller'
//                ? <Resource name="Brandanager" options={{ label: 'Brand Manager' }} list={BillingList} edit={BillingEdit} create={BillingCreate}/>
//            : null,
            permissions === 'superadmin' || permissions === 'reseller'
                ? <Resource name="Clients" options={{ label: 'Clients' }} {...Clients} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller'
                ? <Resource name="Billing" options={{ label: 'Billing' }} {...Billing} />
            : null,
        ]}
    </Admin>
);

export default App;
