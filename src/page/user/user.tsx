import React from "react";
import { IUser } from "../../type/IUser";
import "./index.css";

interface Props {
  account: IUser | null;
}

const UserAvatar: React.FC = () => {
  return (
    <div className="avatar-user">
      <img src="../../user_avatar.png" />
    </div>
  );
};

const UserInfo: React.FC<{ account: IUser | null }> = ({ account }) => {
  if (!account) {
    return <div>Loading...</div>;
  }
  return (
    <div className="user-info">
      <ul className="info">
        <li>
          <span>{account.first_name}</span>
          <span>{account.last_name}</span>
        </li>
        <li>Địa chỉ ví: {account.address}</li>
        <li>Phần thưởng đã nhận: {account.balance} LH</li>
        <li>Danh hiệu: Thám Hoa</li>
        <li>Hạng {account.rank} người học</li>
      </ul>
    </div>
  );
};

const UserOveral: React.FC<Props> = ({ account }) => {
  return (
    <div className="user-info-wrapper">
      <UserAvatar />
      <UserInfo account={account} />
    </div>
  );
};

export default UserOveral;
