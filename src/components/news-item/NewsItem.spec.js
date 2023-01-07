import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsItem from './NewsItem';

const mockedOnClick = jest.fn();

const testData = {
  title: 'testTitle',
  publishDate: '2022-01-06T10:09:03Z',
  content: 'testContent',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png',
  onClick: mockedOnClick,
};

describe('NewsItem Component', () => {
  const TestComponent = (
    <NewsItem
      title={testData.title}
      publishDate={testData.publishDate}
      content={testData.content}
      imageUrl={testData.imageUrl}
      onClick={testData.onClick}
    />
  );

  it('should render NewsItem', () => {
    render(
      TestComponent,
    );

    expect(screen.getByText(testData.title)).toBeInTheDocument();
    expect(screen.getByText(`${testData.content}...`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should handle click on item', () => {
    render(
      TestComponent,
    );

    const item = screen.getByText(testData.title);
    fireEvent.click(item);
    expect(mockedOnClick).toBeCalledTimes(1);
  });
});
