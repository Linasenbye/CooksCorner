import styles from "./SearchComp.module.css";
import search2  from "../../assets/bitcoin-icons_search-outline.svg";
import add from "../../assets/add.svg";

const SearchComp = () => {
    return (
    <>
        <section className={styles.search}>
            <h1 className={styles.search_main_title}>What to eat today?</h1>
            <div className={styles.search_options}>
                <button className={styles.search_option}>
                    <p className={styles.search_text}>Chefs</p>
                </button>
                <button className={styles.chosen_option}>
                    <p className={styles.chosen_text}>Recipes</p>
                </button>
            </div>

            <label className={styles.search_input}>
                <input
                type="text"
                id="input"
                name="input"
                placeholder="Search recipes"
                className={styles.input}           
                />
            <button className={styles.search_btn} type="button"><img src={search2} alt="Search Icon" /></button>
          </label>

          <div className={styles.add_part}>
            <button type="button" className={styles.add_button}><img src={add} alt="Add Icon" className={styles.icon}/>Add your recipe</button>
          </div>
        </section>
    </>
    );
};

export default SearchComp;