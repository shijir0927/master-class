import React from "react";
import { Button } from "../../components"

const HeroSection = () => {
    return(
        <div className="bg-yellow-700 py-36 flex items-center justify-center">
            <div className="max-w-lg flex flex-col items-center">
                <h1 className="text-5xl font-bold text-center mb-12">High Quality Coding Videos Every Week!</h1>
                <Button text="Get Access Now" />
            </div>
        </div>
    );
}

export default HeroSection;