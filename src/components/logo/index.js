import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss'


export const Logo = () => {
    return (
        <div className={styles.logo}>
           <Link to="/">MOV.</Link>
        </div>
    )
}

export default Logo;