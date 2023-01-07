import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import {
  Item, Title, DateWrapper, Content, ImageWrapper,
  InfoPart, ImagePart, Wrapper,
} from './style';

export const trimContent = (content) => {
  if (content.length <= 60) return `${content}...`;

  let splitted = content.split('').splice(0, 61);
  if (splitted[splitted.length] !== '') {
    splitted = splitted.splice(0, splitted.lastIndexOf(' '));
  }
  return `${splitted.join('')}...`;
};

function NewsItem(props) {
  const formatDate = (publishDate) => {
    const formattedDate = new Date(publishDate);
    return formattedDate.toLocaleString();
  };

  const {
    title, publishDate, content, onClick, imageUrl,
  } = props;
  const [prepContent, setPrepContent] = useState(trimContent(content));
  const [prepDate, setPrepDate] = useState(formatDate(publishDate));

  useMemo(() => {
    setPrepContent(trimContent(content));
  }, [prepContent]);

  useMemo(() => {
    setPrepDate(formatDate(publishDate));
  }, [publishDate]);

  return (
    <Wrapper>
      <Item onClick={onClick}>
        <ImagePart>
          <ImageWrapper
            src={imageUrl}
            alt="news photo"
          />
        </ImagePart>
        <InfoPart>
          <DateWrapper>{prepDate}</DateWrapper>
          <Title>{title}</Title>
          <Content>{prepContent}</Content>
        </InfoPart>
      </Item>
    </Wrapper>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NewsItem;
