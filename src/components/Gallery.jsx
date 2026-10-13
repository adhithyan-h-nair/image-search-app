const Gallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative mb-4 sm:mb-6 break-inside-avoid rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/80 shadow-md hover:shadow-2xl hover:shadow-black/50 transition-all duration-300"
          style={{ backgroundColor: image.avg_color || "#18181b" }}
        >
          <img
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer block"
            src={image.src.large}
            alt={image.alt || "Pexels photo"}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
            <div className="flex items-center justify-between text-white pointer-events-auto gap-2">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shrink-0 border border-white/20 text-white">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white truncate drop-shadow-sm">
                    {image.photographer}
                  </p>
                  {image.alt && (
                    <p className="text-[10px] text-zinc-300 truncate max-w-[140px] sm:max-w-[160px]">
                      {image.alt}
                    </p>
                  )}
                </div>
              </div>
              {image.url && (
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur text-white transition-all duration-200 shrink-0 hover:scale-105 cursor-pointer"
                  title="View on Pexels"
                  aria-label="View on Pexels"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;