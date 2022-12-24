import { ImgHTMLAttributes } from "react";
import './Avatar.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export default function Avatar({hasBorder = true, ...props}: AvatarProps){
    return(
        <div className="Avatar">
            <img
                className={hasBorder ? "AvatarWithBorder" : "Avatar"}
                {...props}
            />
        </div>
    )
}