import React from "react";
import CharaterCard from "./comp/characterCard";
import { IChapter } from "../../type/IChapter";
interface Props { 
  data: IChapter
}
const ItemCard: React.FC<Props> = (props) => {
  let {data} = props;
  let {lessons} = data
  return (
    <div className="item-card-wrapper">
    <div className="item-card-content">
      <div className="ordinal-number">
        <span>{data.in_order}</span>
      </div>
      <div className="item-card-title">
        <span>{data.title}</span>
      </div>
      {lessons && lessons.map((item, index) => ( 
      <CharaterCard key={index} data={item}/>
      ))}
    </div>
    </div>
  );
};

export default ItemCard;
