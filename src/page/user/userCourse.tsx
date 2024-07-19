import React, { useState, useEffect } from "react";
import { Button, Card, Space } from "antd";
import { getCourseByUserId, getImgByCourseId } from "../../../src/service/course";
import { getResultByUserId, getCertById } from "../../../src/service/exam";
import { ICourse } from "../../type/ICourse";
import { IUserScore } from "../../type/IUser";

interface CertificateProps {
  score: number | undefined;
  id: number | undefined;
}

const Certificate: React.FC<CertificateProps> = ({ score, id }) => {
  const [certUrl, setCertUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchCertById = async (id: number) => {
      try {
        const fetchCert = await getCertById(id);
        if (fetchCert.data) {
          const certUrl = `https://drive.google.com/thumbnail?id=${fetchCert.data.cert_uri}`;
          setCertUrl(certUrl);
        }
      } catch (error) {
        console.error("Error fetching certificate:", error);
      }
    };

    if (id) {
      fetchCertById(id);
    }
  }, [id]);

  return (
    <div className="certificate-wrapper" style={{ marginBottom: "10px" }}>
      <div className="certificate">
        <div className="certificate-title">
          <span className="certificate-label">Chứng chỉ khóa học của bạn</span>
          <Button>Tải xuống</Button>
        </div>
        <div className="certificate-img">
          {certUrl ? (
            <img src={certUrl} alt="Certificate" style={{ maxWidth: "100%" }} />
          ) : (
            <span>Đang tải chứng chỉ...</span>
          )}
        </div>
        <h4>Địa chỉ chứng chỉ: <a href="{certUrl}">{certUrl}</a></h4>
      </div>
      <Card title="Số điểm đạt được" type="inner" className="inner-cert-card">
        <span>{score !== undefined ? score : "N/A"}</span>
      </Card>
    </div>
  );
};

const Course: React.FC<{ course: ICourse }> = ({ course }) => {
  const {
    id,
    title,
    description,
    duration_quiz,
    type,
    price,
  } = course;

  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const [results, setResults] = useState<IUserScore | undefined>();

  useEffect(() => {
    const fetchImgsByCourseId = async (id: number) => {
      try {
        const fetchImg = await getImgByCourseId(id);
        const imgs = fetchImg.data.slice(0, 3).map((img: any) => {
          const idPart = img.image_alt.split('id=')[1];
          return `https://drive.google.com/thumbnail?id=${idPart}`;
        });
        setImgUrls(imgs);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    const fetchResults = async (id: number) => {
      try {
        const fetchedResults = await getResultByUserId(id);
        setResults(fetchedResults.data);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchImgsByCourseId(id);
    fetchResults(id);
  }, [id]);

  const actualScore = results?.score;

  return (
    <Card title={title} className="course-wrapper" style={{ marginBottom: "10px" }}>
      <div className="course-text">
        <span>{description}</span>
      </div>
      <div className="course-img">
        {imgUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Course ${index + 1}`}
            className="user-course-image"
            style={{ maxWidth: "100%", marginBottom: "10px" }}
          />
        ))}
      </div>
      <div className="course-user-info">
        <Space>
          <Button>{duration_quiz} giờ học</Button>
          <Button>{type}</Button>
        </Space>
        <div className="price">{price === 0 ? "Free" : `${price} LINK Token`}</div>
      </div>
      <Certificate score={actualScore} id={results?.certificate_id} />
    </Card>
  );
};

const UserCourse: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCourseByUserId(); // Thay userId bằng userId thực tế của người dùng
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  return (
    <div className="user-course-wrapper">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default UserCourse;
