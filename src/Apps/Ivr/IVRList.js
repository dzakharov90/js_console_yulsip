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

const IVRFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by name" source="menu_name" alwaysOn />
    </Filter>
);

export const IVRList = props => {
    useAuthenticated()
    return (
        <List filters={<IVRFilter />} {...props} title="Extensions">
            <Datagrid>
                <TextField source="menu_name" label="Menu name" sortable={false} />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export default IVRList;