import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(to bottom, #5f8db8, #99a1cb);
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Form = styled.div`
  background-color: white;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  color: white;
  font-size: 2rem;
  align-self: baseline;
  letter-spacing: 0.09rem;
  position: absolute;
  top: 20%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

function Intro() {
  return (
    <Container>
      <Title>Smarthings</Title>
      <Form>
        <p>삼성 계정으로 로그인</p>
        <input type="text" />
        <input type="password" />
        <button>로그인</button>
        <p>ID 찾기 또는 비밀번호 재설정</p>
        <p>계정 생성</p>
      </Form>
    </Container>
  );
}

export default Intro;

// const ExampleWrap = styled.div`
//   background: ${({ active }) => {
//     if (active) {
//       return "white";
//     }
//     return "#eee";
//   }};
//   color: black;
// `;
