import { useRouter } from "next/router";
import styled from "styled-components";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };
  return (
    <Container>
      <Text>로그인</Text>
      <Form>
        <Input type="email" placeholder="ex)user@google.com" />
        <Input type="password" placeholder="password" />
        <Button>로그인</Button>
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
  );
};

export default login;

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