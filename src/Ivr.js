import React from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    Edit,
    EditButton,
    TextInput,
    SelectInput,
    SimpleForm,
    Create,
    ReferenceInput,
} from 'react-admin';

const IVRFilter = (props) => (
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

export const IVRList = props => (
    <List filters={<IVRFilter />} {...props}>
        <Datagrid>
            <TextField source="gateway_name" label="Name"/>
            <TextField source="username" label="Username"/>
            <TextField source="to_domain" label="Registrar"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const IVREdit = props => (
    <Edit {...props}>
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
            <TextInput label='Crypto RTP' source="crypto" />
        </SimpleForm>
    </Edit>
);

export const IVRCreate = props => (
    <Create {...props}>
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
            <TextInput label='Crypto RTP' source="crypto" />
        </SimpleForm>
    </Create>
);