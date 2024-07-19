import React, { useEffect, useState } from "react";
import { getQuestionByCourseId, getExamResult } from "../../service/exam";
import { useParams } from "react-router-dom";
import "./index.css";
import CountdownTest from "./testCountdown";
import { Button, Space } from "antd";
import { DollarTwoTone } from "@ant-design/icons";

interface Option {
  id: number;
  question_id: number;
  title: string;
  IsCorrect: boolean;
}

interface Question {
  id: number;
  course_id: number;
  content: string;
  options: Option[];
}

interface Result {
  course_id?: number,
  user_id?: number,
  score: number,
  total_questions?: number,
  attempt?: number,
  hash_answer?: number,
  submitted_at?: string,
  reward_address?: string,
  certificate_id?:number
}

const Test: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<Result>({
    score: 0,
    attempt: 0,
    reward_address:'',
    certificate_id: 0,
    submitted_at: ''
  });
  const [showResult, setShowResult] = useState<boolean>(false);

  useEffect(() => {
    fetchQuestionByCourseId();
  }, [id]);

  const courseId = Number(id);

  

  const fetchQuestionByCourseId = async () => {
    try {
      const fetchQuestions = await getQuestionByCourseId(id);
      setQuestions(fetchQuestions.data.questions);
    } catch (error) {
      console.error("[error fetching]", error);
    }
  };



  const handleExamResult = async (value: any) => {
    try { 
      const examResult = await getExamResult(value);
      setResult(examResult.data);
    } catch (error) { 
      console.error("[error get result]", error);
    }
  };

  const onClickNext = () => {
    if (selectedAnswerIndex !== null) {
      setSelectedAnswers((prev) => {
        const updatedAnswers = [...prev, questions[activeQuestion].options[selectedAnswerIndex].id];
        if (activeQuestion === questions.length - 1) {
          // Khi đến câu hỏi cuối cùng, gọi hàm handleExamResult sau khi cập nhật state
          handleExamResultWithStateUpdate(updatedAnswers);
          setShowResult(true);
        } else {
          setActiveQuestion((prev) => prev + 1);
        }
        return updatedAnswers;
      });
      setSelectedAnswerIndex(null);
    }
  };

  const handleExamResultWithStateUpdate = (updatedAnswers: number[]) => {
    const value = { 
      courseId: courseId, 
      body: { anwers: updatedAnswers }
    };
    console.log('[value exam before post]', value);
    handleExamResult(value);
  };

  const onCLickRestart = () => {
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setSelectedAnswers([]);
    setResult({
      score: 0,
    });
    setActiveQuestion(0);
  };

  const onAnswerSelected = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  const addLeadingZero = (number: number) => (number > 9 ? number : `0${number}`);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const { content: question, options: choices } = questions[activeQuestion];

  return (
    <div className="test-wrapper">
      <div className="test-container">
        {!showResult ? (
          <div>
            <div className="test-header">
              <div className="test-time">
                <CountdownTest />
              </div>
              <div className="test-title">
                <span>Phần thi trắc nghiệm</span>
              </div>
              <Space className="test-coin">
                <DollarTwoTone twoToneColor="rgb(226, 186, 6)" />
                2LH
              </Space>
            </div>
            <div className="choices-container">
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(index)}
                    key={answer.id}
                    className={
                      selectedAnswerIndex === index ? "selected-answer" : ""
                    }
                  >
                    {answer.title}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Kết quả</h3>
            <div className="result-detail">
              <p>
              Điểm số:<span> {result.score} / 10</span>
              </p>
              <p>
              Địa chỉ nhận thưởng: <span>{result?.reward_address === "" ? "_ Rất tiếc bạn đã không hoàn thành khóa học ":  result?.reward_address}</span>
              </p>                
              <p>
              Số hiệu chứng chỉ: <span>{result?.certificate_id  === 0 ? "_":  result?.certificate_id}</span>
              </p>
              <p>
              Địa chỉ hợp đồng chứng chỉ NFT: <span>{result?.certificate_id  === 0 ? "_":  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"}</span>
              </p>
            </div>
            <button style = {{display: "flex", alignItems: "center" }}onClick={onCLickRestart}>Làm lại</button>
            <p>
              Lưu ý: phần thưởng và chứng nhận khóa học chỉ được trao khi bạn hoàn thành bài thi lần đầu, bạn vẫn có thể luyện tập thêm các câu hỏi ở các lượt khác
              </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
