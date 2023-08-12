import React from 'react'
import './image.css'
export default function Image(props) {
    return (
        <div className='card'>
            <img src={props.src} alt={props.alt} className='img h-72'/>
            <div className="text-content">
                <img src={props.proimg} alt="owner profile" className='w-10 h-10 rounded-full' />
                <p>{props.username}</p>
            </div>
        </div>
    )
}