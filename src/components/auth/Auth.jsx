import { React, useState } from 'react';
import { motion } from 'framer-motion';

import { AccountContext } from './accountContext';

import Login from './Login';
import Register from './Register';
import styles from './Auth.module.css'

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
};

export default function Auth() {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <>
            <img className={styles.authImage} src="/images/landing_page_food_1920.png" alt="auth_bg_image" />
            <div className={styles.authOverlay} />
            <div className={styles.authWrapper}>
                <AccountContext.Provider value={contextValue}>
                    <div className={styles.boxContainer}>
                        <div className={styles.topContainer}>
                            <motion.div
                                className={styles.backDrop}
                                initial={false}
                                animate={isExpanded ? "expanded" : "collapsed"}
                                variants={backdropVariants}
                                transition={expandingTransition}
                            />
                            {active === "signin" && (
                                <div className={styles.headerContainer}>
                                    <div className={styles.headerText}>Welcome</div>
                                    <div className={styles.headerText}>Back</div>
                                    <div className={styles.smallText}>Please sign-in to continue!</div>
                                </div>
                            )}
                            {active === "signup" && (
                                <div className={styles.headerContainer}>
                                    <div className={styles.headerText}>Create</div>
                                    <div className={styles.headerText}>Account</div>
                                    <div className={styles.smallText}>Please sign-up to continue!</div>
                                </div>
                            )}
                        </div>
                        <div className={styles.innerContainer}>
                            {active === "signin" && <Login />}
                            {active === "signup" && <Register />}
                        </div>
                    </div>
                </AccountContext.Provider>
            </div >
        </>
    );
}
