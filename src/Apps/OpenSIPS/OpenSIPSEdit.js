import * as React from 'react';

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

const OpenSIPSEdit = props => {
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
                <TextInput label='Description' source="description" />
                <TextInput label='Address' source="address" />
                <TextInput label="Port" source="port" />
                <TextInput label='State' source="state" />
                <TextInput label='No ping retries' source="no_ping_retries" />
                <TextInput label='Priotiry' source="priority" />
                <TextInput label='State' source="state" />
                <TextInput label='Region' source="region" />
            </SimpleForm>
        </Edit>
    )
};

export default OpenSIPSEdit;