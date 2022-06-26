import React from "react";

const CourseCard = ({ image, title, description }) => {
    return(
        <div className="rounded-md overflow-hidden max-w-lg">
            <div className="h-36 bg-yellow-500 text-center">Image</div>
            <div className="bg-white p-8">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CourseCard;