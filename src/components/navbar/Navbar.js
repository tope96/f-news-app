import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Nav } from './style';
import Filter from '../filter/Filter';
import { countriesDictionary, pageSizeDictionary } from '../../dictionaries';

function Navbar() {
  const defaultCountryIndex = localStorage.getItem('country') || 0;
  const defaultPageSizeIndex = localStorage.getItem('pageSize') || 0;
  const dispatch = useDispatch();
  const [selectedValueCountryIndex, setSelectedValueCountryIndex] = useState(defaultCountryIndex);
  const [selectedValuePageSize, setSelectedValuePageSize] = useState(defaultPageSizeIndex);
  useEffect(() => {
    const pageSize = pageSizeDictionary[selectedValuePageSize].value;
    localStorage.setItem('pageSize', selectedValuePageSize);
    dispatch({
      type: 'SET_SIZE',
      payload: pageSize,
    });
  }, [selectedValuePageSize]);

  useEffect(() => {
    const country = countriesDictionary[selectedValueCountryIndex];
    localStorage.setItem('country', selectedValueCountryIndex);
    dispatch({
      type: 'SET_COUNTRY',
      payload: country,
    });
  }, [selectedValueCountryIndex]);

  return (
    <Nav>
      <Filter optionsArray={countriesDictionary} defaultOptionIndex={Number(defaultCountryIndex)} label="Kraj: " setSelectedValue={setSelectedValueCountryIndex} />
      <Filter optionsArray={pageSizeDictionary} defaultOptionIndex={Number(defaultPageSizeIndex)} label="Ilość wyników: " setSelectedValue={setSelectedValuePageSize} />
    </Nav>
  );
}

export default Navbar;
