import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoIosDocument } from 'react-icons/io'

const SocialMedia = () => {
    // // const resumeButton = ;

    // const resumeButton = () => {
    //     // window.location.href = process.env.REACT_APP__DOWNLOAD_RESUME;
    //     window.location.href = process.env.REACT_APP_FILE_URL;
    // };

    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/lkhagvazaya-gantulga/"><BsLinkedin /></a>
            </div>

            <div>
                <a href="https://github.com/WEDNESDAYfate"> <BsGithub /></a>
            </div>

            <div>
                <a href='https://drive.google.com/file/d/1leD22Qk_thHkxnjXuTTwCNPlnHgVSwSZ/view?usp=sharing' ><IoIosDocument /></a>

            </div>

        </div >
    )
}

export default SocialMedia