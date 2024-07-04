const prefixApi = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("cjwt" || "");

export const createQuestion = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/authors/courses/${info}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((responseData) => {
      let { code, status, data } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const getQuestionByQuestionId = async (info: any): Promise<any> => {
  let { courseId, questionId } = info;
  return fetch(
    `${prefixApi}/courses/enrolled/${courseId}/question/${questionId}/option`,
    { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((responseData) => {
      let { code, status, data } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    })
    .catch((error) => {
      throw error;
    });
};
export const getQuestionByCourseId = async (info: any): Promise<any> => {
  try {
    const response = await fetch(`${prefixApi}/courses/enrolled/${info}/questions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ` ${token}`,

      },
    });
    const responseData = await response.json();
    let { code, data, status } = responseData;
    if (code !== 200) {
      return Promise.reject(data.errors);
    } else {
      return responseData;
    }
  } catch (error) {
    throw error;
  }
};

export const getExamResult = async (info: any): Promise<any> => {
  let {courseId, body} = info
  console.log('[body exam]', JSON.stringify(body))
  try {
    const response = await fetch(`${prefixApi}/courses/${courseId}/exam-score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ` ${token}`,
      },
      body: JSON.stringify(body)
    });
    const responseData = await response.json();
    let { code, data, status } = responseData;
    if (code !== 200) {
      return Promise.reject(data.errors);
    } else {
      return responseData;
    }
  } catch (error){
    throw error;
  }
};

export const rankUsers = async (): Promise<any> => {
  try {
    const response = await fetch(`${prefixApi}/ranking/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ` ${token}`,
      },
    });
    const responseData = await response.json();
    let { code, data, status } = responseData;
    if (code !== 200) {
      return Promise.reject(data.errors);
    } else {
      return responseData;
    }
  } catch (error){
    throw error;
  }
};
