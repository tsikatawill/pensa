import { FaArrowRight } from 'react-icons/fa'

export default function PostCard({ image, title, post }) {
    return (
        <div className="post-card flex-shrink-0 shadow-md w-full shadow-slate-400 bg-white rounded-md overflow-hidden">
            <div className="image-wrapper h-72 sm:h-56 bg-slate-400">
                <img src={image} alt="post-display.jpg" className="h-full w-full object-cover" />
            </div>
            <div className="body-wrapper  p-5 flex flex-col justify-between h-72">
                <div className="text">
                    <h3 className="font-bold text-lg capitalize mb-2">{title}</h3>
                    <p className="line-clamp-5">{post}</p>
                </div>
                <button className="cta btn text-sm text-primary flex items-center justify-end gap-2 w-full">
                    <span>Read more</span>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}
