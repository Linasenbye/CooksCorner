import styles from "./Main.module.css";
import meal from "../../assets/bca297ef579e6efc869bdd2d06414c28.jpeg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as BookMark } from "../../assets/bookmark.svg";

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
                        <div className={styles.meal}>
                            <img className={styles.meal_photo} src={meal} alt="Destination"/>
                            <div className={styles.meal_info}>
                                <div className={styles.meal_detailed_info}>
                                    <h3 className={styles.meal_title}>Egg Omlet</h3>
                                    <p className={styles.meal_cook}>by Ainsley Harriott</p>
                                </div>
                                <div className={styles.actions}>
                                    <Heart/>
                                    <div className={styles.numbers}>
                                        <p className={styles.number}>118</p>
                                        <BookMark/>
                                        <p className={styles.number}>118</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        </>
    );
};

export default Main;