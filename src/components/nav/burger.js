import React from 'react';
import styles from './burger.module.scss';
import { FiMenu } from 'react-icons/fi';

export const Burger = () => {
    return (
        <div className={styles.burger}>
            <FiMenu />
        </div>
    )
}

export default Burger;