import { useSwipeable } from "react-swipeable";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import '../components/SwipeButton.css';

const SwipeButton = ({ onSuccess }) => {
    const [swipePos, setSwipePos] = useState(0);
    const [isSwiped, setIsSwiped] = useState(false);
    const swipeTrackRef = useRef(null);
    
    useEffect(() => {
        if (isSwiped) {
            setTimeout(() => {
                setIsSwiped(false);
                setSwipePos(0); 
            }, 1000); 
        }
    }, [isSwiped]);

    const handlers = useSwipeable({
        onSwipedRight: () => {
            setIsSwiped(true);
            setSwipePos(100); 
            if (onSuccess) onSuccess(); 
        },
        onSwiping: (eventData) => {
            const trackWidth = swipeTrackRef.current.offsetWidth; 
            const newSwipePos = Math.min((eventData.absX / trackWidth) * 100, 100); 
            setSwipePos(newSwipePos);
        },
        delta: 10,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    return (
        <div className="swipe-container">
            <div
                className="swipe-track"
                ref={swipeTrackRef} 
            >
                <div
                    className="swipe-button"
                    style={{ transform: `translateX(${swipePos}%)` }}
                    {...handlers}
                >
                    {isSwiped ? "✓" : "→"}
                </div>
                <h3>Swipe Right</h3>
            </div>
        </div>
    );
};

SwipeButton.propTypes = {
    onSuccess: PropTypes.func.isRequired,
};

export default SwipeButton;
