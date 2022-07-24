export default function OfficerCard({ event, date, image }) {
    return (
        <div className="officer-card relative flex-shrink-0">
            <div className="image-wrapper h-72 w-56  rounded-md overflow-hidden">
                <img
                    src={image}
                    alt="event-image.jpg"
                    className="h-full w-full object-cover hover:scale-105 duration-200"
                />
            </div>
            <div className="desc absolute bottom-0 hover:bg-black hover:bg-opacity-30 text-white text-sm duration-150 ease-in">
                <div className="inner p-3">
                    <p className="line-clamp-1 cursor-pointer hover:line-clamp-none mb-2">
                        {event}
                    </p>
                    <small>{date}</small>
                </div>
            </div>
        </div>
    )
}
