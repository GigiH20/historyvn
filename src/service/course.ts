import { error } from 'console';
import history from '../history'

const prefixApi = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("cjwt");


export const createCourse = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/courses`, {
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

export const getAllCourse = async (): Promise<any> => {
  return fetch(`${prefixApi}/courses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `${token}`,
    },
  })
    .then((response) => response.json()
    .then((responseData) => {
      let { code, status, data } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    }))
    .catch(error => {
        history.push('/signin')
        throw error
    }
    );
};

export const getAllCourseBySlug = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/courses/${info}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()
    .then((responseData) => {
      let { code, status, data } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    }))
    .catch(error => {throw error});
};

export const getAllCourseByCategory = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/courses/categories/${info}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      let { code, status, data } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    });
};

export const getImgByCourseId = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/courses/img/${info}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      let { code, status, data } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    });
};

export const getCourseById = async (info: any): Promise<any> => {
  return fetch(`${prefixApi}/overview/courses/${info}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      let { code, data, status } = responseData;
      if (code !== 200) {
        return status;
      } else {
        return responseData;
      }
    });
};

export const userEnrolledCourse = async (info: any): Promise<any> => {
  try {
    const response = await fetch(`${prefixApi}/courses/${info}/enrollCourse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
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

export const getCourseByUserId = async (): Promise<any> => {
  try {
    const response = await fetch(`${prefixApi}/courses/enrolled`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
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