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
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/ViewAll"}>new in</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Sale"}>sale</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Clothing"}>clothing</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Shoes"}>shoes</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Acccessories"}>accessories</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Face&Body"}>face & body</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Brands"}>brands</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Outlet"}>outlet</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to={path + "/Marketplace"}>marketplace</NavLink>
                <NavLink style={({isActive}) => {return isActive ? {fontWeight:500} : {}}} to='/men'>men</NavLink>
            </div>
            <div className="line"/>

            
        
        </>

    )
}

export default Menu