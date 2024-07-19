import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, Space, Typography } from "antd";
import { ICourse } from "../../../type/ICourse";
import { getImgByCourseId } from "../../../service/course";
import { useNavigate } from 'react-router-dom';
import { ILesson } from "../../../type/IChapter";

const { Meta } = Card;
interface Props {
  data: ICourse;
  data1?: ILesson;
}

const { Paragraph, Text } = Typography;

const HistorySection = (props: Props) => {
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
  
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImgsByCourseId = async (id: number) => {
      try {
        const fetchImg = await getImgByCourseId(id);
        const imgs = fetchImg.data.slice(1, 4).map((img: any) => {
          const idPart = img.image_alt.split('id=')[1];
          return `https://drive.google.com/thumbnail?id=${idPart}`;
        });
        setImgUrls(imgs);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchImgsByCourseId(id);
  }, [id]);

  return (
    <Card title={title} className="hs-wrapper">
      <div className="row-1">
        <div className="description">
          {description}
        </div>
        <div>
          <Button block onClick={() => navigate(`/course/${id}`)}>Học ngay</Button>
        </div>
      </div>
      <div className="row-2">
        {imgUrls.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`Course ${index + 1}`} className="course-image" />
        ))}
      </div>
      <div className="row-3">
        <Space>
          <Button>{DurationToLearn} giờ học</Button>
          <Button>{type}</Button>
          <Button>Thu thập {reward} LH</Button>
          <Button>{category}</Button>
        </Space>
        <div className="price">{price === 0 ? "Free" : `${price} LINK Token`}</div>
      </div>
      <Card type="inner" title="Nội dung" style={{ backgroundColor: 'white', marginTop: '20px' }}>
        <div className="inner-wrapper">
          <div className="content-element">
            <div className="number">01</div>
            <div>Tổng quan</div>
          </div>
          <div className="content-element">
            <div className="number">02</div>
            <div>Nhân vật lịch sử</div>
          </div>
          <div className="content-element">
            <div className="number">03</div>
            <div>Sự kiện lịch sử</div>
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default HistorySection;
