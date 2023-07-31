import { Key } from "@mui/icons-material"
import { Link, useLocation } from "react-router-dom"



export default function BreadCrumbs(){
    
    let location = useLocation()
    let currentLink = ''
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')


    
    const crumbsLink = crumbs.map(crumb => {
        currentLink += `/${crumb}`

            if(crumb === crumbs[crumbs.length-1]){
                return(
                <Link to={currentLink} className="last crumbComp "> {" " + crumb.charAt(0).toUpperCase()+crumb.slice(1)}</Link>
                ) 
            }else{
                return(
                    <Link to={currentLink} className="crumbComp "> {" " + crumb.charAt(0).toUpperCase()+crumb.slice(1)} |</Link>
                    ) 
            }      
    })


    return(
        <div className="crumbs">
            <Link to='/' className="firstLink crumbComp">focus.com |</Link>
            {crumbsLink}
        </div>
    )


}