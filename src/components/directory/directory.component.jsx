import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
    return (
        //  `...othersectionProps` is a shortcut way of passing in props to the child
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => ( 
                <MenuItem 
                    key={id}
                    {...otherSectionProps}
                />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
