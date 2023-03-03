import axios from "axios";
import Head from "next/head";
import styled from "styled-components";

const StoreIndex = () => {
  const postData = async (ob) => {
    console.log(ob);
    try {
      const res = await axios({
        method: "POST",
        url: `/store/v1.0/register`,
        headers: { "Content-Type": "application/json" },
        data: ob,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const clickHandler = (e) => {
    e.preventDefault();
    let ob = JSON.stringify({
      name: "푸른목장",
      category: "한식",
      contact: "024779277",
      address: "서울특별시 강동구 성내동 446 17번지 올림픽파크힐 1층 103호",
    });

    postData(ob);
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
        <MainTitle>간단히 당신의 가게를 등록하세요 ! </MainTitle>
        <InputContainer>
          <Input placeholder="카테고리"></Input>
          <Input placeholder="가게명"></Input>
          <Input placeholder="가게번호"></Input>
          <Input placeholder="가게주소" readOnly="true"></Input>
        </InputContainer>
        <Button onClick={clickHandler}>등록하기</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: NotoSansKR-Regular;
  font-size: 1rem;
`;

const MainTitle = styled.p`
  font-family: NotoSansKR-Regular;
  font-size: 1.5rem;
`;

const InputContainer = styled.div`
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
export default StoreIndex;
