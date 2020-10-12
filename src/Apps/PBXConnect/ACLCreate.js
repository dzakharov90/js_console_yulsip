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

const ACLCreateForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>PBX Create</Typography>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='PBX name' source="name" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label="IP address" source="ip" />
                            </Box>
                        </Box>

                        <Box flex={1} ml="1em">
                            
                            <Typography variant="h6" gutterBottom> </Typography>
                            <Box flex={1} ml="1em">                            
                                <Typography variant="h6" gutterBottom> Custom SIP-Headers </Typography>
                            </Box>
                            <Box display="flex">
                                <TextInput label='Header Name' source="headername" />
                                <TextInput label="Header Param" source="headerparam" />
                            </Box>
                        </Box>
                    </Box>
                    <hr></hr>
                    <Box flex={1} ml="1em">                            
                        <Typography variant="h6" gutterBottom> Outbound Routes </Typography>
                    </Box>
                    <Box display="flex">
                            <TextInput label="Prefix" source="prefix" />
                            <TextInput label='From regexp' source="cidregex" />
                            <TextInput label="To Regexp" source="dstregex" />
                            <TextInput label="Strip digits" source="strip" />
                            <TextInput label="Add digits" source="adddigits" />
                            <TextInput label="Caller ID" source="caller_id_num" />
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

const ACLCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not edit extesions: ${error.message}`)
        redirect(props.basePath);
        refresh();
    };

    const onSuccess = ({ data }) => {
        notify(`PBX created`)
        redirect(props.basePath);
        refresh();
    };
    useAuthenticated()
    return (
        <Create onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <ACLCreateForm />
        </Create>
    )
};

export default ACLCreate;