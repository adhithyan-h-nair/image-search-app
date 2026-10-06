import { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Gallery from "./components/Gallery";
const apiKey = import.meta.env.VITE_PEXELS_API_KEY;


const App = () => {
  const [images, setImages] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setCurrentQuery(searchQuery);
    setPage(1);
    await fetchImages(searchQuery, 1);
  }

  const fetchImages = async (searchQuery, pageNum) => {
    try {
      setLoading(true);
      const data = await axios.get(`https://api.pexels.com/v1/search?query=${searchQuery}&page=${pageNum}&per_page=15`, { headers: { "Authorization": apiKey } });
      const newImages = data.data.photos;

      if (pageNum === 1) {
        setImages(newImages);
      }
      else {
        setImages(prevImages => [...prevImages, ...newImages]);
      }
    } catch (error) {
      console.log(error);
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
    <div>
      <Search onSearch={handleSearch} />
      <Gallery images={images} />
      {images.length == 0 && loading && <p>Loading....</p>}
      {images.length > 0 && <button onClick={() => { handleLoadMore() }} disabled={loading}>{loading? "Loading..." : "Load More"}</button>}
    </div>
  )
}

export default App