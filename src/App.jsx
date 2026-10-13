import { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Gallery from "./components/Gallery";
const apiKey = import.meta.env.VITE_PEXELS_API_KEY || import.meta.env.PEXELS_API_KEY;


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
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Pexel<span className="text-blue-500">Search</span>
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Pexels API Powered</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center gap-6 sm:gap-8 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Explore Free <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Stock Photos</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Discover millions of high-resolution royalty-free photos curated from talented creators worldwide.
          </p>
        </div>

        {/* Search Bar */}
        <Search onSearch={handleSearch} />

        {/* Trending Suggestions */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl px-4 text-xs sm:text-sm">
          <span className="text-zinc-500 mr-1 font-medium">Trending:</span>
          {["Nature", "Architecture", "Minimalist", "Wallpapers", "Urban", "Travel", "Coffee"].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleSearch(tag)}
              className="px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 hover:border-zinc-700 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full max-w-lg mx-auto p-4 rounded-2xl bg-red-950/40 border border-red-800/60 text-red-300 text-sm flex items-center gap-3 shadow-lg shadow-red-950/20">
            <div className="p-2 rounded-xl bg-red-900/50 text-red-200 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-red-200">Unable to load images</p>
              <p className="text-xs text-red-300/80">{error}</p>
            </div>
          </div>
        )}

        {/* Initial Empty Landing State */}
        {images.length === 0 && !loading && !error && !currentQuery && (
          <div className="w-full max-w-md mx-auto text-center py-10 px-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 mt-4">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-blue-500 shadow-inner">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-1">Start your visual discovery</h3>
            <p className="text-sm text-zinc-400">
              Type any keyword above or select a trending topic to browse curated photos.
            </p>
          </div>
        )}

        {/* No Results Found */}
        {images.length === 0 && !loading && !error && currentQuery && (
          <div className="w-full max-w-md mx-auto text-center py-10 px-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 mt-4">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-500">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-1">No matching results</h3>
            <p className="text-sm text-zinc-400">
              No results found for <span className="text-zinc-200 font-medium">"{currentQuery}"</span>. Try another keyword.
            </p>
          </div>
        )}

        {/* Initial Search Loading Skeleton */}
        {images.length === 0 && loading && (
          <div className="w-full flex flex-col items-center gap-6 py-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <span className="inline-block w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
              <span>Finding the best photos...</span>
            </div>
            <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
              {[220, 280, 200, 320, 240, 190, 300, 210].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}px` }}
                  className="break-inside-avoid rounded-2xl mb-4 sm:mb-6 bg-zinc-900 border border-zinc-800/80 animate-pulse"
                />
              ))}
            </div>
          </div>
        )}

        {/* Photo Gallery */}
        <Gallery images={images} />

        {/* Load More Button */}
        {images.length > 0 && (
          <div className="flex flex-col items-center gap-3 my-8">
            <button
              onClick={() => handleLoadMore()}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium px-8 py-3 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base min-w-[170px]"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Loading photos...</span>
                </>
              ) : (
                <>
                  <span>Load More Photos</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
            <span className="text-xs text-zinc-500">
              Showing {images.length} photos
            </span>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 mt-auto py-6 text-center text-xs text-zinc-500 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 PexelSearch. Powered by Pexels API.</p>
          <p className="text-zinc-600">Free high-resolution photos for personal and commercial use</p>
        </div>
      </footer>
    </div>
  )
}

export default App