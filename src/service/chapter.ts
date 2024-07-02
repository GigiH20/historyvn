const prefixApi = process.env.REACT_APP_BASE_URL; 
const token = localStorage.getItem("cjwt" || '')

export const creatChapter = async(info:any):Promise<any> => { 
    return fetch(`${prefixApi}/authors/courses/${info}/chapter-titles`,{ 
        method: "POST",
        headers: { 
               "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
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

export const getChapterByCourseID = async(info:any):Promise<any> => { 
    return fetch(`${prefixApi}/courses/enrolled/${info}/chapter-titles`,{ 
        method: "GET",
        headers: { 
               "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((responseData) => { 
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


