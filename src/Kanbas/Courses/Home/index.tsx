import { FaCalendarCheck } from "react-icons/fa";
import ModuleList from "../Modules/List";

function Home() {
  return (
    <div>
      <div className="d-flex me-2">
        <ModuleList />
        <div className="ml-4 p-2 d-none d-lg-block">
          <div>
            <h3 className="mt-0">Course Status</h3>
            <button className="btn btn-outline-dark">Unpublish</button>
            <button className="btn btn-success">Published</button>
            <div className="list-group mt-2">
              <a href="#" className="list-group-item list-group-item-action">
                Import Existing Content
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Import From Commons
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Choose Home Page
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                View Course Stream
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                New Announcements
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                New Analytics
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                View Course Notifications
              </a>
            </div>
            <div className="d-flex justify-content-between mt-2 mb-0">
              <h4>To Do</h4>
            </div>
            <hr className="m-0" />
            <div className="d-flex">
              <ul className="wd-navigation m-0 p-0" style={{ width: "300px" }}>
                <li>
                  <a href="link">Grade A1</a>
                  <div style={{ fontSize: 14, color: "grey" }}>
                    100 Points Sept 7 at 11:45am
                  </div>
                </li>
                <li>
                  <a href="link">Grade A2</a>
                  <div style={{ fontSize: 14, color: "grey" }}>
                    100 Points Sept 11 at 11:45am
                  </div>
                </li>
                <li>
                  <a href="link">Grade A3 </a>
                  <div style={{ fontSize: 14, color: "grey" }}>
                    100 Points Sept 11 at 6pm
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
