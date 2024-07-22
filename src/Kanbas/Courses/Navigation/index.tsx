import { courses } from "../../Database";
import { useLocation, useParams } from "react-router";
import "./index.css";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
  ];
  return (
    <div id="wd-courses-navigation" className="list-group  rounded-0">
      {links.map((link) => (
        <a
          id={`wd-course-${link.toLowerCase()}-link`}
          href={`#/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item text-danger border border-0 ${
            pathname.includes(link) ? "active" : ""
          }`}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
