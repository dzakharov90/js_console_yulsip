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

const IVREdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not edit extesions: ${error.message}`)
        redirect('/Extensions');
        refresh();
    };

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/Extensions');
        refresh();
    };
    useAuthenticated()
    return (
        <Edit onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <SimpleForm>
                <TextInput label='Name' source="menu_name" />
                <TextInput label="Long Greeting" source="greet_long" />
                <TextInput label='Short Greeting' source="greet_short" />
                <TextInput label='Invalid sound' source="invalid_sound" />
                <TextInput label='Exit sound' source="exit_sound" />
                <TextInput label='Input timeout' source="inter_digit_timeout" />
                <TextInput label='Input max failures' source="max_failures" />
                <TextInput label='Digit len' source="digit_len" />
            </SimpleForm>
        </Edit>
    )
};

export default IVREdit;