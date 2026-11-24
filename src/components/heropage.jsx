import React from "react";

const HeroPage = () => {
    return (
        <div className="max-w-6xl mx-auto h-screen px-30 py-20 flex flex-row">
            <div className="flex flex-col">
                <p className="text-sm text-orange-500">BEST DESTINATIONS ARROUND THE WORLD</p>
                <div>
                    <div className="text-7xl mt-4">
                        <div className="flex flex-row items-center"><span className="mr-7">Travel,</span>
                            <p> enjoy</p> <img className="-ml-4" src="src\assets\images\stylish-underline.png" />
                        </div>
                        <div>and live a new</div> 
                        <div>and full life</div>
                    </div>

                    <p className="text-sm mt-7">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                    <div className="flex flex-row items-center gap-6">
                        <button className="bg-orange-400  text-white text-sm px-4 py-3 rounded-md mt-4 hover:bg-orange-600">Find out more</button>

                        <div className="flex flex-row justify-center items-center min-h-screen mt-4">
                            <img src="src\assets\images\play-shadow.png" alt="play-shadow" className="mt-4" /> <p className="text-sm">Play demo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img src="src\assets\images\lady-with-aircraft.png" alt="hero-image" className="" />
            </div>
        </div>
    );
};

export default HeroPage;