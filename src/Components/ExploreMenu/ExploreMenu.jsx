import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/Assets'
const ExploreMenu = ( {setCategory, Category} ) => {
  return (
    <div  className='Explore'>
        <div className="Explore-Menu" id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>Here you can find our wide variety of dishes, enjoy a great meal, and even order a drink.</p>
        <div className="explore-menu-list">
          
           {menu_list.map((item, i) => {
            return (
              <div onClick={() => setCategory(prev => prev=== item.menu_name? "all" : item.menu_name)} className="explore-menu-list-item" key={i}>
                <img className={Category=== item.menu_name? "active" : ""} src={item.menu_image} alt={item.menu_name} /> 
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        {Category}
        </div>
       <hr />

    </div>
  )
}

export default ExploreMenu