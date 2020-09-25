import * as React from 'react';

import {
    Filter,
    List,
    Datagrid,
    TextField,
    EditButton,
    TextInput,
    SelectInput,
    ReferenceInput,
    DeleteButton,
    useAuthenticated,
} from 'react-admin';

const ExtensionsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="username" alwaysOn />
        <ReferenceInput label="Extension" source="username" reference="users" allowEmpty>
            <SelectInput optionText="extension" />
        </ReferenceInput>
    </Filter>
);

export const ExtensionsList = props => {
    useAuthenticated()
    return (
        <List filters={<ExtensionsFilter />} {...props} title="Extensions">
            <Datagrid>
                <TextField source="username" label="Extensions" sortable={false} />
                <TextField source="cidname" label="Caller ID Name" sortable={false} />
                <TextField source="email_address" label="E-mail" sortable={false} />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export default ExtensionsList;