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
        <TextInput label="Search by name" source="name" alwaysOn />

    </Filter>
);

const CarriersList = props => (
    <List filters={<CarriersFilter />} {...props}>
        <Datagrid>
            <TextField source="name" label="Gateway Name"/>
            <TextField source="address" label="Address"/>
            <TextField source="pri_prefix" label="Destination Prefix"/>
            <EditButton />
        </Datagrid>
    </List>
);

export default CarriersList;