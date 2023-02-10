import styled from "styled-components";
import Interrogation from "./components/assets/interrogation.svg";
import Shop from "./components/assets/shop.svg";
import MenuSvg from "./components/assets/menu.svg";
import Add from "./components/assets/add.svg";
export default function Home() {
  return (
    <Container>
      <MenuContainer>
        <MenuItem>
          <Add />
          업체 신규 등록
        </MenuItem>
        <MenuItem>
          <Shop />
          나의 업체 보기
        </MenuItem>
        <MenuItem>
          <MenuSvg />
          주문관리하기
        </MenuItem>
        <MenuItem>
          <Interrogation />
          문의하기
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 0px;
  margin-top: 0px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;
