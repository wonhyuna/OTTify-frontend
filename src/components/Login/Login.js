import React from "react";
import naverButtonImage from "../Login/btnG_완성형.png";
import googleButtonImage from "../Login/google.png";
import "./Login.css";
import GoogleButton from "./GoogleButton";
import axios from "axios";

const Login = () => {
  const titleStyle = {
    color: "var(--primary, #FD7E14)",
    fontFamily: "Pretendard",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "44px",
  };

  const subTitleStyle = {
    color: "var(--Gray-800, #343A40)",
    fontFamily: "Pretendard",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "44px",
  };

  const handleNaverLogin = () => {
    window.location.href =
      "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&state=YOUR_STATE_PARAM";
  };

  const handleGoogleLogin = (response) => {
    // Handle Google login response
    console.log(response);
  };

  const loginWithGoogle = async () => {
    try {
      const response = await axios.get("/oauth2/authorization/google");
      // 이후에 서버에서 받은 응답을 처리
      console.log(response.data);
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const API_BASE_URL = "http://ottify.kro.kr:8080";

  const OAUTH2_GOOGLE_REDIRECT_URI =
    "http://ottify.kro.kr:8080/login/oauth2/code/google";
  const OAUTH2_NAVER_REDIRECT_URI =
    "http://52.79.200.90:8080/login/oauth2/code/naver";

  const GOOGLE_AUTH_URL =
    API_BASE_URL +
    "/oauth2/authorization/google?redirect_uri=" +
    OAUTH2_GOOGLE_REDIRECT_URI;

  const NAVER_AUTH_URL =
    API_BASE_URL +
    "/oauth2/authorization/naver?redirect_uri=" +
    OAUTH2_NAVER_REDIRECT_URI;

  const loginGoogle = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  const loginNaver = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <div className="login-box">
      <h2 style={titleStyle}>OTTify</h2>
      <h2 style={subTitleStyle}>와 함께하는 영화 라이프 같이 즐겨볼까요?</h2>
      <div className="social-buttons">
        <button className="google-button" onClick={loginGoogle}>
          <img src={googleButtonImage} alt="Google Button" />
        </button>
        <button className="naver-button" onClick={loginNaver}>
          <img src={naverButtonImage} alt="Naver Button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
