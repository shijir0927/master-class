import React from "react";
import { Button } from "../../components";

const BannerSection = () => {
    return (
        <div className="bg-stone-400 flex flex-col items-center py-12">
            <p className="text-center mb-8">Sample Text Long Sample Text Long Sample Text</p>
            <Button text="Get Access Now"/>
        </div>
    );
}

export default BannerSection;