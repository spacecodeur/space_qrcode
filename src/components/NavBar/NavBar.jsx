import {Link} from 'react-router-dom';
import styles from './navbar.module.css'; 

const NavBar = ({datas}) => {
  return (
    <div className={styles.navbar}>
        {datas.map((data, index) => (
            <Link to={"/" + index} key={index}>
            <img
            src={data.iconPath}
            alt={data.title}
            />
        </Link>
        ))}
    </div>
  );
};

export default NavBar;
