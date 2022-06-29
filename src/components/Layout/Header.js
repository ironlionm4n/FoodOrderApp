import React from 'react'
import mealimg from '../../assets/meals.jpg'
import classes from './Header.module.css'
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodOrderApp</h1>
        <button>Checkout</button>
      </header>
      {/* cannot use . notation for accessing css modules which contain a dash, must use square bracket and a string value */}
      <div className={classes['main-image']}>
        <img src={mealimg} alt="Table full of food"/>
      </div>
    </React.Fragment>
  )
}

export default Header
