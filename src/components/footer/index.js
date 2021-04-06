import React from 'react';

import styles from "./styles.module.scss";
import Logo from "../logo";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <Logo />
            </div>
        </div>
    )
}

export default Footer;