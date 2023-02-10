import Header from "./Header";
import styled from "styled-components";
const AppLayout = (props) => {
  return (
    <>
      <Centering>
        <FixedWidth>
          <Header />
          {props.children}
        </FixedWidth>
      </Centering>
    </>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
`;

const FixedWidth = styled.div`
  width: 500px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default AppLayout;