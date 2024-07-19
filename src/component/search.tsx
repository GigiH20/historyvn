import React from "react";
import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

interface SearchCompProps {
  onSearch: (term: string) => void;
}

const SearchComp: React.FC<SearchCompProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Input 
      size="large" 
      placeholder="Nhập từ khóa tìm kiếm..." 
      status="warning" 
      prefix={<SearchOutlined />} 
      onChange={handleInputChange}
    />
  );
};

export default SearchComp;
