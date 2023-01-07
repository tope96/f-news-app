import styled from 'styled-components';

export const List = styled.div`
  columns: 2 auto;
  width: 60rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;
