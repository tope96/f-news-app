import styled from 'styled-components';
import { COLORS } from '../../colors';

export const FilterContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.main};
  height: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;

  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${COLORS.accent};
    border-radius: 3px;
  }

  &:hover:after {
    height: 5px;
  }
`;

export const Arrow = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
  border: solid black;
  border-width: 0 1px 1px 0;
  padding: 0.2rem;
  transform: ${(props) => (props.open ? 'rotate(-135deg);' : 'rotate(45deg);')};
`;

export const Dropdown = styled.ul`
  background: ${COLORS.main};
  position: absolute;
  flex-direction: column;
  border-radius: 5px;
  width: 8rem;
  padding: 0;
  z-index: 10;
  -webkit-box-shadow: 8px 4px 24px -14px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 4px 24px -14px rgba(66, 68, 90, 1);
  box-shadow: 8px 4px 24px -14px rgba(66, 68, 90, 1);
`;

export const DropdownItem = styled.li`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: ${(props) => (props.isSelected ? 'bold;' : 'normal;')}
  :hover {
    font-weight: bold;
  }
`;
