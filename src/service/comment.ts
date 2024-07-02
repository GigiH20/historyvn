const prefixApi = process.env.REACT_APP_BASE_URL; 
const token = localStorage.getItem("cjwt" || '')

export const createComments = async (info:any): Promise<any> => { 
    return fetch(`${prefixApi}/comments`, { 
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

export const getCommentByPost = async(info?:any):Promise<any> => { 
    return fetch(`${prefixApi}/comments/comment-detail/${info}`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data}  = responseData;
        if (code !==200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw(error)
    })
}

export const getCommentByOwner = async(info?:any):Promise<any> => {
    return fetch(`${prefixApi}/comments/by-user`, { 
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data}  = responseData;
        if (code !==200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw(error)
    })
}


export const getCommentByFatherId = async(info?:any):Promise<any> => {
    return fetch(`${prefixApi}/comments/comment-list-detail/${info}`, { 
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bear ${token}`
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data}  = responseData;
        if (code !==200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw(error)
    })
}

export const likeComment = async (info: any ):Promise<any> =>  {
    return fetch(`${prefixApi}/likes/${info}`, { 
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data}  = responseData;
        if (code !==200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw(error)
    })
}

export const dislikeComment = async (info: any ):Promise<any> =>  {
    return fetch(`${prefixApi}/dislikes/${info}`, { 
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data}  = responseData;
        if (code !==200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw(error)
    })
}

export const processComment = async ():Promise<any> =>  {
    return fetch(`${prefixApi}/comments/calculate-points`, { 
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json",
            // "Authorization": `Bear ${token}`
        },
        // body: JSON.stringify()
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data}  = responseData;
        if (code !==200) { 
            return status
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw(error)
    })
}