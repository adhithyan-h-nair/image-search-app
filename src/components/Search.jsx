import { useState } from "react"

const Search = ({onSearch}) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    onSearch(query);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => {setQuery(e.target.value)}} type="text" placeholder="Type...."/>
        <button type="submit">Search</button>
      </form>
    </div>
  ) 
}

export default Search