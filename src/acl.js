import React from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    EditButton,
    TextInput,
    SelectInput,
    SimpleForm,
    Create,
    ReferenceInput,
} from 'react-admin';

const ACLFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
    </Filter>
);

export const ACLList = props => (
    <List filters={<ACLFilter />} {...props}>
        <Datagrid>
            <TextField source="username" label="Extensions"/>
            <TextField source="email_address" label="E-mail"/>
            <TextField source="cidname" label="Caller ID Name"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const ACLEdit = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="cidname" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ACLCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput optionText="name" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);