import React, { useEffect, useState } from "react";
import {ethers} from 'ethers';
import {contractAbi, contractAddress} from '../../assets/contracts/LinkTokenABI';
import "./index.css";
import TitleLesson from "./titleLesson";
import { Divider, Button, Space, notification } from "antd";
import ItemCard from "./item_Card";
import {
  getCourseById,
  getImgByCourseId,
  userEnrolledCourse,
} from "../../service/course";
import { ICourse } from "../../type/ICourse";
import { IChapter, ILesson } from "../../type/IChapter";
import { useParams, useNavigate } from "react-router-dom";
import {
  ClockCircleTwoTone,
  ContainerTwoTone,
  UserOutlined,
  DollarTwoTone,
} from "@ant-design/icons";
import { getChapterByCourseID } from "../../service/chapter";
import {getQuestionByCourseId} from "../../service/exam"
interface Props {}
const LessonCourse: React.FC<Props> = () => {
  const [course, setCourse] = useState<ICourse | null>(null);
  const [chapter, setChapter] = useState<IChapter[] | null>([]);
  const [lessons, setLessons] = useState<ILesson[] | null>([]);
  const [imgUrl, setImgUrl] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    fetchCourseByID();
    fetchChapterByCourseID();
  }, []);

  let value = Number(id);
  const fetchCourseByID = async () => {
    console.log("[course param]", id);
    // let value = Number(id);
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
  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
  const enrolledCourse = async (value: any) => {
    console.log("[value enroll]", value);
    try {
      if (course?.price ?? 0 > 0) {
        if (window.ethereum) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          
          const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
          console.log("contract", contractInstance)
          const reward = course?.price ?? 0; // Use 0 if course.reward is undefined or null
          const result = 100000000 * reward;
          const name = await contractInstance.approve(ethers.getAddress("0x25eaa81E1a3da566e30f51c3e9b6cbC1c0667df2") , result )
          console.log("contract", name)
          const receipt = await name.wait();
          if (receipt.status === 1) {
            await delay(3000);
            const name2 = await contractInstance.allowance(await signer.getAddress(), ethers.getAddress("0x25eaa81E1a3da566e30f51c3e9b6cbC1c0667df2"))            
          console.log("contract", name2)
            
            
          }
      } else {
          console.error('MetaMask extension not detected');
      }
      }
      await userEnrolledCourse(value);
      api.open({
        message: "Success",
        description: "Enroll course success",
        type: "success",
        duration: 0,
      });
    } catch (error) {
      api.open({
        message: "Failed",
        description: `Enroll course failed, ${error}`,
        type: "error",
        duration: 0,
      });
    }
  };

  return (
    <div className="content-lesson-wrapper">
      {contextHolder}
      {course && <TitleLesson data={course} enrollFunc={enrolledCourse} />}
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
          <div className="icon-info-text" style={{ color: "#FF9500" }}>
            <DollarTwoTone
              style={{ fontSize: "30px" }}
              twoToneColor="#FF9500"
            />
            <span>{course?.reward} LH</span>
          </div>
        </div>
      </div>
      {chapter &&
        chapter.map((item, index) => <ItemCard key={index} data={item} />)}
      <div className="item-card-wrapper">
        <div className="item-card-content">
          <div className="ordinal-test-number">
            <span>{1 + (chapter?.length ?? 0)}</span>
          </div>
          <div className="item-card-title">
            <span>Bạn đã sẵn sàng với bài kiểm tra...</span>
          </div>
          <Button className="story-card-wrapper" onClick={() => navigate(`/course/${id}/test`)}>
            <div className="story-title">
              <div className="title">
                <h3>Bài kiểm tra</h3>
              </div>
              <div className="lesson-order">
                <span>Trắc nghiệm -{course?.QuizzesCount} câu hỏi</span>
              </div>
            </div>
            <div className="duration">
              {/* <ClockCircleOutlined/>&nbsp;10 minutes */}
              <span>{course?.duration_quiz} phút</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LessonCourse;
