import React from 'react'
import { uday } from '../assets'
function Landing() {
    return (
        <div className="max-w-6xl mt-8 mx-auto flex flex-col-reverse sm:grid sm:grid-rows-1 sm:grid-cols-2 h-full">
            <div className="h-auto sm:my-32 flex justify-center flex-col items-start">
                <h1
                    className="md:text-7xl text-transparent font-poppins bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-extrabold text-4xl text-left">
                    Hi, I'am Uday
                </h1>
                <h3 className="text-xl sm:text-2xl  text-slate-600 font-sans mt-5">
                    MERN Stack | NextJS | React Native
                </h3>
                <h3 className="text-xl sm:text-2xl text-slate-500 mt-5">
                    passionated about coding and making real world projects.
                </h3>
                <button
                    className="inline-flex mt-8 items-center rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mr-2">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                    Contact me
                </button>

            </div>
            <div className="h-auto pb-10 flex justify-center ml-0 sm:ml-16 items-center">
                <img src={uday} className="h-72 sm:h-80 rounded-full mt-5 sm:rounded-3xl drop-shadow-[0_0px_35px_rgba(142,36,170,1)]" alt="" />
            </div>
        </div>
    )
}



export default Landing
