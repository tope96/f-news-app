import styled from 'styled-components';
import { COLORS } from '../../colors';

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  gap: 2rem;
  background: ${COLORS.main};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  top: 0;
  z-index: 14;
  -webkit-box-shadow: 0 10px 21px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0 10px 21px -16px rgba(66, 68, 90, 1);
  box-shadow: 0 10px 21px -16px rgba(66, 68, 90, 1);
`;
