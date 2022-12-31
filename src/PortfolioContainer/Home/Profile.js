
import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
function Profile(props) {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.facebook.com/shailja.bahuguna.54'>
                            <i className=' fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className=' fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className=' fa fa-twitter-square'></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCPcV7-Y0P3pL7UTxWzzHKQA'>
                            <i className=' fa fa-youtube-square'></i>
                        </a>
                       </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {' '}
                            Hello,I'm <span className='highlighted-text'>Shailja Bahuguna</span>
                        </span>
                    </div>
                    <div className='profile-detail-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev ♦",
                                    1000,
                                    "Efficient in Problem Solving 💻",
                                    2000,
                                    'Proficient in :C,C++,Java📌',
                                    4000,
                                    "Relational Database(MySQL):Proficient ✅",
                                    3000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Seeking a challenging opportunity which recognizes my true potential while nurturing my skills.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {' '}
                            Hire Me{' '}
                        </button>
                        <a href='ShailjaBahuguna_Resume (1).pdf' download='Shailja ShailjaBahuguna_Resume (1).pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                 </div>
                 <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                 </div>
            </div>
        </div>

    );
}

export default Profile;