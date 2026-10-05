
const Gallery = ({images}) => {
  return (
    <div>
        {
            images.map((image)=>{
                return <img key={image.id} src={image.src.small} alt={image.alt} />
            })
        }
    </div>
  )
}

export default Gallery