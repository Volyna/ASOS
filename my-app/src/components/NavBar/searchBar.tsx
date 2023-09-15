import search from '../../images/search.svg'
const SearchBar = () => {
    return(
        <>
        <div className="sticky">
          <div className="box">
            <img src={search}/>
            <input className="search_sticky" placeholder="search"/>
          </div>
          <hr className="stick"/>
          
        </div>
        </>
    );
}

export default SearchBar;