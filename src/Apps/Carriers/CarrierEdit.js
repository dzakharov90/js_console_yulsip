import React from 'react';
import {
    SimpleForm,
    Edit,
    TextInput,
    useAuthenticated,
} from 'react-admin';

const CarrierEdit = props => {
    useAuthenticated()
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="name" label="Gateway Name"/>
                <TextInput source="address" label="Address"/>
                <TextInput source="type" label="Type"/>
                <TextInput source="probe_mode" label="Probe mode"/>
                <TextInput source="state" label="State"/>
                <TextInput source="pri_prefix" label="Destination Prefix"/>
                <TextInput source="strip" label="Strip digits"/>
            </SimpleForm>
       </Edit>
    )
}

export default CarrierEdit;