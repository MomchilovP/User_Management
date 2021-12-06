import React from 'react';
import {
    List,
    Create,
    Edit,
    SimpleForm,
    EmailField,
    SelectInput,
    Datagrid,
    TextField,
} from 'react-admin';

const choices = [
    {id: 'admin', name: 'Admin'},
    {id: 'staff', name: 'Staff'},
    {id: 'basic', name: 'Basic'},
];

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='id'/>
            <TextField source='name'/>
            <EmailField source='email'/>
            <TextField source='permissions'/>
        </Datagrid>
    </List>
);

export const UserCreate = (props) => (
    <Create title='Create a User' {...props}>
            <SimpleForm>
                <TextField source='name'/>
                <EmailField source='email'/>
                <SelectInput source='permissions' choices={ choices } />
            </SimpleForm>
    </Create>
);


export const UserEdit = (props) => (
    <Edit title='Edit a User' {...props}>
        <SimpleForm>
            <TextField source='name'/>
            <EmailField source='email'/>
            <SelectInput source='permissions' choices={ choices }/>
        </SimpleForm>
    </Edit>
);