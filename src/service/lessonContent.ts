import { error } from "console";

const prefixApi = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("cjwt" || "");

export const createLessonContent = async(info:any): Promise<any> => { 
    let { body, infoRoute} = info
    let {courseId, ltId} = infoRoute
    return fetch(`${prefixApi}/courses/${courseId}/lesson-titles/${ltId}/lesson-contents`, 
    {
        method: "POST",
        headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bear ${token}`,
     },
     body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((responseData) =>  { 
        let { code, status, data} = responseData;
        if (code !== 200) { 
            return status;
        } else { 
            return responseData;
        }
    })
    .catch(error => { 
        throw (error)
    })
}

export const getLessonContentByLessonId = async(info:any):Promise<any> => {
    let { courseId, lId} = info;
    try {
        const response = await fetch(`${prefixApi}/course/${courseId}/lesson/${lId}/lesson-contents`, {
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
}

export const lessonComplete = async(info:any):Promise<any> => {
    try {
        const response = await fetch(`${prefixApi}/lesson-complete/lesson-titles/${info}`, {
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
}


