import React, { useState, useEffect } from "react";
import "./index.css";
import { Divider, Button, notification } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { getLessonContentByLessonId, lessonComplete } from "../../service/lessonContent";
import { ILessonContent } from "../../type/IChapter";
interface Props {}

const LessContent: React.FC<Props> = () => {
    const {id, lid} = useParams();
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const [lessonContent, setLessonsContent] = useState<ILessonContent| null>(null)
    const [imgUrl, setImgUrl] = useState<string>("");

    useEffect(() => {
        fetchLsContent()},[])
    const fetchLsContent = async() => { 
        let  value = {courseId:id , lId:lid} 
        try{ 
            const fetchLessonContent = await getLessonContentByLessonId(value)
            const lessonContent = fetchLessonContent.data[0];
            console.log("[lesson]", lessonContent)
            const img = lessonContent.illustration?.split("id=")[1];
            const newLink = `https://drive.google.com/thumbnail?id=${img}`
            setLessonsContent(lessonContent);
            setImgUrl(newLink)
        } catch (error) { 
            console.error("Error", error)
        }
    }
    const completeLesson = async() => { 
        const btn = ( 
            <Button onClick={() => navigate(`/course/${id}`)}>Chuyển về trang bài học</Button>
        )
        try{ 
            const responseData = await lessonComplete(lid);
            const infoCompleteLesson = responseData.data;
            api.open({ 
                message: 'Chúc mừng',
                description: `Chúc mừng đã ${infoCompleteLesson.enrolled_by} hoàn thành khóa học`,
                type: 'success',
                placement: "top",
                btn
            });
        } catch (error) { 
            api.open({ 
                message: "Failed",
                description: `Enroll course failed, ${error}`,
                type: "error",
                duration: 0,
                placement: "top"

            })
        }
    }
  return (
    <div className="lesson-section-wrapper">
        {contextHolder}
      <div className="title-lesson-section">
        <span>{lessonContent?.title}</span>
      </div>
      <Divider />
      <img src={imgUrl}
       width="1000px" height="500px"
        />
      <div className="lesson-section-content">
        <span>
        {lessonContent?.content}
        </span>
      </div>
      <Divider/>
      <div className="lesson-section-button">
        <Button onClick={() => completeLesson()}>Hoàn thành bài học</Button>
      </div>
    </div>
  );
};

export default LessContent;
