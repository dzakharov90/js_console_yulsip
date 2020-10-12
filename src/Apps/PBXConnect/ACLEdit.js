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

const ACLEditForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>PBX Edit</Typography>
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
            <ACLEditForm />
        </Edit>
    )
};

export default ACLEdit;