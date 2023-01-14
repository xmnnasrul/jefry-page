import React, { useState } from 'react';
import Gambar1 from './../Assets/foto 1.png'
import Gambar2 from './../Assets/foto 2.png'
import Gambar2prv from './../Assets/foto 2 prv.png'
import Gambar3 from './../Assets/SIXSHIFTS 4.jpg'
import Gambar3prv from './../Assets/SIXSHIFTS 4 - Copy.jpg'
import Gambar4 from './../Assets/invy.jpg'
import Gambar5prv from './../Assets/SIXSHIFTS POSTER - Copy.png'
import Gambar5 from './../Assets/SIXSHIFTS POSTER.png'
import Gambar6prv from './../Assets/Screenshot (206).png'
import Gambar6 from './../Assets/video.mp4'
import './Project.css'

import './Project.css'
function Project() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);




    return (
        <div id='project'>
            <div className="Project-Header">
                <h2>Our Project</h2>
            </div>
            <div className="Card-Project">

                <div className="Card" onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
                    <div className="Card-Content">
                        <div className="Card-Header">
                            <h3>FAKE MVP</h3>
                        </div>
                        <div className="Card-Body">
                            <img src={Gambar1} alt="gambar 1" />
                            {showPopup &&
                                <div className='popup' onClose={() => setShowPopup(false)}>
                                    <img src={Gambar1} className="gambar" alt="popup" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="Card" onMouseEnter={() => setShowPopup1(true)} onMouseLeave={() => setShowPopup1(false)}>
                    <div className="Card-Content">
                        <div className="Card-Header">
                            <h3>FAKE MVP</h3>
                        </div>
                        <div className="Card-Body">
                            <img src={Gambar2prv} alt="gambar 1" />
                            {showPopup1 &&
                                <div className='popup' onClose={() => setShowPopup1(false)}>
                                    <img src={Gambar2} className="gambar dua" alt="popup" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="Card" onMouseEnter={() => setShowPopup2(true)} onMouseLeave={() => setShowPopup2(false)}>
                    <div className="Card-Content">
                        <div className="Card-Header">
                            <h3>FAKE MVP</h3>
                        </div>
                        <div className="Card-Body">
                            <img src={Gambar3prv} alt="gambar 1" />
                            {showPopup2 &&
                                <div className='popup' onClose={() => setShowPopup2(false)}>
                                    <img src={Gambar3} className="gambar tiga" alt="popup" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="Card" onMouseEnter={() => setShowPopup3(true)} onMouseLeave={() => setShowPopup3(false)}>
                    <div className="Card-Content">
                        <div className="Card-Header">
                            <h3>FAKE MVP</h3>
                        </div>
                        <div className="Card-Body">
                            <img src={Gambar4} alt="gambar 1" style={{ width: '85%' }} />
                            {showPopup3 &&
                                <div className='popup' onClose={() => setShowPopup3(false)}>
                                    <img src={Gambar4} className="gambar" alt="popup" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="Card" onMouseEnter={() => setShowPopup4(true)} onMouseLeave={() => setShowPopup4(false)}>
                    <div className="Card-Content">
                        <div className="Card-Header">
                            <h3>FAKE MVP</h3>
                        </div>
                        <div className="Card-Body">
                            <img src={Gambar5prv} alt="gambar 1" style={{ width: '85%' }} />
                            {showPopup4 &&
                                <div className='popup' onClose={() => setShowPopup4(false)}>
                                    <img src={Gambar5} className="gambar" alt="popup" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="Card" onMouseEnter={() => setShowPopup5(true)} onMouseLeave={() => setShowPopup5(false)}>
                    <div className="Card-Content">
                        <div className="Card-Header">
                            <h3>FAKE MVP</h3>
                        </div>
                        <div className="Card-Body">
                            <img src={Gambar6prv} alt="gambar 1" style={{ width: '85%' }} />
                            {showPopup5 &&
                                <div className='popup' onClose={() => setShowPopup5(false)}>
                                    <video class="gambar" autoPlay loop muted>
                                        <source src={Gambar6} type="video/mp4" />
                                    </video>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}



export default Project;
