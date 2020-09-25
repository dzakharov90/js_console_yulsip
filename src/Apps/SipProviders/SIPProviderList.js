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

const SIPProviderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
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
            </Datagrid>
        </List>
    )
};

export default SIPProviderList;