import './EventCard.css'

export default function EventCard({ date, event, time, location, link }) {
    return (
        <div className="event-card">
            <div className="date">
                <span>{date.day}</span>
                <span>{date.month}</span>
            </div>

            <div className="details">
                <div className="event detail">
                    <div className="inner">
                        <span className="text-primary">Event</span>
                        <p>{event}</p>
                    </div>
                </div>

                <div className="time detail">
                    <div className="inner">
                        <span className="text-primary">Time</span>
                        <p>{time}</p>
                    </div>
                </div>

                <div className="location detail">
                    <div className="inner">
                        <span className="text-primary">Location</span>
                        <p>{location}</p>
                    </div>
                </div>

                <div className="link">
                    <div className="inner">
                        <div className="border-2 border-primary inline-flex items-center justify-center font-bold text-primary h-16 w-16 rounded-full">
                            <a href={link} className="text-blue">
                                JOIN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

EventCard.defaultProps = {
    date: { day: '23', month: 'Jul' },
    event: 'Some meeting',
    time: '00:00am',
    location: 'some covert location',
    link: 'https://airbnb.com'
}
