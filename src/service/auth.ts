import { message } from 'antd';
import history from '../history'
import Post from '../page/home/post'
import { error } from 'console';
const token = localStorage.getItem("cjwt");

const prefixApi = process.env.REACT_APP_BASE_URL; 
export const signupRequest = async (info: any): Promise<any> => { 
    console.log('[values]', info)
    return fetch(`${prefixApi}/users`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let {code, status, data} = responseData;
        if (code === 200) { 
            history.push('/signin')
            console.log('sign up ', responseData)
        }
    }).catch(error => { 
        throw (error)
    });
}
export const signinRequest = async (info: any): Promise<any> => { 
    console.log('[values]', info)
    return fetch(`${prefixApi}/users/login`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let {code, status, data} = responseData;
        if (code === 200) { 
            let { id, first_name, last_name, email, address, avatar, token, balance, rank} = data
            let accountInfo = { 
                id: id,
                first_name: first_name,
                last_name: last_name,
                email: email,
                address: address,
                avatar:avatar,
                token: token,
                balance: balance,
                rank:rank 
            }
            let account = JSON.stringify(accountInfo)
            localStorage.setItem("account", account)
            localStorage.setItem("cjwt", data.token)
            history.push('/home')
            console.log('sign in ',data)
            return data
        }
    }).catch(error => { 
        throw (error)
    });
}
export const logoutRequest = async(): Promise<any> => { 
    return fetch(`${prefixApi}/users/logout`, { 
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((responseData) => { 
        let { code , status, data} = responseData;
        if(code === 200) { 
            history.push('/signin')
        }
    }).catch(error => {
        throw (error)
    });
}

export const getUserDetail = async (): Promise<any> => {
    try {
      const response = await fetch(`${prefixApi}/users`, {
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