import SearchComp from "../../component/search"
import React, {useState, useEffect} from "react"
import './index.css'
import HistoryPhase from "./historyPhaseList"
import HistoryContent from "./historyContent"
import { useParams, useNavigate } from 'react-router-dom';
import { getAllCourse } from "../../service/course"
import { ICourse } from "../../type/ICourse";

interface Props{}

const CoursePage:React.FC<Props> = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<ICourse[]>([])
    useEffect(() => {
        fetchAllCourse();
      }, []);
      const fetchAllCourse = async () => {
        try {
          const fetchCourses = await getAllCourse();
          const courses =  fetchCourses.data;
          console.log('[course at get func]', courses);
          setCourse(courses);
        } catch (error) {
          console.error("Error fetching courses: ", error);
        }
      };

    return ( 
        <div className="content-course-wrapper">
            <SearchComp/>
            <div className="content-course">
                <HistoryPhase data={course}></HistoryPhase>
                <HistoryContent></HistoryContent>
            </div>
        </div>
    )
}
export default CoursePage