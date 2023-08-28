import { BallCanvas } from "./canvas";
import { technologies } from "./data";
import React from 'react'


function Skills() {
    return (
        <div id="skills" className='my-20 flex flex-row flex-wrap justify-center gap-14'>
            {technologies.map((skill, index) => (
                <div className='w-28 h-28' key={index}>
                    <BallCanvas icon={skill.icon} />
                </div>
            ))}
        </div>
    )
}

export default Skills