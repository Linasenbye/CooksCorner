import styles from "./Main.module.css";
import meal from "../../assets/bca297ef579e6efc869bdd2d06414c28.jpeg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as BookMark } from "../../assets/bookmark.svg";
import MealImage from "../MealImage/MealImage";

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