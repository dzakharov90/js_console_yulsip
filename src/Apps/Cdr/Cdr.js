import React from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    TextInput,
    SelectInput,
    ReferenceInput,
} from 'react-admin';
import AudioPlayer from 'material-ui-audio-player';

const cdrfilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
    </Filter>
);

const CdrList = props => {
    return (
        <List filters={<cdrfilter />} {...props}>
            <Datagrid>
                <TextField source='caller_id_number' label='From Number' sortable={false} />
                <TextField source="destination_number" label='To Number' sortable={false} />
                <TextField source="line_number" label='Line' sortable={false} />
                <TextField source="start_stamp" label='Call started' sortable={false} />
                <TextField source="end_stamp" label='Call ended' sortable={false} />
                <TextField source="duration" label='Duration' sortable={false} />
                <TextField source="answersec" label='Wait for answer' sortable={false} />
                <TextField source="billsec" label='Billing duration' sortable={false} />
                <AudioPlayer
                    src={'recordlink'}
                    label='Recording' 
                    sortable={false} 
                    download={true}
                    spacing={1}
                    elevation={1}
                    width="100%"
                    loop={false}
                    preload={false}
                />
                <TextField source="sip_term_status" label='Call code result' sortable={false} />
            </Datagrid>
        </List>
    )
};

export default CdrList;