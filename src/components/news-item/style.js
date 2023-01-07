import styled from 'styled-components';
import { COLORS } from '../../colors';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  background: ${COLORS.main};
  height: fit-content;
  min-height: 7rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  gap: 1rem;
  -webkit-box-shadow: 8px 8px 24px -21px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -21px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -21px rgba(66, 68, 90, 1);
  :hover {
    transform: scale(1.025);
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const DateWrapper = styled.p`
  font-weight: lighter;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
`;

export const Content = styled.p`
  font-weight: normal;
  font-size: 1rem;
  hyphens: auto;
  word-break: break-word;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
`;

export const ImageWrapper = styled.img`
  height: auto;
  width: 9rem;
  @media (max-width: 768px) {
    width: 4rem;
  }
`;

export const InfoPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
`;

export const ImagePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
`;
