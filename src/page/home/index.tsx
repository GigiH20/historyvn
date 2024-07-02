import React, {useEffect, useState} from "react";
import "./index.css";
import { Typography, Button } from "antd";
import SearchComp from "../../component/search";
import Lesson from "./lesson";
import Post from "./post";
import Rank from "../../component/rank";
import { useSDK } from "@metamask/sdk-react";
import {getAllCourse} from "../../service/course";
import { useNavigate } from "react-router-dom";
import { ICourse } from "../../type/ICourse";

interface Props {}

const HomePage: React.FC<Props> = () => {
  const navigate = useNavigate()
  const { sdk, connected, connecting,account, provider, chainId} = useSDK();
  const [course, setCourse] = useState<ICourse[]>([])

  useEffect(() => {
    fetchAllCourse();
  }, []);
  const fetchAllCourse = async () => {
    try {
      const fetchCourses = await getAllCourse();
      const courses =  fetchCourses.data;
      console.log('[course at get func]', courses);
      setCourse(courses);
    } catch (error) {
      console.error("Error fetching courses: ", error);
    }
  };
  const buttonClearJWT = () => { 
    const token = localStorage.removeItem("cjwt");
  }
  return (
    <div >
      <div className="big-thumb">
        <div className="big-thumb-content">
          <h1 className="bona-nova-regular-italic">
            “Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam. Sử ta
            dạy cho ta những chuyện vẻ vang của tổ tiên ta. Dân tộc ta là con
            Rồng cháu Tiên, có nhiều người tài giỏi đánh Bắc dẹp Nam, yên dân
            trị nước tiếng để muôn đời. Sử ta dạy cho ta bài học này: Lúc nào
            dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái
            lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn.”
          </h1>
          <h1 style={{ float:"right"}}>- Hồ Chí Minh -</h1>
        </div>
        <div className="img-dragon" style={{ marginLeft: '180px'}}>
          <img src="./dragon.png" width='750px'height='500px' />
        </div>
      </div>
      <div className="content-home">
            <SearchComp className="search-comp"/>
            <Lesson data = {course}/>
            <Post/>
            <Rank/>
            <Button onClick={() => console.log('[state course]' , course)}>CHeck all course </Button>
      </div>
    </div>
  );
};

export default HomePage;
