import React from 'react';
import {
    Datagrid,
    Create,
    TextInput,
} from 'react-admin';

const ClientCreate = props => (
    <Create {...props}>
        <Datagrid>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="cidname" />
        </Datagrid>
    </Create>
);

export default ClientCreate;