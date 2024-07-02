const prefixApi = process.env.REACT_APP_BASE_URL; 
let token = localStorage.getItem('cjwt') || ''

export const createPost = async (info:any): Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/posts`,{ 
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let {code ,status, data} = responseData;
        if (code !== 200) { 
            return status;
        } else { 
            return responseData
        }
    })
    .catch(error => { 
        throw (error)
    })
}

export const getAllPostByUser = async():Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/courses`, { 
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bear ${token}`,
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let {code ,status, data} = responseData;
        if(code!==200) { 
            return status
        } else { 
            return responseData
        }
    })
}

export const getPostById = async (info: any):Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/posts/postdetail/${info}`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, status, data} = responseData;
        if(code!==200) { 
            return status
        } else { 
            return responseData
        }
    })
}
export const getAllPostByTopic = async (info: any):Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/posts/topics/${info}`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, data, status} = responseData;
        if (code !== 200) { 
            return status 
        } else { 
            return responseData
        }
    })
}
export const getAllPostByKeyword = async (info: any):Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/posts/keywords/${info}`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, data, status} = responseData;
        if (code !== 200) { 
            return status 
        } else { 
            return responseData
        }
    })
}

export const getAllPosts = async ():Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/posts`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, data, status} = responseData;
        if (code !== 200) { 
            return status 
        } else { 
            return responseData
        }
    })
}
export const calculatePointAllPost = async(): Promise<any> => { 
    return fetch(`${prefixApi}/api/v1/posts/calculate-points`, { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code, data, status} = responseData;
        if(code!==200) {
            return status
        } else { 
            return responseData
        }
    })
}