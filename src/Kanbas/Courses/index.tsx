import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";


function Courses({courses}: {courses: any}) {
  const { courseId } = useParams();
  const course = courses.find((course: { _id: string | undefined; }) => course._id === courseId);
  return (
    <div>
      <h1 style={{ color: 'red', marginTop: '20px', marginBottom: '20px', marginLeft: '20px' }}><HiMiniBars3 color="red"/> Course {course?.name}</h1>
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