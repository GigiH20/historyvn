import React from "react";
import { IChapter } from "../../type/IChapter";
import { ICourse } from "../../type/ICourse";
import { Button } from "antd";
import { userEnrolledCourse } from "../../service/course";
interface Props {
  data: ICourse;
}
const TitleLesson: React.FC<Props> = (props: Props) => {
  let { data } = props;
  const enrolledCourse = () => { 
    userEnrolledCourse(data.id)
  }
  return (
    <div className="title-wrapper">
      <div className="title">
        <span>{data.title}</span>
      </div>
      <div className="title-description">
        <span>{data.description}</span>
      </div>
      <div className="enroll-course">
        <div className="enroll-course-price">
          <div className="enroll-text">
            <span>
            {data.price > 0 ? data.price : "Free"}
            </span>
          </div>
          <div>
            <Button className="enroll-button">
            Đăng ký học ngay
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TitleLesson;
