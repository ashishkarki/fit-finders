import Link from 'next/link';
import { PATHS } from '../constants';

const NavBar = () => (
  <nav>
    <Link href={PATHS.PRODUCTS}>Products</Link>
    <Link href={PATHS.SELL}>Sell</Link>
    <Link href={PATHS.ORDERS}>Orders</Link>
    <Link href={PATHS.ACCOUNT}>Account</Link>
  </nav>
);

export default NavBar;
