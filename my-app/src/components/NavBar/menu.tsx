import './header.css'
import {Link, NavLink, useLocation} from 'react-router-dom'

const menuItems = ['View all', 'Clothing', 'Shoes', 'Accessories', 'Face + Body']



const Menu = () => {

    const location = useLocation();
    const items = location.pathname.split('/').slice(0,2)
    const path = items[0] + '/' + items[1]

    
    return(
        <>
            <div className="menu_items">
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to='/women'>Women</NavLink>
                <NavLink  to={path + "/ViewAll"}>new in</NavLink>
                <NavLink to={path + "/Sale"}>sale</NavLink>
                <NavLink to={path + "/Clothing"}>clothing</NavLink>
                <NavLink to={path + "/Shoes"}>shoes</NavLink>
                <NavLink to={path + "/Acccessories"}>accessories</NavLink>
                <NavLink to={path + "/Face&Body"}>face & body</NavLink>
                <NavLink to={path + "/Brands"}>brands</NavLink>
                <NavLink to={path + "/Outlet"}>outlet</NavLink>
                <NavLink to={path + "/Marketplace"}>marketplace</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to='/men'>men</NavLink>
            </div>
            <div className="line"/>

            
        
        </>

    )
}

export default Menu