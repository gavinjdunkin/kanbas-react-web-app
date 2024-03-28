import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Routes, Route, Navigate } from "react-router";
import Assignments from "./Assignments";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
function Courses() {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <h1 style={{ color: 'red', marginTop: '20px', marginBottom: '20px', marginLeft: '20px' }}> Course {course?.name}</h1>
      <div className="d-flex">
        <CourseNavigation />
        <div className="overflow-y-scroll" style={{ width: '100%', height: '100%' }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;