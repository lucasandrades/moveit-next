/* eslint-disable @next/next/no-img-element */
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/63925588?v=4" alt="Lucas Andrade" />
            <div>
                <strong>Lucas Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
} 