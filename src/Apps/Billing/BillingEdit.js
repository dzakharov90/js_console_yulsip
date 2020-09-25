import React from 'react';
import {
    Edit,
    TextInput,
    SimpleForm,
} from 'react-admin';

const BillingEdit = props => (
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

export default BillingEdit;