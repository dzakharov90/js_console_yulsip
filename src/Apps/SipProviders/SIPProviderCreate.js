import React from 'react';
import {
    TextInput,
    SimpleForm,
    Create,
    choices,
    useNotify, 
    useRefresh, 
    useRedirect,
    useAuthenticated,
    SelectInput,
} from 'react-admin';

const validatecrypto = choices(['true', 'false', 'optional'], 'Must be one of choice');

const SIPProviderCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not edit extesions: ${error.message}`)
        redirect('/Extensions');
        refresh();
    };

    const onSuccess = ({ data }) => {
        notify(`Changes to post "${data.title}" saved`)
        redirect('/Extensions');
        refresh();
    };
    useAuthenticated()
    return (
        <Create onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <SimpleForm>
                <TextInput label='Name' source="gateway_name" />
                <TextInput label="Username" source="username" />
                <TextInput label='Password' source="password" />
                <TextInput label='Registrar' source="to_domain" />
                <TextInput label='Proxy' source="proxy" />
                <TextInput label='From domain' source="from_domain" />
                <TextInput label='Expiry' source="expiry" />
                <TextInput label='Port' source="gateway_port" />
                <TextInput label='Diversion' source="diversion" />
                <TextInput label='Hide Number' source="hidenum" />
                <SelectInput label="SRTP" source="crypto" choices={[
                    { id: 'true', name: 'true' },
                    { id: 'false', name: 'false' },
                    { id: 'optional', name: 'optional' },
                ]} validate={validatecrypto}/>
            </SimpleForm>
        </Create>
    )
};

export default SIPProviderCreate;