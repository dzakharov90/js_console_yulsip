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

const DispatcherFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by domain" source="client_domain" alwaysOn />
    </Filter>
);

const DispatcherList = props => {
    useAuthenticated()
    return (
        <List filters={<DispatcherFilter />} {...props}>
            <Datagrid>
                <TextField source="address" label="Address" />
                <TextField source="port" label="Port" />
                <TextField source="state" label="State" />
                <TextField source="weight" label="Weight" />
                <TextField source="priority" label="Priority" />
                <TextField source="region" label="Region" />
                <TextField source="description" label="Description" />
                <EditButton />
            </Datagrid>
        </List>
    )
};

export default DispatcherList;