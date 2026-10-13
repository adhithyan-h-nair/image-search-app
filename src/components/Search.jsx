import { useState } from "react"

const Search = ({onSearch}) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    onSearch(query);
  }
  return (
    <div className="w-full max-w-2xl px-4 sm:px-0">
      <form
        onSubmit={handleSubmit}
        className="group relative flex items-center w-full bg-zinc-900/90 hover:bg-zinc-900 focus-within:bg-zinc-900 border border-zinc-800/90 focus-within:border-blue-500 rounded-2xl shadow-lg shadow-black/30 focus-within:ring-4 focus-within:ring-blue-500/15 transition-all duration-200 p-1.5 sm:p-2"
      >
        <div className="flex items-center pl-3 pr-2 text-zinc-400 pointer-events-none group-focus-within:text-blue-400 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 text-sm sm:text-base focus:outline-none px-2 py-1.5 min-w-0"
          value={query}
          onChange={(e) => {setQuery(e.target.value)}}
          type="text"
          placeholder="Search for photos (e.g. nature, architecture, city)..."
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="p-1.5 text-zinc-400 hover:text-zinc-200 rounded-full hover:bg-zinc-800 transition-colors mr-1 cursor-pointer shrink-0"
            title="Clear search"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <button
          className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-5 sm:px-6 py-2.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md shadow-blue-600/30 hover:shadow-blue-500/40 shrink-0 flex items-center gap-2"
          type="submit"
        >
          <span>Search</span>
        </button>
      </form>
    </div>
  ) 
}

export default Search