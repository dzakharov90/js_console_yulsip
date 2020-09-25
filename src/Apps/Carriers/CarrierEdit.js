import React from 'react';
import {
    Datagrid,
    Edit,
    EditButton,
    TextInput,
} from 'react-admin';

const CarrierEdit = props => (
    <Edit {...props}>
        <Datagrid>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="cidname" />
            <EditButton />
        </Datagrid>
    </Edit>
);

export default CarrierEdit;