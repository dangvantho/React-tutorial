import React, { useEffect, useState } from 'react';

function formatDate(date){
    const hours=`0${date.getHours()}`.slice(-2)
    const minutes=`0${date.getMinutes()}`.slice(-2)
    const seconds=`0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutes}:${seconds}`
}

function Clock(props) {
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        var timeInterval= setInterval(() => {
            setTime(new Date())
        }, 1000);
        return ()=>{
            clearInterval(timeInterval)
        }
    },[])
    console.log(1)
    return (
        <div style={{fontSize: '32px'}} >
            {formatDate(time)}
        </div>
    );
}

export default Clock;