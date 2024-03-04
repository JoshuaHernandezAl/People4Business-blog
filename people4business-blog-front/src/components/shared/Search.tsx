import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { filters } from "../../interfaces/filters.enum"

export const Search = () => {
  const [search, handleSearch,reset] = useForm({
    searchTerm: '',
    filterBy: filters.title
  });
  const { searchTerm, filterBy } = search;
  const navigate = useNavigate();
  const handlerSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    navigate(`/posts/${searchTerm}?q=${filterBy}`);
  }
  return (
    <form className="d-flex" role="search" onSubmit={handlerSearch} >
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" name="searchTerm" onChange={handleSearch} value={searchTerm}/>
      <div className="col-auto d-flex flex-column align-items-md-center mx-2">
        <select name="filterBy" className="form-select" >
          <option value="">-- Filter by---</option>
          <option value={`${filters.title}`}>by title</option>
          <option value={`${filters.author}`}>by author</option>
          <option value={`${filters.content}`}>by content</option>
        </select>
      </div>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}
