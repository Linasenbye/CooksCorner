import styles from "./Main.module.css";
import MealImage from "../MealImage/MealImage";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <>
        <h1 className={styles.main_title}>Hi, Sarthak. UI Designer & Cook</h1>
        <section className={styles.categories}>
            <h2 className={styles.sub_title}>Category</h2>
            <div className={styles.sub_categories}>
                <div className={styles.choices}>
                    <div className={styles.meals}>Breakfast</div>
                    <div className={styles.meals}>Lunch</div>
                    <div className={styles.meals}>Dinner</div>
                </div>
                <div className={styles.meals_section}>
                    <div className={styles.meals_wrapper}>
                        <MealImage/>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
};

export default Main;