import React from 'react';
import {
    List,
    Create,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    Datagrid,
    TextField,
} from 'react-admin';

export const ListLocators = (props) => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='id'/>
            <TextField source='name'/>
            <TextField source='status'/>
            <TextField source='location'/>
        </Datagrid>
    </List>
);

const choices = [
    {id: 'enabled', name: 'Enabled'},
    {id: 'disabled', name: 'Disabled'},
];

export const CreateLocator = (props) => (
    <Create title='Create a Location' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <SelectInput source='status' choices={choices} />
                <TextInput source='location' />
            </SimpleForm>
        </Create>
);

export const EditLocator = (props) => (
    <Edit title='Edit a Location' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <SelectInput source='status' choices={choices} />
                <TextInput source='location' />
            </SimpleForm>
        </Edit>
);