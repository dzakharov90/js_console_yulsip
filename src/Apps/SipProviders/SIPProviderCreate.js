import React from 'react';
import {
    Create,
    TextInput,
    SelectInput,
    SaveButton,
    FormWithRedirect,
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

const validatecrypto = choices(['true', 'false', 'optional'], 'Must be one of choice');

const SIPProviderCreateForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>SIP Trunk create</Typography>
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
                        </Box>
                        

                        <Box flex={1} ml="1em">
                            
                            <hr></hr>
                            <Typography variant="h6" gutterBottom> Custom SIP-Headers </Typography>
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

const SIPProviderCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not create Trunk: ${error.message}`)
        redirect(props.basePath);
        refresh();
    };

    const onSuccess = ({ data }) => {
        notify(`Trunk create success`)
        redirect(props.basePath);
        refresh();
    };
    useAuthenticated()
    return (
        <Create onFailure={onFailure} onSuccess={onSuccess} {...props}>
            <SIPProviderCreateForm />
        </Create>
    )
};

export default SIPProviderCreate;