const prefixApi = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("cjwt" || "");

export const authorLogin = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/v1/authors/login`, {
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

export const authorLogout = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/authors/logout`, {
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
