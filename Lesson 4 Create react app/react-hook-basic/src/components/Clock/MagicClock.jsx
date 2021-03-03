import React from 'react';
import useClock from '../../hook/useClock';
import './MagicClock.css'


function MagicClock() {
    const {timeString}=useClock()
    return (
        <div className="magic-clock">
            {timeString}
        </div>
    );
}

export default MagicClock;