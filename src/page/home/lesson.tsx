import React from "react";
import { Input, Button, Space, Col, Row } from "antd";
import LessonCard from "./comp/lessonCard";
import { useNavigate } from "react-router-dom";
import { ICourse } from "../../type/ICourse";
import { Swiper, SwiperSlide } from 'swiper/react';

const { Search } = Input;
interface LessonProps {
  data: ICourse[];
}
const Lesson = (props: LessonProps) => {
  let { data } = props;
  const navigate = useNavigate();
  return (
    <div className="lesson-wrapper">
      <div className="title">
        <h1>Hôm nay học gì</h1>
      </div>
      <div className="description-lesson">
        <span>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </span>
        <Button type="primary" onClick={() => navigate("/course")}>
          Xem tất cả
        </Button>
      </div>
      <div className="lesson-card">
        {data &&
          data.map((lesson, index) => <LessonCard key={index} data={lesson} />)}
      </div>
      
    </div>
  );
};
export default Lesson;
