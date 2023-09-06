import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableCategories from "../../components/datatable/DatatableCategories"

const ListCategories = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableCategories/>
      </div>
    </div>
  )
}

export default ListCategories