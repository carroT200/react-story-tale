import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <p>React stories</p>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
