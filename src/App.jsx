import { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Gallery from "./components/Gallery";
const apiKey = import.meta.env.PEXELS_API_KEY;


const App = () => {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setImages([])
    setCurrentQuery(searchQuery);
    if (!searchQuery.trim()) {
      alert("Please enter a search term");
      return;
    }
    setPage(1);
    await fetchImages(searchQuery, 1);
  }

  const fetchImages = async (searchQuery, pageNum) => {
    setError(null);
    try {
      setLoading(true);
      const data = await axios.get(`https://api.pexels.com/v1/search?query=${searchQuery}&page=${pageNum}&per_page=20`, { headers: { "Authorization": apiKey } });
      console.log(data);
      const newImages = data.data.photos;

      if (pageNum === 1) {
        setImages(newImages);
      }
      else {
        setImages(prevImages => [...prevImages, ...newImages]);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong ;) Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  const handleLoadMore = async () => {
    let nextPage = page + 1;
    setPage(nextPage);
    await fetchImages(currentQuery, nextPage);
  }

  return (
    <div className="min-h-screen  bg-zinc-950 text-zinc-100">
      <h1 className="text-3xl font-bold text-blue-500 p-4">PexelSearch</h1>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <Search onSearch={handleSearch} />
        <Gallery images={images} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {images.length === 0 && !loading && !error && currentQuery && (<p>No results found for "{currentQuery}". Try Another search !</p>)}
        {images.length === 0 && loading && <div className="py-6 flex items-center gap-2 text-zinc-400">
          <span className="inline-block w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
          Loading photos
        </div>}
        {images.length > 0 && (
          <button
            onClick={() => handleLoadMore()}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed my-8"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}      
      </div>
    </div>
  )
}

export default App