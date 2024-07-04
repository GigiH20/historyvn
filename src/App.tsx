import React from "react";
import "./App.css";
import Layout from "./layout";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomePage from "./page/home";
import CoursePage from "./page/course";
import LessonCourse from "./page/lessonCourse";
import Test from "./page/test";
import SharePage from "./page/share";
import Article from "./page/arrticle";
import Chart from "./page/chart";
import User from "./page/user";
import ConnectPage from "./page/connectMetaMask";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import Blog from "./page/blog";
import DetailPost from "./page/detailPost";
import LessContent from "./page/lessonContent";
import history from "./history";
import CustomerRouter from "./router";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#FFFCFC",
          },
          components: {
            Layout: {
              headerBg: "#F1F1F3",
              bodyBg: "#F1F1F3",
            },
            Menu: {
              itemBg: "#F1F1F3",
              // colorSubMenuTitleBg: '#F1F1F3',
            },
            Card: {
              actionsBg: "#ffffff",
            },
            Button: {
              // defaultGhostColor: "#262626",
              defaultHoverBorderColor: '#FFBF66',
              defaultHoverColor	: '#FFBF66'
            },
          },
        }}
      >
        <CustomerRouter history={history}>
          <Routes>
            <Route path="/" element={<ConnectPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/course" element={<CoursePage />} />
              <Route path="/course/:id" element={<LessonCourse />} />
              <Route path="/course/:id/lesson:lid" element={<LessContent/>}/>
              <Route path="/course/:id/test" element={<Test />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/share" element={<SharePage />}></Route>
              <Route path="/share/article" element={<Article />}></Route>
              <Route path="/chart" element={<Chart />} />
              <Route path="/user" element={<User />} />
              <Route path="/blog/detail" element={<DetailPost />} />
            </Route>
          </Routes>
        </CustomerRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
