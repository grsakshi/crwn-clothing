import React from 'react';
import {useSelector} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import {DirectoryMenu} from './directory.styles.jsx';

const sections = useSelector(state => state.directory.sections);

const Directory = () => (
    <DirectoryMenu>
        {
            sections.map( ({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </DirectoryMenu>
);


export default Directory;