import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router-dom';
import Extensions from './Apps/Extensions';
import SIPProvider from './Apps/SipProviders'
import  Cdr from './Apps/Cdr';
import { ACLList, ACLEdit, ACLCreate } from './acl';
import Carriers from './Apps/Carriers';
import { EmergencyList, EmergencyEdit, EmergencyCreate } from './Emergency';
import Billing from './Apps/Billing';
import { GatewayList, GatewayEdit, GatewayCreate } from './Gateways';
import { IVRList, IVREdit, IVRCreate } from './Ivr';

import Dashboard from './Apps/Dashboard';
import authProvider from './authProvider.js';
import LoginPage from './LoginPage';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';
import Profile from './profile';

const App = () => (
    <Admin 
        title="UCP Console"
        loginPage={LoginPage} 
        dataProvider={dataProvider} 
        authProvider={authProvider} 
        dashboard={Dashboard}
        i18nProvider={i18nProvider}
        layout={Layout}
    >
        {permissions => [
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Cdr" options={{ label: 'CDR' }} {...Cdr} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Ivr" options={{ label: 'IVR' }} list={IVRList} edit={IVREdit} create={IVRCreate}/>
            : null,
//            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'  || permissions === 'supervisor' || permissions === 'user'
//                ? <Resource name="Callcenter" options={{ label: 'Call Center' }} list={BillingList} edit={BillingEdit} create={BillingCreate} />
//            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Extensions" options={{ label: 'Extensions' }} {...Extensions}/>
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="PBXs" options={{ label: 'PBX Connect' }} list={ACLList} edit={ACLEdit} create={ACLCreate}/>
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Trunks" options={{ label: 'SIP Providers' }}  {...SIPProvider} />
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Carriers" options={{ label: 'Carriers' }} {...Carriers}/>
            : null,
            permissions === 'superadmin' || permissions === 'reseller'
                ? <Resource name="Gateways" options={{ label: 'Gateways' }} list={GatewayList} edit={GatewayEdit} create={GatewayCreate}/>
            : null,
            permissions === 'superadmin' || permissions === 'reseller' || permissions === 'useradmin'
                ? <Resource name="Emergency" options={{ label: 'Emergency Providers' }} list={EmergencyList} edit={EmergencyEdit} create={EmergencyCreate}/>
            : null,
//            permissions === 'superadmin' || permissions === 'reseller'
//                ? <Resource name="Cell" options={{ label: 'Cell Networks' }} list={BillingList} edit={BillingEdit} create={BillingCreate}/>
//            : null,
//            permissions === 'superadmin' || permissions === 'reseller'
//                ? <Resource name="Brandanager" options={{ label: 'Brand Manager' }} list={BillingList} edit={BillingEdit} create={BillingCreate}/>
//            : null,
//            permissions === 'superadmin' || permissions === 'reseller'
//                ? <Resource name="Clients" options={{ label: 'Clients' }} list={BillingList} edit={BillingEdit} create={BillingCreate}/>
//            : null,
            permissions === 'superadmin' || permissions === 'reseller'
                ? <Resource name="Billing" options={{ label: 'Billing' }} {...Billing} />
            : null,
        ]}
    </Admin>
);

export default App;
