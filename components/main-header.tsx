import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import styles from './main-header.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src={logoImg.src}
          alt="A plate with food on it"
          width={100}
          height={100}
        />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>

          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
