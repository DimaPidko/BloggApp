'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { getName } from './headerSlice';

import styles from './Header.module.sass';

const Header = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.headerSlice.nameOfBloggUser);

    useEffect(() => {
        dispatch(getName);
    }, [dispatch]);

    console.log(name);

    return (
        <header className={styles.header}>
            <div className={styles.mobile_phone}>
                <h3 className={styles.name}>{name}</h3>
                <input
                    id={styles.menu__toggle}
                    type="checkbox"
                />
                <label
                    className={styles.menu__btn}
                    htmlFor={styles.menu__toggle}>
                    <span></span>
                </label>
                <ul className={styles.menu__box}>
                    <h3 className={styles.nameIn}>{name}</h3>
                    <li>
                        <Link
                            href="/"
                            className={styles.menu__item}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={styles.menu__item}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={styles.menu__item}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={styles.menu__item}>
                            Newsletter
                        </Link>
                    </li>
                    <li>
                        <label
                            className={styles.menu__btnIn}
                            htmlFor={styles.menu__toggle}>
                            <span>✖</span>
                        </label>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
