import React, { useState, useEffect } from "react";
import "./index.css";
import { Input, List, Avatar } from "antd";
import { rankUsers } from "../../service/exam";
import { IUserRanking } from "../../type/IUser";
import {
  ClockCircleTwoTone,
  ContainerTwoTone,
  UserOutlined,
  DollarTwoTone,
} from "@ant-design/icons";
interface Props {}

const { Search } = Input;

const ListRank: React.FC<{ data: IUserRanking[] }> = ({ data }) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<h3 >Hạng {item.rank}</h3>}
          description={
            <>
                <h3> Sĩ tử {item.first_name} {item.last_name}</h3>
                <h3> Địa chỉ ví {item.address}</h3>
            </>
          }
            />
      </List.Item>
    )}
  />
  );
};

const Rank: React.FC<{ data: IUserRanking[] }> = ({ data }) => {
  return (
    <div className="rank-wrapper">
      <div className="title">
        <h1>Bảng vàng vinh danh</h1>
      </div>
      <div className="rank-element">
        <ListRank data={data} />
      </div>
    </div>
  );
};

const Chart: React.FC<Props> = () => {
  const [rank, setRanking] = useState<IUserRanking[]>([]);

  useEffect(() => {
    getRanking();
  }, []);

  const getRanking = async () => {
    try {
      const fetchRank = await rankUsers();
      const rank = fetchRank.data;
      setRanking(rank);
    } catch (error) {
      console.error("Error ranking", error);
    }
  };

  return (
    <div className="chart-wrapper">
      <Rank data={rank} />
    </div>
  );
};

export default Chart;
