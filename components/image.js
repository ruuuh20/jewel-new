
import { imageBuilder } from "../sanity"

const ImageComponent = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <img src={imageBuilder(image).auto("format")} />
    </div>
  )
}

export default ImageComponent