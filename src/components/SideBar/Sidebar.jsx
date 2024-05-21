import styles from "./SideBar.module.css";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as RecipeIcon } from "../../assets/recipe.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as ChosenRecipeIcon } from "../../assets/chosen_recipe.svg";
import { ReactComponent as ChosenHomeIcon } from "../../assets/chosen_home.svg";
import { ReactComponent as ChosenProfileIcon } from "../../assets/chosen_profile.svg";
import { ReactComponent as ChosenSearchIcon } from "../../assets/chosen_search.svg";
import { ReactComponent as ChosenLogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LineIcon } from "../../assets/line.svg";

const Sidebar = ({ children }) => {
    const location = useLocation();

    const menuItems = [
        { path: "/recipe", icon: location.pathname === "/recipe" ? ChosenRecipeIcon : RecipeIcon },
        { icon: LineIcon },
        { path: "/home", icon: location.pathname === "/home" ? ChosenHomeIcon : HomeIcon },
        { path: "/Search", icon: location.pathname === "/Search" ? ChosenSearchIcon : SearchIcon },
        { path: "/profile", icon: location.pathname === "/profile" ? ChosenProfileIcon : ProfileIcon }
        
    ];

    const logoutItems = [
        { path: "/logout", icon: LogoutIcon }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.menuItems}>
                    {menuItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                        >
                            <div className={styles.icon}>
                                <item.icon />
                            </div>
                        </NavLink>
                    ))}
                </div>
                
                <div className={styles.logoutItems}>
                    {logoutItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                        >
                            <div className={styles.icon}>
                                <item.icon />
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
