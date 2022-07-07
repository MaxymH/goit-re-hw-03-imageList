import ImageGalleryItem from "./ImageGalleryItem"
import s from './imageGallery.module.css'

const ImageGallery = () => {
    return (
        <ul className={s.gallery}>
            <ImageGalleryItem/>
        </ul>
    )
}

export default ImageGallery