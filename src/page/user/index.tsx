import React, {useState, useEffect} from "react";
import UserOveral from "./user";
import "./index.css";
import UserCourse from "./userCourse";
import type { TabsProps } from 'antd';
import { Divider, Tabs } from "antd";
import UserPost from "./userPost";
import UserQuestion from "./userQuestion";
import UserPrize from "./userPrize";
import {getUserDetail} from "../../service/auth"
import { getCourseByUserId} from "../../service/course"
import {IUser} from "../../type/IUser"
import { ICourse } from "../../type/ICourse";
interface Props {}

const User: React.FC<Props> = () => {
  const [userInfo, setuserInfo] = useState<IUser | null>(null);
  const [course, setCourse] = useState<ICourse | null>(null);
  let localAccount = localStorage.getItem("account") as any;
  let account = JSON.parse(localAccount);

  useEffect(() => { 
    fetchUserById()
  }, [])
  const fetchUserById = async () => {
    try {
      const fetchUser = await getUserDetail();
      const user = fetchUser.data;
      setuserInfo(user);
    } catch (error) {
      console.error("[Error fetching ]", error);
    }
  };

  const fetchCoursesByUserId = async () => {
    try {
      const fetchCourse = await getCourseByUserId();
      const course = fetchCourse.data;
      setCourse(course);
    } catch (error) {
      console.error("[Error fetching ]", error);
    }
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Khóa học của bạn',
      children: <UserCourse />
    },
    {
      key: '2',
      label: 'Bài viết',
      children: <UserPost/>
    },
    {
      key: '3',
      label: "Câu hỏi",
      children: <UserQuestion/>
    },
    {
      key:'4',
      label: 'Lịch sử nhận thưởng',
      children: <UserPrize/>
    }
  
  ]
  
  const UserTabs = () => { 
  return ( 
    <Tabs 
        tabPosition="left"
        // type="card"
        defaultActiveKey="1"
        items={items}
        /> 
    
  )
  }
  return (
    <div className="user-wrapper">
      <div className="user-title">
        <span>Thông tin tài khoản</span>
      </div>
      <UserOveral account={userInfo}></UserOveral>
      <Divider
        style={{ margin: "20px 0", borderColor: "rgba(0, 0, 0, 0.1)" }}
      />
      <UserTabs />
    </div>
  );
};
export default User;
