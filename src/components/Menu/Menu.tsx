import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Menu.module.scss";
import { useState } from "react";
import { routes as menuItems } from "../../routes";

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={classNames(styles.menu, className)}>
      <button
        className={styles["menu__toggle"]}
        onClick={toggleMenu}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <nav
        className={classNames(styles["menu__nav"], {
          [styles["menu__nav--open"]]: isOpen,
        })}
      >
        <ul className={styles["menu__list"]}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles["menu__item"]}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  classNames(styles["menu__link"], {
                    [styles["menu__link--active"]]: isActive,
                  })
                }
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
