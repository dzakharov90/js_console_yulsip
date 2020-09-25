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

const GatewayFilter = (props) => (
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

export const GatewayList = props => (
    <List filters={<GatewayFilter />} {...props}>
        <Datagrid>
            <TextField source="gateway_name" label="Name"/>
            <TextField source="username" label="Username"/>
            <TextField source="to_domain" label="Registrar"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const GatewayEdit = props => (
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

export const GatewayCreate = props => (
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