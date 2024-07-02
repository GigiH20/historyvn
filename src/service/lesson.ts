import { error } from "console";

const prefixApi = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("cjwt" || "");

export const createLesson = async (info:any): Promise<any> => { 
    let { coursesId, chapterId} = info
    return  fetch(`${prefixApi}/authors/courses/${coursesId}/chapter/${chapterId}/lesson-titles`, { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`,
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, status, data} = responseData;
        if( code !== 200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw error 
    })
}


export const getLesson = async (info:any): Promise<any> => { 
    let { coursesId, chapterId} = info
    return  fetch(`${prefixApi}/courses/enrolled/${coursesId}/chapter/${chapterId}/lesson-titles`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, status, data} = responseData;
        if( code !== 200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw error 
    })
}