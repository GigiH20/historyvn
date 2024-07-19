import React, { useState, useEffect } from "react";
import "./index.css";
import { Input, List, Avatar } from "antd";
import { rewardUsers } from "../../service/exam";
import { IUserReward } from "../../type/IUser";
import { LikeTwoTone, DislikeTwoTone, CommentOutlined, DeleteFilled } from "@ant-design/icons";
import { Space } from "antd";
interface Props {}

const { Search } = Input;

const ListRank: React.FC<{ data: IUserReward[] }> = ({ data }) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={<span className="span-prizes">Phần thưởng cho: {item.reward_type === 1 ? "Bài đăng nổi bật" :  `Hoàn thành khóa học`}</span>}
          description={
            <>
                <span className="span-address">Địa chỉ giao dịch: {item.reward_address}</span>
                <br></br>
                <span className="span-time-transaction">Thời gian: {item.reward_at}</span>
                <br></br>
                <span className="span-address">Số token nhận được:  <span className="span-prizes">{item.count_reward}</span>
                </span>
            </>
          }
            />
      </List.Item>
    )}
  />
  );
};


const UserPrize: React.FC<Props> = () => {
  const [rank, setReward] = useState<IUserReward[]>([]);

  useEffect(() => {
    getReward();
  }, []);

  const getReward = async () => {
    try {
      const fetchRank = await rewardUsers();
      const rank = fetchRank.data;
      setReward(rank);
    } catch (error) {
      console.error("Error ranking", error);
    }
  };

  return (
    <div className="chart-wrapper">
      <ListRank data={rank} />
    </div>
  );
};

export default UserPrize;

