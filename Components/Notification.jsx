// src/Notification.js
import React, { useState } from 'react';
import './Notification.css'; // Import the futuristic CSS styles

const Notification = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNotification = () => {

       if(!isOpen)
       {
        const sound = new Audio('/click.wav');
        sound.play();
       }
       else{
        const sound = new Audio('/Cancel.wav');
        sound.play();
       }

        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="open-button" onClick={toggleNotification}>
                Show Message from Dada
            </button>

            {isOpen && (
                <div className="notification-container">
                    <div className="notification-tablet">
                        <h2 className="notification-title">Message from Dada</h2>
                        <p className="notification-message">
                            {data}
                        </p>
                        <button className="close-button" onClick={toggleNotification}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Notification;
