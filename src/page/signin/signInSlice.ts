import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {signinRequest} from "../../service/auth"
import { RootState } from '../../redux/store';

export interface AuthState {
  isLoggedIn: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  account?: any;
  profile?: any; 
  captchaId: string;
  captchaData: any;
  error?: string;
  isLoading: boolean
}

const initialState: AuthState = {
  captchaId: "",
  captchaData: "",
  isLoggedIn: false,
  status: 'idle',
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // SignIn: (state, action: PayloadAction<IAuth>) => {
    //   state.isLoggedIn = true
    //   state.status = 'succeeded'
    //   state.auth = action.payload
    // },
    signOut: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = false
      state.status = 'idle'
      state.account = undefined
    },
  },
  extraReducers(builder) {
    builder
    .addCase(signIn.fulfilled,(state, action) => {
      state.status = "succeeded"
      console.log("[Log in]", action.payload)
      state.account = action.payload
    })
    //   .addCase(fetchCaptchar.pending, (state, action) => {
    //     state.isLoading = true 
    //   })
    //   .addCase(fetchCaptchar.fulfilled, (state, action) => {
    //     const { captchaId, captchaData } = action.payload
    //     state.captchaId = captchaId
    //     state.captchaData = captchaData
    //     state.isLoading = false 

    //   })
    //   .addCase(fetchCaptchar.rejected, (state, action) => {
    //     state.status = 'failed'
    //     state.isLoading = false 
    //     console.log("login rejected", action)
    //     state.error = action.error.message + " with error: " + action.payload
    //   })
    //   .addCase(signIn.pending, (state, action) => {
    //     state.status = 'loading'
    //   })
    //   .addCase(signIn.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.isLoggedIn = true
    //     console.log("login: payload: ", action.payload)
    //     state.account = action.payload
    //   })
    //   .addCase(signIn.rejected, (state, action) => {
    //     state.status = 'failed'
    //     console.log("login rejected", action)
    //     state.error = action.error.message + " with error: " + action.payload
    //   })
    //   .addCase(refreshAccount.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.isLoggedIn = true
    //     console.log("login: payload: ", action.payload)
    //     state.account = action.payload
    //   })
  }
})

export const signIn = createAsyncThunk('auth/signIn', async(info:any, {rejectWithValue}) => { 
  try { 
    const response = await signinRequest(info)
    return response
  } catch (ex) { 
    return rejectWithValue(ex)
  }
})
// export const fetchCaptchar = createAsyncThunk('auth/captcha', async (id: number, { rejectWithValue }) => {
//   try {
//     const response = await captchaRequest()
//     return response
//   } catch (ex) {
//      return rejectWithValue(ex)
//   }
// })
// export const signIn = createAsyncThunk('auth/signIn', async (info: ISignIn, { rejectWithValue }) => {
//   try {
//     const response = await signinRequest(info)
//     return response
//   } catch (ex) {
//     return rejectWithValue(ex)
//   }
// })

// export const refreshAccount= createAsyncThunk('auth/refresh', async (args: any ,{ rejectWithValue }) => {
//   console.log("refreshAccount: call service refreshRequest")

//   try {
//     console.log("refreshAccount: call service refreshRequest")
//     const response = await refreshRequest()
//     return response
//   } catch (ex) {
//     console.log("refreshAccount: error: ", ex )
//     return rejectWithValue(ex)
//   }
// })


export const selectAuth = (state: RootState) => state.auth

export const { signOut } = authSlice.actions

export default authSlice.reducer