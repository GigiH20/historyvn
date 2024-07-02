import React from "react";

interface Props {}

const UserAvatar = ({ src }: { src: string }) => {
  return (
    <div className="avatar-user">
      <img src={src} />
    </div>
  );
};

const UserInfo = ({account}:any) => {
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
        <li>Hạng 1/1 người học</li>
      </ul>
    </div>
  );
};

const UserOveral = ({account}:any) => {
  return (
    <>
      <div className="user-info-wrapper">
        <UserAvatar src={account.avatar} />
        <UserInfo account = {account}></UserInfo>
      </div>
    </>
  );
};

export default UserOveral;
