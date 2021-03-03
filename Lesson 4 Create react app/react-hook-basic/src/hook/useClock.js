import React, { useEffect, useState } from 'react';

function formatDate(date){
    const hours=`0${date.getHours()}`.slice(-2)
    const minutes=`0${date.getMinutes()}`.slice(-2)
    const seconds=`0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutes}:${seconds}`
}

function useClock(props) {
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        var timeInterval= setInterval(() => {
            setTime(new Date())
        }, 1000);
        return ()=>{
            clearInterval(timeInterval)
        }
    },[])
    const timeString=formatDate(time)
    return ({timeString})
}

export default useClock;