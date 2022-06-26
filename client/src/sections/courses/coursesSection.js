import React from "react";
import { CourseCard } from "../../components";
import coursesData from "./coursesData.json";

const CoursesSection = ({  }) => {
    return (
        <div className="bg-neutral-700 py-12 flex flex-col items-center">
            <div className="container px-12">
                <h2 className="text-center text-4xl mb-12 text-white">Courses Available</h2>
                <div className="grid grid-cols-4 gap-4">
                {coursesData.map((course, key) => {
                    return <CourseCard title={course.title} description={course.description} key={key}/>
                })}
                </div>
            </div>
        </div>
    );
}

export default CoursesSection;