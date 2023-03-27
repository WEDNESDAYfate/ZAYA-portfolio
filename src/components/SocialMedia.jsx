import React, { useState, useEffect } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoIosDocument } from 'react-icons/io';
import { client } from '../client';

const SocialMedia = () => {
    const [resume, setResume] = useState([]);

    useEffect(() => {
        const resumeQuery = '*[_type == "resume"]';

        client.fetch(resumeQuery).then((data) => {
            setResume(data);
        });
    }, []);

    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/lkhagvazaya-gantulga/"><BsLinkedin /></a>
            </div>

            <div>
                <a href="https://github.com/WEDNESDAYfate"> <BsGithub /></a>
            </div>

            <div>
                <a href={resume.length > 0 ? resume[0].resume : ""} target='_blank' rel="noopener noreferrer"><IoIosDocument /></a>
            </div>

        </div >
    )
}

export default SocialMedia