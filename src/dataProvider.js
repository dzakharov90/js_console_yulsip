import axios from 'axios';
import { APP_BASE_URL } from './config';


const DataProvider = {
    getList: (resource, params) => {
        const token = localStorage.getItem('token');
        const apikey = localStorage.getItem('apikey');
        const logindomain = localStorage.getItem('logindomain');
        if( resource === 'Extensions' ) {
            const ExtensionsList = axios.get (`${APP_BASE_URL}/ExtensionsList`,{
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    page: params.pagination.page,
                    perPage: params.pagination.perPage,
                    filter: params.filter.username,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return ExtensionsList.then(res => {
                console.log(res.data.data);
                return {
                    data: res.data.data,
                    total: res.data.total,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
        if( resource === 'Trunks' ) {
            const TrunkList = axios.get (`${APP_BASE_URL}/TrunksList`,{
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    page: params.pagination.page,
                    perPage: params.pagination.perPage,
                    filter: params.filter.username,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return TrunkList.then(res => {
                console.log(res.data.data);
                return {
                    data: res.data.data,
                    total: res.data.total,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
        if( resource === 'PBXs' ) {
            const ACLList = axios.get (`${APP_BASE_URL}/ACLList`,{
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    page: params.pagination.page,
                    perPage: params.pagination.perPage,
                    filter: params.filter.name,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return ACLList.then(res => {
                console.log(res.data.data);
                return {
                    data: res.data.data,
                    total: res.data.total,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
        if( resource === 'Ivr' ) {
            const IVRList = axios.get (`${APP_BASE_URL}/IVRList`,{
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    page: params.pagination.page,
                    perPage: params.pagination.perPage,
                    filter: params.filter.menu_name,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return IVRList.then(res => {
                console.log(res.data.data);
                return {
                    data: res.data.data,
                    total: res.data.total,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
        if( resource === 'Cdr' ) {
            console.log(params)
            console.log('DataProvider ENV VAR')
            console.log(APP_BASE_URL)
            const cdrList = axios.get (`${APP_BASE_URL}/CDRList`, {
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    page: params.pagination.page,
                    perPage: params.pagination.perPage,
                    filter: params.filter.filter,
                    //order: params.sort.order,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return cdrList.then(res => {
                console.log(res.data.data.cdrlist);
                return {
                    data: res.data.data,
                    total: res.data.total,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
    },
    getOne: (resource, params) => {
        console.log('DataProvider.GetOne Extension ');
        console.log(resource);
        console.log(params);
        const token = localStorage.getItem('token');
        const apikey = localStorage.getItem('apikey');
        const logindomain = localStorage.getItem('logindomain');
        if ( resource === 'Extensions' ) {
            const getExtension = axios.get (`${APP_BASE_URL}/getExtension`,{
                params: {
                    id: params.id,
                    apikey: apikey,
                    logindomain: logindomain,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return getExtension.then(res => {
                console.log(res.data)
                return {
                    data: res.data.data,
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
        if ( resource === 'Trunks' ) {
            const getTrunk = axios.get (`${APP_BASE_URL}/getTrunk`,{
                params: {
                    id: params.id,
                    apikey: apikey,
                    logindomain: logindomain,
                },
                headers: {
                    'Accept': 'application/json',
                    'x-auth-token': token,
                },
            })
            return getTrunk.then(res => {
                return {
                    data: res.data.data.trunk,
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
    },
    create: (resource, params,) => {
        const token = localStorage.getItem('token')
        const apikey = localStorage.getItem('apikey')
        const logindomain = localStorage.getItem('logindomain');
        if ( resource === 'Extensions' ) {
            console.log(params)
            const ExtensionsCreate = axios.put(`${APP_BASE_URL}/ExtensionCreate`, params, {
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    username: params.data.username,
                    password: params.data.password,
                    cidname: params.data.cidname,
                    email_address: params.data.email_address,
                    voicemail: params.data.voicemail,
                    transfer: params.data.transfer,
                    transfertype: params.data.transfertype,
                    transfernum: params.data.transfernum,
                    ringback: params.data.ringback,
                    recordusercall: params.data.recordusercall,
                },
                headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                },
            })
            return ExtensionsCreate.then(res => {
                return {
                    data: { ...res.data.data.message, id: res.data.data.id },
                };
            }, ({ reason }) => {
                return Promise.reject(reason);
            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
        if ( resource === 'Trunks' ) {
            console.log(params)
            const TrunkCreate = axios.put(`${APP_BASE_URL}/TrunkCreate`, params, {
                params: {
                    apikey: apikey,
                    logindomain: logindomain,
                    gateway_name: params.data.name,
                    username: params.data.username,
                    password: params.data.password,
                    to_domain: params.data.to_domain,
                    from_domain: params.data.from_domain,
                    expiry: params.data.expiry,
                    port: params.data.port,
                    diversion: params.data.diversion,
                    hidenum: params.data.hidenum,
                    crypto: params.data.crypto,
                },
                headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                },
            })
            return TrunkCreate.then(res => {
                console.log(res.data.data.TrunkCreate);
                return {
                    data: res.data.data.TrunkCreate,
                    total: 5,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);

            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
    },
    delete: (resource, params) => {
        const token = localStorage.getItem('token')
        const apikey = localStorage.getItem('apikey')
        const logindomain = localStorage.getItem('logindomain');
        if ( resource === 'Extensions' ) {
            const ExtensionDelete = axios.put(`${APP_BASE_URL}/ExtensionRemove`, params, {
                params: {
                    id: params.id,
                    apikey: apikey,
                    logindomain: logindomain,
                },
                headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                },
            })
            return ExtensionDelete.then(res => {
                console.log(res.data.data.id);
                return Promise.resolve(res.data);
            }, ({ reason }) => {
                return Promise.reject(reason);

            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
    },
    deleteMany: (resource, params) => {
        const token = localStorage.getItem('token')
        const apikey = localStorage.getItem('apikey')
        const logindomain = localStorage.getItem('logindomain');
        if ( resource === 'Extensions' ) {
            const ExtensionsDelete = axios.delete(`${APP_BASE_URL}/ExtensionsRemove`, params, {
                params: {
                    id: params.ids,
                    apikey: apikey,
                    logindomain: logindomain,
                },
                headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                },
            })
            return ExtensionsDelete.then(res => {
                console.log(res.data.data.ExtensionRemove);
                return {
                    data: res.data.data.ExtensionRemove,
                    total: 5,  // Erfordert nun keinen speziellen Header mehr, CSE-Connect kompatibel
                };
            }, ({ reason }) => {
                return Promise.reject(reason);

            }).catch((e)=>{
                console.log(e);
                return Promise.reject(e);
            });
        }
    },
}

export default DataProvider;
