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

const ACLFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by name" source="name" alwaysOn />
    </Filter>
);

export const ACLList = props => {
    useAuthenticated()
    return (
        <List filters={<ACLFilter />} {...props} title="Extensions">
            <Datagrid>
                <TextField source="name" label="Name" sortable={false} />
                <TextField source="ip" label="IP Address" sortable={false} />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export default ACLList;