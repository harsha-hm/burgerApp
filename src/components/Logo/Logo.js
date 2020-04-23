import React from 'react';
import burgerLogo from '../../../src/assets/images/original.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='MyBurger' />
    </div>
);

export default logo;