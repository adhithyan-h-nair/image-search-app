const Gallery = ({ images }) => {
  return (
    <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="break-inside-avoid rounded-xl overflow-hidden mb-4 bg-zinc-900"
        >
          <img
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            src={image.src.large}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;