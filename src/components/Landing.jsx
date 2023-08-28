import React from 'react'
import { uday } from '../assets'
import SocialIcons from './SocialIcons'
function Landing() {
    return (
        <div id='landing' className="max-w-6xl mt-8 mx-auto flex flex-col-reverse sm:grid sm:grid-rows-1 sm:grid-cols-2 h-full">
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
                <div
                    class="bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-danger p-2 text-xs"></div>
                <div className='w-full flex items-start justify-center gap-x-2 flex-wrap md:justify-start'>
                    <a href="tel:9381400582">

                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"

                            class="mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-2 h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                id="phone"
                            >
                                <path d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z"></path><path d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z"></path>
                            </svg>
                            +91 9381400582
                        </button>
                    </a>

                    <a href="mailto:officialudaykiran@gmail.com">
                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            class="mb-2 bg-gradient-to-r items-center justify-center from-indigo-500 via-purple-500 to-pink-500 flex rounded px-6 py-2.5 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' class="mr-2 h-3.5 w-3.5" viewBox="0 0 32 32" id="mail"><path fill-rule="evenodd" d=" M 6 5 L 26 5 C 27.33 5 28.6 5.53 29.54 6.46 C 30.47 7.4 31 8.67 31 10 L 31 22 C 31 23.33 30.47 24.6 29.54 25.54 C 28.6 26.47 27.33 27 26 27 L 6 27 C 4.67 27 3.4 26.47 2.46 25.54 C 1.53 24.6 1 23.33 1 22 L 1 10 C 1 8.67 1.53 7.4 2.46 6.46 C 3.4 5.53 4.67 5 6 5 Z  M 6 7 L 26 7 C 26.8 7 27.56 7.32 28.12 7.88 C 28.68 8.44 29 9.2 29 10 L 29 22 C 29 22.8 28.68 23.56 28.12 24.12 C 27.56 24.68 26.8 25 26 25 L 6 25 C 5.2 25 4.44 24.68 3.88 24.12 C 3.32 23.56 3 22.8 3 22 L 3 10 C 3 9.2 3.32 8.44 3.88 7.88 C 4.44 7.32 5.2 7 6 7 Z "></path><path d="M29.55 9.11C29.79 8.99 30.06 8.97 30.32 9.05 30.57 9.14 30.78 9.32 30.89 9.55 31.01 9.79 31.03 10.06 30.95 10.32 30.86 10.57 30.68 10.78 30.45 10.89L18.24 17C18.23 17 18.22 17.01 18.21 17.01 17.52 17.33 16.76 17.49 16 17.48 15.24 17.49 14.48 17.33 13.79 17.01 13.78 17.01 13.77 17 13.76 17L1.55 10.89C1.32 10.78 1.14 10.57 1.05 10.32.97 10.06.99 9.79 1.11 9.55 1.22 9.32 1.43 9.14 1.68 9.05 1.94 8.97 2.21 8.99 2.45 9.11L14.65 15.2C15.07 15.4 15.53 15.49 16 15.48 16.47 15.49 16.93 15.4 17.35 15.2L29.55 9.11zM11 21C11.27 21 11.52 21.11 11.71 21.29 11.89 21.48 12 21.73 12 22 12 22.27 11.89 22.52 11.71 22.71 11.52 22.89 11.27 23 11 23L6 23C5.73 23 5.48 22.89 5.29 22.71 5.11 22.52 5 22.27 5 22 5 21.73 5.11 21.48 5.29 21.29 5.48 21.11 5.73 21 6 21L11 21z"></path></svg>
                            officialudaykiran@gmail.com
                        </button>
                    </a>

                </div>
                <SocialIcons all={false} />
                <a
                    href="https://docs.google.com/document/d/1goZkkmxtaf2TR2PLJbAxhGQMDh2F1-jzHTvRLmoJ7js/edit?usp=sharing"
                    class="mt-3 p-0.5 rounded bg-gradient-to-r items-center gap-x-1 from-indigo-500 via-purple-500 to-pink-500 flex text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                    <div className='bg-none flex flex-row justify-between px-3 py-2 bg-gray-900'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" id="download" fill='#fff'><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path></svg>
                        <button class="text-white bg-gray-900">View Resume</button>
                    </div>
                </a>
            </div >
            <div className="h-auto pb-10 flex justify-center ml-0 sm:ml-16 items-center">
                <img src={uday} className="h-72 sm:h-80 rounded-full mt-5 sm:rounded-3xl drop-shadow-[0_0px_35px_rgba(142,36,170,1)]" alt="" />
            </div>
        </div >
    )
}



export default Landing
