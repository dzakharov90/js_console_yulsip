import React from 'react';
import {
    TextInput,
    SelectInput,
    SimpleForm,
    Create,
} from 'react-admin';


const BillingCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput optionText="name" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export default BillingCreate;