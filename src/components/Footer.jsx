import React from "react";
import SocialIcons from "./SocialIcons";

export const Footer = () => {
    return (
        <div id="contact">

            <footer className="bg-primary container sm:px-10 md:px-0 py-10 mx-auto">
                <div className="flex items-center space-x-6">
                    <div>
                        <h1 className="text-xl font-bold text-white">
                            UdayKiran Bandarugalla
                        </h1>
                    </div>
                </div>
                <SocialIcons all={true} />

                <p className="text-base text-gray-500 dark:text-gray-400  mt-6">
                    Hello, my name is UdayKiran. I'm a full-stack developer, which means I can build both the front-end (what users see) and back-end (what powers the website) of web applications.

                    I specialize in MERN stack development, which stands for MongoDB (a type of database), Express (a back-end web framework), React (a front-end JavaScript library), and Node.js (a back-end JavaScript runtime). These are all tools and technologies that help me create complex and dynamic web applications.
                </p>
            </footer>
        </div>
    );
};