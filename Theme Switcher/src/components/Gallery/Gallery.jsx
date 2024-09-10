import { useImages } from "../../hooks/useImages";
import style from "./Gallery.module.scss";

export const Gallery = () => {
    const {images} = useImages();
    
    return (
        <>
        <div className={style.galleryStyling}>
        {images.map((img, index) => {
                return (
                    <>
                        <img key={index} src={img} alt="Gallery Images"/>
                    </>
                )
            })}
        </div>
            
        </>
    )
}