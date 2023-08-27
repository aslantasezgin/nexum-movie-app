
import { Form } from "react-bootstrap"
import "./search.css"
import { useContext } from "react"
import SearchContext from "../../context/SearchValue"
import { useNavigate } from "react-router-dom"
import { ArrowRight, SearchHeart } from "react-bootstrap-icons"


const Search = () => {

  const{searchValue, setSearchValue} = useContext(SearchContext)
  const navigate = useNavigate()

    return(
    <div className="search-area">
    
    <div className="search-bar">
      <Form.Control
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        placeholder="Bulmak istediğiniz filmin adını yazınız"
      />
    
    <span className="search-icon">
    {searchValue.length < 1 ? <SearchHeart></SearchHeart> : <ArrowRight></ArrowRight>}  
    </span>

    </div>

    <div className="favorites">
    <span onClick={() => {
      navigate("/favorites")
    }} >Favoriler</span>
    </div>


    </div>


    )
}

export default Search