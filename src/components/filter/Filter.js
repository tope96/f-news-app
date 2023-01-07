import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import {
  Arrow, Dropdown, DropdownItem, FilterContainer,
} from './style';

function Filter(props) {
  const {
    optionsArray, defaultOptionIndex, label, setSelectedValue,
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOptionIndex);
  const toggleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const ref = useDetectClickOutside({ onTriggered: () => setIsDropdownOpen(false) });

  return (
    <div ref={ref}>
      <FilterContainer onClick={toggleOpen}>
        {label}
        {optionsArray[selectedOption].name}
        <Arrow open={isDropdownOpen} />
      </FilterContainer>
      {isDropdownOpen
        && (
        <Dropdown tabIndex={-1}>
          {optionsArray.map((option, index) => (
            <DropdownItem
              tabIndex={0}
              key={option.value}
              onClick={() => {
                setSelectedOption(index);
                setSelectedValue(index);
                setIsDropdownOpen(false);
              }}
              isSelected={Number(selectedOption) === index}
            >
              {option.name}
            </DropdownItem>
          ))}
        </Dropdown>
        )}
    </div>
  );
}

Filter.propTypes = {
  optionsArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  defaultOptionIndex: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default Filter;
