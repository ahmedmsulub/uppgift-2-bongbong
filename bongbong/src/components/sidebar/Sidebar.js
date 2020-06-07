import React from 'react';
import FormComponent from '../formComponent/FormComponent'
import styles from '../sidebar/sidebar.module.css'
import background from '../../media/luffy.jpg'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={background}S/>
            </div>
            <FormComponent />
        </div>
    )
}

export default Sidebar;