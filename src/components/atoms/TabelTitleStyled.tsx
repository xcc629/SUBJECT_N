import styled from '@emotion/styled';

const ImgWrapper = styled.img`
  width: 100px;
  height: 90px;
  margin-right: 10px;
  object-fit: cover;
`;

const FakeCoverWrapper = styled.div`
  width: 100px;
  height: 90px;
  margin-right: 10px;
  background-color: silver;
`;

const InfoWrapper = styled.div`
  width: 300px;
  height: 100%;
  p {
    margin: 0;
  }
`;
export { ImgWrapper, FakeCoverWrapper, InfoWrapper };
