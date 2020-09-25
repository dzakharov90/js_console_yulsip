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

const CarriersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
    </Filter>
);

const CarriersList = props => (
    <List filters={<CarriersFilter />} {...props}>
        <Datagrid>
            <TextField source="username" label="Extensions"/>
            <TextField source="email_address" label="E-mail"/>
            <TextField source="cidname" label="Caller ID Name"/>
            <EditButton />
        </Datagrid>
    </List>
);

export default CarriersList;