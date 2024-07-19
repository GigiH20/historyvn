import React from "react";
import HistorySection from "./comp/historySection";
import { useNavigate } from "react-router-dom";
import { ICourse } from "../../type/ICourse";

interface HistoryProps {
  data: ICourse[];
}

const HistoryContent: React.FC<HistoryProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="hs-section">
      <div className="lesson-card" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((lesson, index) => (
          <div key={index} style={{ marginBottom: "40px", width: "100%" }}>
            <HistorySection data={lesson} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryContent;
