import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item.component';
import {DirectoryMenu} from './directory.styles.jsx';

const Directory = ({sections}) => (
    <DirectoryMenu>
        {
            sections.map( ({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);