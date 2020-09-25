import React from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    TextInput,
    SelectInput,
    SimpleForm,
    Create,
    ReferenceInput,
} from 'react-admin';

const EmergencyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
    </Filter>
);

export const EmergencyList = props => (
    <List filters={<EmergencyFilter />} {...props}>
        <Datagrid>
            <TextField source="username" label="Extensions"/>
            <TextField source="email_address" label="E-mail"/>
            <TextField source="cidname" label="Caller ID Name"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const EmergencyEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label='Caller ID Name' source="cidname" />
            <TextInput disabled label="Extension" source="username" />
            <TextInput label='password' source="password" />
            <TextInput label='E-mail' source="email_address" />
            <label>
                VoiceMail enabled:
                <select value='voicemail' >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </label>
            <label>
                Transfer enabled:
                <select value='transfer'>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </label>
            <label>
                Ring-Back:
                <select value='ringback' >
                    <option value="us-ring">US-RingBack</option>
                    <option value="ru-ring">RU-RingBack</option>
                </select>
            </label>
            <label>
                Record Calls:
                <select value='recordusercall' >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </label>
        </SimpleForm>
    </Edit>
);

export const EmergencyCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Caller ID Name" source="cidname" />
            <TextInput label="Extension" source="username" />
            <TextInput label="Password" source="password" />
            <TextInput label="E-mail" source="email_address" />
        </SimpleForm>
    </Create>
);