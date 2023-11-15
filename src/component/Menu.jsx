import React from 'react'
import './Menu.css'
const Menu = () => {
  
    const menuList=[
        {
            id:1,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:2,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:3,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:4,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:5,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:6,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:7,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:8,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:9,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:10,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
        {
            id:11,
            src:'https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-croissants-and-fruit-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'hello',
            price:"10rs"
        },
    ]
    return (
        <div id='menu'>
          {menuList.map(({ id, src, name, price }) => {
            return (
              <div key={id} id='menu-card'>
                <img src={src} width={"250px"} height={"250px"} alt={name} />
                <h2>{name}</h2>
                <p>{price}</p>
                <button>Add tp Cart</button>
              </div>
            );
          })}
        </div>
      );
    };
    
    export default Menu;
