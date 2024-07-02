const prefixApi = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("cjwt" || "");

export const createQuestion = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/authors/courses/${info}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bear ${token}`,
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

export const createOption = async (info: any): Promise<any> => {
  let { courseId, questionId } = info;
  return fetch(
    `${prefixApi}/authors/courses/${courseId}/question/${questionId}/option`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bear ${token}`,
      },
      body: JSON.stringify(info),
    }
  )
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
  return fetch(`${prefixApi}/courses/enrolled/${info}/questions`, {
    method: "GET",
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
