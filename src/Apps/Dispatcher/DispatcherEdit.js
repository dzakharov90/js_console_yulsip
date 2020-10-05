import React from 'react';
import {
    Edit,
    TextInput,
    SelectInput,
    FormWithRedirect,
    SaveButton,
    choices,
    BooleanInput,
    useNotify, 
    useRefresh, 
    useRedirect,
    useAuthenticated,
    ListButton,
    SimpleForm,
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const DispatcherEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not edit extesions: ${error.message}`)
        redirect(props.basePath);
        refresh();
    };

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect(props.basePath);
        refresh();
    };
    useAuthenticated()
    return (
        <Edit onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <SimpleForm>
                <TextInput source="address" label="Address" />
                <TextInput source="port" label="Port" />
                <TextInput source="state" label="State" />
                <TextInput source="weight" label="Weight" />
                <TextInput source="priority" label="Priority" />
                <TextInput source="region" label="Region" />
                <TextInput source="description" label="Description" />
            </SimpleForm>
        </Edit>
    )
};

export default DispatcherEdit;