import React from 'react';
import styles from "./Home.module.css";
import meal_image from "../../assets/67e3775a34e96623dd72c74f09f3db4b.jpeg"
import { ReactComponent as ButtonIcon } from "../../assets/button.svg";
import { ReactComponent as TimeIcon } from "../../assets/time.svg";
import { ReactComponent as Heart } from "../../assets/heart1.svg";
import { ReactComponent as BookMark } from "../../assets/bookmark2.svg";


const Home = () => {
    return (
        <>
            <img className={styles.meal_image} src={meal_image} alt="Meal"/>
            <ButtonIcon className={styles.button_back}/>
            <section className={styles.chosen_meal_info}>
                
                <div className={styles.meal_detailed_info}>
                    <h1 className={styles.meal_title}>Egg Omlet</h1>
                    <p className={styles.meal_author}>by Ainsley Harriott</p>
                </div>

                <div className={styles.meal_additional_info}>
                    <div className={styles.time}>
                        <TimeIcon/>
                        <p className={styles.text_time}>20-30 min</p>
                    </div>
                    <div className={styles.level}>
                        <p className={styles.level_text}>Easy</p>
                    </div>
                </div>
                    
                <div className={styles.main_meal_info}>
                    <div className={styles.actions_icons}>
                        <div className={styles.icons_likes}>
                            <Heart/>
                            <p className={styles.likes}>12 likes</p>  
                        </div>
                        <BookMark/>
                    </div>
                    <div className={styles.meal_cooking_info}>
                        <div className={styles.description}>
                            <h3 className={styles.description_title}>Description</h3>
                            <p className={styles.description_text}>You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...</p>
                        </div>
                        <div className={styles.ingredients}>
                            <h3 className={styles.ingredients_title}>Ingredients</h3>
                            <ul className={styles.ingredients_list}>
                                <li className={styles.meal_ingredient}>
                                    <p className={styles.meal_ingredient_name}>Chicken</p>
                                    <p className={styles.meal_ingredient_weight}>1 kg</p>
                                </li>
                                <hr/>
                                <li className={styles.meal_ingredient}>
                                    <p className={styles.meal_ingredient_name}>Olive oil</p>
                                    <p className={styles.meal_ingredient_weight}>3/4 spoon</p>
                                </li>
                                <hr/>
                                <li className={styles.meal_ingredient}>
                                    <p className={styles.meal_ingredient_name}>Garlic powder</p>
                                    <p className={styles.meal_ingredient_weight}>1/2 spoon</p>
                                </li>
                                <hr/>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;