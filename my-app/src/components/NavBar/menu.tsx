import './header.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const menuItems = ['View all', 'Clothing', 'Shoes', 'Accessories', 'Face + Body']



const Menu = () => {



    return(
        <>
            <div className="menu_items">
                <Link to='/'>Women</Link>
                <Link to='/'>new in</Link>
                <Link to='/'>sale</Link>
                <Link to='/'>clothing</Link>
                <Link to='/'>shoes</Link>
                <Link to='/'>accessories</Link>
                <Link to='/'>face & body</Link>
                <Link to='/'>brands</Link>
                <Link to='/'>outlet</Link>
                <Link to='/'>marketplace</Link>
                <Link to='/men'>men</Link>
            </div>
            <div className="line"/>

            
        
        </>

    )
}

export default Menu