import React from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    EditButton,
    TextInput,
    SelectInput,
    ReferenceInput,
    useAuthenticated,
} from 'react-admin';

const ClientFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by domain" source="client_domain" alwaysOn />
    </Filter>
);

const ClientList = props => {
    useAuthenticated()
    const role = localStorage.getItem('role')

    if ( role === 'superadmin' ) {
        return (
            <List filters={<ClientFilter />} {...props}>
                <Datagrid>
                    <TextField source="client_domain" label="Client domain"/>
                    <TextField source="reseller_domain" label="Reseller"/>
                    <EditButton />
                </Datagrid>
            </List>
        )
    } else if ( role === 'reseller' || role === 'reselleradmin' ) {
        return (
            <List filters={<ClientFilter />} {...props}>
                <Datagrid>
                    <TextField source="client_domain" label="Client domain"/>
                    <EditButton />
                </Datagrid>
            </List>
        )
    }

};

export default ClientList;