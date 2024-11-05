import React, { useState } from 'react';

const NewPage = () => {
    const [circlePosition, setCirclePosition] = useState(null);

    const renderCircle = (x, y) => {
        setCirclePosition({ x, y });
    };

    return (
        <div 
            className="min-h-[100vh] h-full w-full bg-gray-400 relative" 
            onClick={(event) => renderCircle(event.clientX, event.clientY)}
        >
            {circlePosition && (
                <div 
                    className="bg-red-500 w-8 h-8 rounded-full absolute" 
                    style={{ 
                        left: circlePosition.x - 16, // Center the circle horizontally
                        top: circlePosition.y - 16   // Center the circle vertically
                    }}
                ></div>
            )}
        </div>
    );
};

export default NewPage;
