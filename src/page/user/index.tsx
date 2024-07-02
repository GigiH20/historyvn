import React from "react";
import UserOveral from "./user";
import "./index.css";
import UserCourse from "./userCourse";
import type { TabsProps } from 'antd';
import { Divider, Tabs } from "antd";
import UserPost from "./userPost";
import UserQuestion from "./userQuestion";
import UserPrize from "./userPrize";

interface Props {}


const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Khóa học của bạn',
    children: <UserCourse/>
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


const User: React.FC<Props> = () => {
  let localAccount = localStorage.getItem("account") as any;
  let account = JSON.parse(localAccount);
  return (
    <div className="user-wrapper">
      <div className="user-title">
        <span>Thông tin tài khoản</span>
      </div>
      <UserOveral account ={account}></UserOveral>
      <Divider
        style={{ margin: "20px 0", borderColor: "rgba(0, 0, 0, 0.1)" }}
      />
    
      <UserTabs />
    </div>
  );
};
export default User;
