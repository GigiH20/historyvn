import React, { useEffect, useState } from "react";
import "./index.css";
import TitleLesson from "./titleLesson";
import { Divider, Button, Space } from "antd";
import ItemCard from "./item_Card";
import { getCourseById, getImgByCourseId } from "../../service/course";
import { ICourse } from "../../type/ICourse";
import { IChapter, ILesson } from "../../type/IChapter";
import { useParams } from "react-router-dom";
import {
  ClockCircleTwoTone,
  ContainerTwoTone,
  UserOutlined,
  DollarTwoTone,
} from "@ant-design/icons";
import { getChapterByCourseID } from "../../service/chapter";
interface Props {}
const LessonCourse: React.FC<Props> = () => {
  const [course, setCourse] = useState<ICourse | null>(null);
  const [chapter, setChapter] = useState<IChapter[] | null>([]);
  const [lessons, setLessons] = useState<ILesson[] | null>([]);
  const [imgUrl, setImgUrl] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    fetchCourseByID();
    fetchChapterByCourseID();
  }, []);

  const fetchCourseByID = async () => {
    console.log("[course param]", id);
    let value = Number(id);
    try {
      const fetchCourse = await getCourseById(value);
      const course = fetchCourse.data;
      console.log("[course]", course);
      setCourse(course);
    } catch (error) {
      console.error("[Error fetching ]", error);
    }
  };
  useEffect(() => {
    const fetchImgByCourseId = async (id: any) => {
      try {
        const fetchImg = await getImgByCourseId(id);
        const img = fetchImg.data[0].image_alt;
        const idPart = img.split("id=")[1];
        const newLink = `https://drive.google.com/thumbnail?id=${idPart}`;
        setImgUrl(newLink);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchImgByCourseId(id);
  }, [id]);

  const fetchChapterByCourseID = async () => {
    console.log("[course param]", id);
    let value = Number(id);
    try {
      const fetchCourse = await getChapterByCourseID(value);
      const chapter = fetchCourse.data;
      console.log("[chapter]", chapter);
      setChapter(chapter);
    } catch (error) {
      console.error("[Error fetching ]", error);
    }
  };
  return (
    <div className="content-lesson-wrapper">
      {course && <TitleLesson data={course} />}
      <Space></Space>
      <Divider
        style={{ margin: "20px 0", borderColor: "rgba(0, 0, 0, 0.1)" }}
      />
      <div className="lesson-bigthumb">
        <img src={imgUrl} />
        <div className="icon-info">
          <div className="icon-info-text">
            <ClockCircleTwoTone style={{ fontSize: "30px" }} />
            <span>{course?.DurationToLearn} phút</span>
          </div>
          <div className="icon-info-text">
            <ContainerTwoTone style={{ fontSize: "30px" }} />
            <span>{course?.LessonsCount} bài</span>
          </div>
          <div className="icon-info-text">
            <UserOutlined style={{ fontSize: "30px" }} />
            <span>{course?.users_enrolled} người đăng ký</span>
          </div>
          <div className="icon-info-text" style={{ color: '#FF9500'}}>
            <DollarTwoTone style={{ fontSize: "30px", }} twoToneColor ='#FF9500'  />
            <span>{course?.reward} LH</span>
          </div>
        </div>
      </div>
      {chapter && chapter.map((item, index) => (
        <ItemCard key={index} data={item} />
      ))}

    </div>
  );
};
export default LessonCourse;
