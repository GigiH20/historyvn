import React from "react";
import { IChapter } from "../../type/IChapter";
import { ICourse } from "../../type/ICourse";
import { Button } from "antd";
import { userEnrolledCourse } from "../../service/course";
import { notification } from 'antd';

interface Props {
  data: ICourse;
  enrollFunc: (values: any) => void,
}
const TitleLesson: React.FC<Props> = (props: Props) => {

  let { data, enrollFunc } = props;

//   const handleSubmit = (values: any) => {
//     if (enrollFunc) {
//       enrollFunc((values))
//     }
// }

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
            {data.price === 0 ? "Free" :  `${data.price} LINK Token`}
            </span>
          </div>
          <div>
            <Button className="enroll-button" onClick={()=> enrollFunc(data.id)}>
            Đăng ký học ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleLesson;
