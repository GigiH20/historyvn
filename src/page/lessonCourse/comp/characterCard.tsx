import React from "react";
import {
    ClockCircleOutlined
  } from '@ant-design/icons';
import { Button } from "antd";  
import { useNavigate,useParams } from "react-router-dom";
import { ILesson } from "../../../type/IChapter";
interface Props {
  data?: ILesson;
}
const CharaterCard: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    let {data} = props
  return (
    <Button className="story-card-wrapper" onClick={() =>navigate(`/course/nha-ho/test`) }>
      <div className="story-title">
        <div className="title">
            <h3>{data?.title}</h3>
        </div>
        <div className="lesson-order">
            <span>{data?.description}</span>
        </div>
      </div>
      <div className="duration">
        <ClockCircleOutlined/>&nbsp;10 minutes
      </div>
    </Button>
    
  );
};
export default CharaterCard;
