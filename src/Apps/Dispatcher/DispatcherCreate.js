import React from 'react';
import {
    Datagrid,
    Create,
    TextInput,
} from 'react-admin';

const DsipatcherCreate = props => (
    <Create {...props}>
        <Datagrid>
            <TextInput source="address" label="Address" />
            <TextInput source="port" label="Port" />
            <TextInput source="state" label="State" />
            <TextInput source="weight" label="Weight" />
            <TextInput source="priority" label="Priority" />
            <TextInput source="region" label="Region" />
            <TextInput source="description" label="Description" />
        </Datagrid>
    </Create>
);

export default DsipatcherCreate;