import s from './imageGalleryItem.module.css'

const ImageGalleryItem = () => {
    return (
        <li className={s.item}>
            <p>gallery</p>
            <img src="" alt="" className={s.image} />
        </li>
    )
}

export default ImageGalleryItem