import { useState } from 'react';
import feedOne from '../assets/feed1.png';
import feedTwo from '../assets/feed2.png';
import feedThree from '../assets/feed3.png';
import feedFour from '../assets/feed4.png';
import { Card, CardLink, Button } from 'react-bootstrap';
import './NewsFeeds.css';

const newsFeeds = [
    {
        title: "GATE 2025 Registrations To Close Today, Check How To Apply",
        body: "New Delhi: The Indian Institute of Technology (IIT) Roorkee will close the registration process for the Graduate Aptitude Test in Engineering ",
        img: feedOne,
        source: "https://www.ndtv.com/education/gate-2025-registrations-to-close-today-check-how-to-apply-6704783"
    },
    {
        title: "CBSE To Soon Close Window For Submission Of List Of Candidates",
        body: "CBSE To Soon Close Window For Submission Of List Of Candidates. The List of Candidates (LOC) submission is a mandatory process for schools to .",
        img: feedTwo,
        source: "https://www.ndtv.com/education/cbse-to-soon-close-window-for-submission-of-list-of-candidates-6696964"
    },
    {
        title: "In Beirut, any feeling of safety is vanishing sleep last  Beirut",
        body: "I'm not sure how many people managed to sleep last night in Beirut, but many in my neighbourhood were awake again. It was 03:45 am that we heard the.",
        img: feedThree,
        source: "https://www.bbc.com/news/live/c39l7lv9pevt",
    },
    {
        title: "Sensex Today | Stock Market LIVE Updates: Sensex plunges over; ",
        body: "Sensex Today | Stock Market LIVE Updates | Benchmark indices Sensex and Nifty slipped in deep red on Thursday again. It was 03:45 am that we heard the",
        img: feedFour,
        source: "https://economictimes.indiatimes.com/markets/stocks/live-blog/bse-sensex-today-live-nifty-stock-market-updates-3-october-2024/liveblog/113890153.cms",
    }
];

export default function NewsFeeds() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < newsFeeds.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="news-feeds-container" >
            <Card className="news-card" style={{ textAlign: 'left', border: 'none' }}>
                <Card.Img src={newsFeeds[currentIndex].img} alt="" />
                <Card.Title>{newsFeeds[currentIndex].title}</Card.Title>
                <Card.Body>
                    {newsFeeds[currentIndex].body}
                </Card.Body>
                <CardLink href={newsFeeds[currentIndex].source} target="_blank" rel="noopener noreferrer">
                    Source: Read More
                </CardLink>

            </Card>
            <div className="button-container">
                <Button variant="secondary" onClick={handlePrev} disabled={currentIndex === 0}>
                    Prev
                </Button>
                <Button variant="secondary" onClick={handleNext} disabled={currentIndex === newsFeeds.length - 1}>
                    Next
                </Button>
            </div>
        </div>

    );
}
