import styles from "./ProfileComp.module.css";
import profile_photo from "../../assets/d307d6a0d8c04215255375826bda969c.png"
import MealImage from "../MealImage/MealImage";



const ProfileComp = () => {

    return <>
    <h1 className={styles.profile_main_title}>Profile</h1>

    <section className={styles.profile_page}>
        <div className={styles.profile_box}>
            <img className={styles.profile_photo} src={profile_photo} alt="Profile Photo"/>
            <div className={styles.profile_info}>
                    <div className={styles.profile_status_info}>
                        <div className={styles.profile_popularity}>
                            <div className={styles.profile_user_inter}>
                                <div className={styles.profile_numbers}>
                                    <p className={styles.profile_number}>29</p>
                                    <p className={styles.profile_topic}>Recipe</p>
                                </div>
                                <div className={styles.profile_numbers}>
                                    <p className={styles.profile_number}>144</p>
                                    <p className={styles.profile_topic}>Followers</p>
                                </div>
                                <div className={styles.profile_numbers}>
                                    <p className={styles.profile_number}>100</p>
                                    <p className={styles.profile_topic}>Following</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.profile_data}>
                            <div className={styles.profile_words}>
                                <h3 className={styles.profile_name}>Sarthak Ranjan Hota</h3>
                                <p className={styles.profile_quote}>I'm a passionate chef who loves creating delicious dishes with flair.</p>
                            </div>
                        </div>
                    </div>
                
                <button className={styles.profile_button}>
                    <p className={styles.profile_button_text}>Manage Profile</p>
                </button>
            </div>
        </div>
    </section>

    <section className={styles.my_recipe}>
        <div className={styles.my_recipe_options}>
            <div className={styles.my_recipe_name}>
                <h4 className={styles.my_recipe_name_name}>My recipe</h4>
            </div>
            <div className={styles.my_recipe_save}>
                <h4 className={styles.my_recipe_save_save}>Saved recipe</h4>
            </div>
        </div>

        <div className={styles.meals_section}>
            <div className={styles.meals_wrapper}>
            <MealImage/>
            </div>
        </div>


    </section>


</>
};

export default ProfileComp;




