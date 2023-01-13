import React, { useState } from 'react';

import './Project.css'
function Project() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <div
                onMouseOver={() => setShowPopup(true)}
                onMouseOut={() => setShowPopup(false)}
            >
                Hover me
            </div>
            {showPopup && <div>kontol</div>}
        </div>
    );
}

export default Project;
