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
        <TextInput label="Search by name" source="name" alwaysOn />
    </Filter>
);

export const OpenSIPSList = props => {
    useAuthenticated()
    return (
        <List filters={<ExtensionsFilter />} {...props} title="Extensions">
            <Datagrid>
                <TextField source="address" label="IP Address" sortable={false} />
                <TextField source="description" label="Description" sortable={false} />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export default OpenSIPSList;