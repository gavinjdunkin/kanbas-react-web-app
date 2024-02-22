import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (3)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 card-container">
        {courses.map((course) => (
          <div key={course._id} className="col">
            <div className="card card-custom">
              <img src={`/images/${course.image}`} className="card-img-top card-img-custom" alt="placeholder"/>
              <div className="card-body card-body-custom">
                <Link className="card-title card-title-custom" to={`/Kanbas/Courses/${course._id}/Home`}>
                  {course.name} </Link>
                <p className="card-text">{course.name}</p>
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary btn-custom">
                  Go </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;