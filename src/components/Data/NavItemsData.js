import { RiHome2Line, RiHistoryLine, RiShoppingCartLine, RiLogoutCircleRLine } from 'react-icons/ri';

export const navItems = [
  { value: "Home", name: "house", status: "1", icon: RiHome2Line },
  { value: "Cart", name: "cart", status: "0", icon: RiShoppingCartLine },
  { value: "History", name: "history", status: "0", icon: RiHistoryLine },
  { value: "Log Out", name: "logout", status: "0", icon: RiLogoutCircleRLine }
];