import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const NavbarLayout = () => {
  return (
    <div className={styles.navbar_container}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Clontwit</a>
        </Link>
      </h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            {" "}
            <Link href="/timeline">
              <a>Timeline</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/tendencies">
              <a>Tendencies</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarLayout;
