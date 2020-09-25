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
} from 'react-admin';

const BillingFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
    </Filter>
);

const BillingList = props => (
    <List filters={<BillingFilter />} {...props}>
        <Datagrid>
            <TextField source="username" label="Extensions"/>
            <TextField source="email_address" label="E-mail"/>
            <TextField source="cidname" label="Caller ID Name"/>
            <EditButton />
        </Datagrid>
    </List>
);

export default BillingList;