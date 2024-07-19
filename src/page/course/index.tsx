import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SearchComp from "../../component/search";
import './index.css';
import HistoryPhase from "./historyPhaseList";
import HistoryContent from "./historyContent";
import { getAllCourse, getByKeyword } from "../../service/course";
import { ICourse } from "../../type/ICourse";

interface Props {}

const CoursePage: React.FC<Props> = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<ICourse[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        fetchAllCourse();
    }, []);

    const fetchAllCourse = async () => {
        try {
            const fetchCourses = await getAllCourse();
            const courses = fetchCourses.data;
            console.log('[course at get func]', courses);
            setCourse(courses);
        } catch (error) {
            console.error("Error fetching courses: ", error);
        }
    };

    const handleSearch = async (term: string) => {
        setSearchTerm(term);
        try {
            const result = await getByKeyword(term);
            if (result.data) {
                const courses = result.data;
                setCourse(courses);
            } else {
                console.error("No data found for the search term:", term);
            }
        } catch (error) {
            console.error("Error fetching courses by keyword:", error);
        }
    };

    const handleCategoryClick = async (category: string) => {
        try {
            const result = await getByKeyword(category);  // Assuming this function works similarly for categories
            if (result.data) {
                const courses = result.data;
                setCourse(courses);
            } else {
                console.error("No data found for the category:", category);
            }
        } catch (error) {
            console.error("Error fetching courses by category:", error);
        }
    };

    return (
        <div className="content-course-wrapper">
            <SearchComp onSearch={handleSearch} />
            <div className="content-course">
                <HistoryPhase data={course} onCategoryClick={handleCategoryClick} />
                <HistoryContent data={course} />
            </div>
        </div>
    );
}

export default CoursePage;
