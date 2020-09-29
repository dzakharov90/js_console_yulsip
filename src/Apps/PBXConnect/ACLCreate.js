import * as React from 'react';

import {
    TextInput,
    SelectInput,
    FormWithRedirect,
    Create,
    SaveButton,
    choices,
    BooleanInput,
    PasswordInput,
    useNotify, 
    useRedirect,
    useAuthenticated,
    ListButton,
    SimpleForm,
    useRefresh,
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const ExtensionsCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not edit extesions: ${error.message}`)
        redirect(props.basePath);
        refresh();
    };

    const onSuccess = ({ data }) => {
        notify(`Changes to post "${data.title}" saved`)
        redirect(props.basePath);
        refresh();
    };
    useAuthenticated()
    return (
        <Create onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <SimpleForm>
                <TextInput label='Name' source="gateway_name" />
                <TextInput label="IP Address" source="ip" />
                <TextInput label='Network mask' source="mask" />
            </SimpleForm>
        </Create>
    )
};

export default ExtensionsCreate;