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
      <form action="" onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
        <input className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={query} onChange={(e) => {setQuery(e.target.value)}} type="text" placeholder="Type...."/>
        <button className= "bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer" type="submit">Search</button>
      </form>
    </div>
  ) 
}

export default Search