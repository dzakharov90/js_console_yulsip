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
    DeleteButton,
    useAuthenticated,
} from 'react-admin';

const SIPProviderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by username" source="username" alwaysOn/>
    </Filter>
);

const SIPProviderList = props => {
    useAuthenticated()
    return (
        <List filters={<SIPProviderFilter />} {...props}>
            <Datagrid>
                <TextField source="gateway_name" label="Name" sortable={false} />
                <TextField source="username" label="Username" sortable={false} />
                <TextField source="to_domain" label="Registrar" sortable={false} />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export default SIPProviderList;