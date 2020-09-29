import React from 'react';
import {
    Edit,
    TextInput,
    SelectInput,
    SaveButton,
    DeleteButton,
    FormWithRedirect,
    choices,
    BooleanInput,
    useNotify, 
    useRefresh, 
    useRedirect,
    useAuthenticated,
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';

const validatecrypto = choices(['true', 'false', 'optional'], 'Must be one of choice');

const SIPProviderForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>SIP Trunk configuration</Typography>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Gateway name' source="gateway_name" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label="Username" source="username" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Password' source="password" type="password" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label="Registrar" source="to_domain" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Proxy' source="proxy" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='From domain' source="from_domain" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Expiry' source="expiry" />
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <TextInput label='Port' source="gateway_port" />
                            </Box>
                        </Box>

                        <Box flex={1} ml="1em">
                            
                            <Typography variant="h6" gutterBottom> </Typography>

                            <Box flex={1} mr="0.5em">
                                <BooleanInput 
                                    defaultValue={false}
                                    label="Diversion" 
                                    source="diversion" 
                                />  
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <BooleanInput 
                                    defaultValue={false}
                                    label="Privacy" 
                                    source="hidenum" 
                                />  
                            </Box>
                            <Box flex={1} mr="0.5em">
                                <SelectInput label="SRTP" source="crypto" choices={[
                                    { id: 'true', name: 'true' },
                                    { id: 'false', name: 'false' },
                                    { id: 'optional', name: 'optional' },
                                ]} validate={validatecrypto}/>
                            </Box>
                            <hr></hr>
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
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                        <DeleteButton record={formProps.record} />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);

const SIPProviderEdit = props => {
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
        <Edit onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <SIPProviderForm />
        </Edit>
    )
};

export default SIPProviderEdit;