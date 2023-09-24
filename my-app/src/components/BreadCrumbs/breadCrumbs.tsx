import { Key } from "@mui/icons-material"
import { Link, NavLink, useLocation } from "react-router-dom"



export default function BreadCrumbs(){
    
    let location = useLocation()
    let currentLink = ''
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')


    
    const crumbsLink = crumbs.map(crumb => {
        currentLink += `/${crumb}`

            return(
                    <NavLink className={({isActive}) => {return isActive ? 'last crumbComp' : 'crumbComp'}} to={currentLink}> 
                         {" | " + crumb.charAt(0).toUpperCase()+crumb.slice(1).replace('-', " ")}
                    </NavLink>
            )
      
    })


    return(
        <div className="crumbs">
            <Link to='/' className="firstLink crumbComp">focus.com </Link>
            {crumbsLink}
        </div>
    )


}