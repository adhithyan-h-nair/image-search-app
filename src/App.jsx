import { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Gallery from "./components/Gallery";
const apiKey = import.meta.env.VITE_PEXELS_API_KEY;


const App = () => {
  const [images, setImages] = useState([]);
  const handleSearch = async (query) =>{
    const data = await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {headers:{"Authorization" : apiKey}});
    console.log(data);
    setImages(data.data.photos);
  }
  return (
    <div>
      <Search onSearch={handleSearch}/>
      <Gallery images={images}/>
    </div>
  )
}

export default App