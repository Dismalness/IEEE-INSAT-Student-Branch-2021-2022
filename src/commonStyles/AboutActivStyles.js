import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 700px;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  
  grid-area: col1;
`;
export const Column2 = styled.div`
  
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #0f90db;
  font-size: 45px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media screen and (max-width: 1000px) {
    font-size: 45px;
  }
  @media screen and (max-width: 480px) {
    font-size: 39px;
    margin-bottom: 33px;
    letter-spacing: 1.2px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? "#0f90db" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin: 25px 20px;
  font-size: 22px;
  line-height: 32px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 29px;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  img {
    width: 550px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (max-width: 480px) {
    img {
      width: 300px;
      height: 330px;
    }
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
