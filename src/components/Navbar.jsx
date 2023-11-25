import ImageList from "./ImageList";
import ListItem from "./ListItem";

import "./css/Component.css";
import apple_icon from "./assets/apple-logo.png";
import search_icon from "./assets/search-50.png";
import bag_icon from "./assets/shopping-bag-50.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ImageList icon={apple_icon} />
        <ListItem name="Store" />
        <ListItem name="Mac" />
        <ListItem name="iPad" />
        <ListItem name="iPhone" />
        <ListItem name="Watch" />
        <ListItem name="AirPods" />
        <ListItem name="TV&Home" />
        <ListItem name="Entertainment" />
        <ListItem name="Accessories" />
        <ListItem name="Support" />
        <ImageList icon={search_icon} />
        <ImageList icon={bag_icon} />
      </nav>
    </div>
  );
};

export default Navbar;
