import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, Space, Typography } from "antd";
import { ICourse } from "../../../type/ICourse";
import { getImgByCourseId } from "../../../service/course";
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
interface Props {
  data: ICourse;
}

const { Paragraph, Text } = Typography;


const LessonCard = (props: Props) => {
  const { Paragraph, Text } = Typography;

  const navigate = useNavigate();
  let { data } = props;
  let {
    DurationToLearn,
    HashCourse,
    LessonsCount,
    QuizzesCount,
    author_id,
    category,
    description,
    duration_quiz,
    id,
    price,
    reward,
    title,
    type,
    users_enrolled,
  } = data;
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const fetchImgByCourseId = async (id: number) => {
      try {
        const fetchImg = await getImgByCourseId(id);
        const img = fetchImg.data[0].image_alt;
        const idPart = img.split('id=')[1];
        const newLink = `https://drive.google.com/thumbnail?id=${idPart}`;
        setImgUrl(newLink);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchImgByCourseId(id);
  }, [id]);

  return (
    <Card
      style={{
        width: "390px",
        height: "auto",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
      }}
    >
      <div>
        <img
          alt="example"
          src={imgUrl}
          style={{ width: "100%", height: "200px", borderRadius: "10px" }}
        />
        <div className="detail-lesson-type">
          <Space className="type-lesson" direction="horizontal" size="large">
            <Button ghost>{DurationToLearn}</Button>
            <Button ghost>{type}</Button>
          </Space>
          <div className="price-lesson">
            <Button ghost>{price}</Button>
          </div>
        </div>
        <div className="lesson-card-content">
          <h3>{title}</h3>
          <Paragraph ellipsis={{rows: 4, tooltip: 'Đăng ký khoá học để xem thêm'}} >{description}</Paragraph>
          {/* <span>{description}</span> */}
        </div>
      </div>
      <Button block onClick={() => navigate(`/course/${id}`)}>Học ngay</Button>
      {/* <Button onClick={() => console.log("[img -alt]", imgUrl)}>
        img link{" "}
      </Button> */}
    </Card>
  );
};

export default LessonCard;
