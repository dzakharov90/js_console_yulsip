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
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const validatetransfertype = choices(['now', 'after'], 'Must be True or False');
const validateringback = choices(['us-ring', 'uk-ring', 'ru-ring', 'be-ring', 'ge-ring'], 'Must be one of this');

const ExtensionEditForm = props => (
    <FormWithRedirect
        async {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>Extension configuration</Typography>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Caller ID Name' source="cidname" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput disabled label="Extension" source="username" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='password' source="password" type="password" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput disabled label="Realm" source="domain" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='E-mail' source="email_address" type="email" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <BooleanInput 
                                    defaultValue={false}
                                    label="VoiceMail Enabled" 
                                    source="voicemail" 
                                />
                            </Box>
                        </Box>

                        <Box flex={1} ml="1em">
                            
                            <Typography variant="h6" gutterBottom> </Typography>
                            <Box flex={1} mr="0.5em">
                                <BooleanInput
                                    defaultValue={false}
                                    label="Transfer enabled"
                                    source="transfer"
                                />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <SelectInput label="Transfer Type" source="transfertype" choices={[
                                    { id: 'now', name: 'now' },
                                    { id: 'after', name: 'after' },
                                ]} validate={validatetransfertype}/>
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Transfer after (in sec)' source="transfertime" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <SelectInput label="Ring-Back" source="ringback" choices={[
                                    { id: 'us-ring', name: 'us-ring' },
                                    { id: 'uk-ring', name: 'uk-ring' },
                                    { id: 'ru-ring', name: 'ru-ring' },
                                    { id: 'be-ring', name: 'be-ring' },
                                    { id: 'ge-ring', name: 'ge-ring' },
                                ]} validate={validateringback}/>
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <BooleanInput
                                    defaultValue={false}
                                    label="Record Calls"
                                    source="recordusercall"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            label="Save"
                            redirect={props.basePath}
                            submitOnEnter={true}
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                        <ListButton
                            basePath={props.basePath}
                            label="Back"
                            color="red"
                            icon={<ChevronLeft />}
                        />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);

const ExtensionsEdit = props => {
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
            <ExtensionEditForm />
        </Edit>
    )
};

export default ExtensionsEdit;