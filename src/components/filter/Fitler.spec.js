import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';

const mockedSetSelectedValue = jest.fn();

const testData = {
  optionsArray: [{ name: 'test', value: 'testValue' }, { name: 'test2', value: 'testValue2' }],
  defaultOptionIndex: 0,
  label: 'Label ',
  setSelectedValue: mockedSetSelectedValue,
};

describe('Filter Component', () => {
  const TestComponent = (
    <Filter
      optionsArray={testData.optionsArray}
      defaultOptionIndex={testData.defaultOptionIndex}
      label={testData.label}
      setSelectedValue={testData.setSelectedValue}
    />
  );
  it('should render Filter', () => {
    render(
      TestComponent,
    );

    expect(screen.getByText(testData.label, { exact: false })).toBeInTheDocument();
  });

  it('should set default value', () => {
    render(
      TestComponent,
    );

    const defaultValueName = testData.optionsArray[testData.defaultOptionIndex].name;
    expect(screen.getByText(defaultValueName, { exact: false })).toBeInTheDocument();
  });

  it('should open dropdown', () => {
    render(
      TestComponent,
    );
    const component = screen.getByRole('button');
    fireEvent.click(component);
    const dropdownList = screen.getAllByRole('listitem');
    expect(dropdownList.length).toBe(testData.optionsArray.length);
  });

  it('should handle click on dropdown item', () => {
    render(
      TestComponent,
    );
    const component = screen.getByRole('button');
    fireEvent.click(component);
    const dropdownList = screen.getAllByRole('listitem');
    fireEvent.click(dropdownList[0]);
    const choosenItem = testData.optionsArray[0].name;
    expect(screen.getByText(choosenItem, { exact: false })).toBeInTheDocument();
    expect(mockedSetSelectedValue).toBeCalledTimes(1);
  });
});
