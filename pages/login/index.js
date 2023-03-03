import { useRouter } from "next/router";
import styled from "styled-components";
import jwt from "jsonwebtoken";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Cookies } from "react-cookie";

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const cookies = new Cookies();

  const postData = async (ob) => {
    console.log(ob);
    try {
      await axios({
        method: "POST",
        url: `/member/v1.0/login`,
        headers: { "Content-Type": "application/json" },
        data: ob,
      }).then((response) => {
        const accessToken = response.data.token;
        cookies.set("LoginToken", accessToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        router.push("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    let ob = JSON.stringify({
      email: email,
      password: password,
    });
    postData(ob);
  };

  const handleClick = (href) => {
    router.push(href);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Container>
        <Text>로그인</Text>
        <Form>
          <Input
            type="email"
            placeholder="ex)user@google.com"
            onChange={emailHandler}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={passwordHandler}
          />
          <Button onClick={loginHandler}>로그인</Button>
        </Form>
        <SocialContainer>
          <SocialItem>Git</SocialItem>
          <SocialItem>Google</SocialItem>
          <SocialItem>Instagram</SocialItem>
        </SocialContainer>
        <UtillContainer>
          <UtillItem onClick={() => handleClick("./join")}>신규가입</UtillItem>
          <UtillItem>회원찾기</UtillItem>
        </UtillContainer>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: NotoSansKR-Regular;
  font-size: 1rem;
`;

const Text = styled.p`
  font-family: NotoSansKR-Bold;
  font-size: 3rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 19rem;
  outline: none;
  border: 0;
  border-radius: 100px;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  font-family: NotoSansKR-Regular;
  font-size: 0.8rem;
  ::place-holder {
    color: light-gray;
  }
`;

const Button = styled.button`
  border: 0;
  border-radius: 100px;
  width: 19rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #ec6090;
  font-family: NotoSansKR-Bold;
  color: white;
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 210px;
`;

const SocialItem = styled.div`
  font-size: 0.3rem;
  margin-top: 1rem;
`;

const UtillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 0.5rem;
`;

const UtillItem = styled.div`
  color: #808080;
`;
