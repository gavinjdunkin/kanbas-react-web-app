
import { Link } from "react-router-dom";
import "./index.css";
import { Key, ReactElement, JSXElementConstructor, ReactNode } from "react";
function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
  courses: any;
  course: any;
  setCourse: any;
  addNewCourse: any;
  deleteCourse: any;
  updateCourse: any;
})
 {



  return (
    <div className="p-4">

    <h1>Dashboard</h1>
    <h5>Course</h5>
    <input value={course.name} className="form-control"
           onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
    <input value={course.number} className="form-control"
           onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
    <input value={course.startDate} className="form-control" type="date"
           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
    <input value={course.endDate} className="form-control" type="date"
           onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
    <button onClick={addNewCourse} >
      Add
    </button>
    <button onClick={updateCourse} >
        Update
      </button>


      <h2>Published Courses (3)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 card-container">
        {courses.map((course: { _id: Key | null | undefined; image: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => (
          <div key={course._id} className="col">
            <div className="card card-custom">
              <img src={`/images/${course.image}`} className="card-img-top card-img-custom" alt="placeholder"/>
              <div className="card-body card-body-custom">
                <Link className="card-title card-title-custom" to={`/Kanbas/Courses/${course._id}/Home`}>
                  {course.name} 
                  <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                  <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>
                  </Link>
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