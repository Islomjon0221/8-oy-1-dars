// OTHER ITEMS
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
// MY IMPORTED ITEMS
import logo from "../../assets/logo.svg";
import icon1 from "../../assets/header-svg-1.svg";
import icon3 from "../../assets/header-svg-3.svg";
import icon4 from "../../assets/header-svg-4.svg";
import icon5 from "../../assets/header-svg-5.svg";
import ProfilePhoto from "../../assets/profile.svg";
import DropdownIcon from "../../assets/dropdown-menu-icon.svg";
import "./index.css";
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="header__logo__img"
          src={logo}
          alt="This is WebSite Logo"
        />
      </div>
      <div className="header__link">
        <ul className="header__link__list">
          <li className="header__link__list__item">
            <img src={icon1} alt="WebSite other page icon" />
            Asosiy
          </li>
          <li className="header__link__list__item">
            <span className="icon"></span>
            Mijozlar bazasi
          </li>
          <li className="header__link__list__item">
            <img src={icon3} alt="WebSite other page icon" />
            Tracking loyihalari
          </li>
          <li className="header__link__list__item">
            <img src={icon4} alt="WebSite other page icon" />
            Sharh olish loyihalari
          </li>
          <li className="header__link__list__item">
            <img src={icon5} alt="WebSite other page icon" />
            Redirect loyihalari
          </li>
        </ul>
      </div>
      <div className="header__account">
        <Button
          className="header__account__buttonSetting"
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div className="header__account__text">
            <img src={ProfilePhoto} alt="Account Image" />
            <p className="header__account__text__paragraph">Austin Robertson</p>
            <img src={DropdownIcon} alt="Dropdown icon image" />
          </div>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
