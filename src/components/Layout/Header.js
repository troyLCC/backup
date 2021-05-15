import React, { Fragment } from "react";
import mealimg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Delivery App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
