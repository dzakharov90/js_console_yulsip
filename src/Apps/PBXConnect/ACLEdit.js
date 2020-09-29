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

const ACLEdit = props => {
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
                <TextInput label='Name' source="name" />
                <TextInput label="IP Address" source="ip" />
                <TextInput label='Network mask' source="mask" />
            </SimpleForm>
        </Edit>
    )
};

export default ACLEdit;