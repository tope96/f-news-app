import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NewsItem from '../news-item/NewsItem';
import { List, NewsWrapper } from './style';
import Info from '../info/Info';
import { env } from '../../env';

export const trimContent = (content) => {
  let splitted = content.split('').splice(0, 61);

  if (splitted[splitted.length] !== '') {
    splitted = splitted.splice(0, splitted.lastIndexOf(' '));
  }
  return `${splitted.join('')}...`;
};

function NewsList() {
  const { API_KEY } = env;
  const pageSize = useSelector((state) => state.pageSize);
  const country = useSelector((state) => state.country);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country.value}&pageSize=${pageSize}&apiKey=${API_KEY}`)
      .then((res) => {
        if (res.status === 200) {
          setNews(res.data.articles);
          setIsLoading(false);
        }
      });
  }, [pageSize, country]);

  const textToShow = `Wyświetlono ${pageSize} najnowszych wiadomości dla kraju: ${country.name}`;
  return (
    <div data-testid="newsList-component">
      <Info>
        {textToShow}
      </Info>
      <NewsWrapper>
        <List>
          {isLoading && <div>Trwa ładowanie danych...</div>}
          {(news.length !== 0 && !isLoading) && news.map((newsItem) => {
            if (newsItem.content !== undefined) {
              return (
                <NewsItem
                  title={newsItem.title}
                  publishDate={newsItem.publishedAt}
                  content={newsItem.content || ''}
                  key={newsItem.title}
                  onClick={() => window.open(newsItem.url)}
                  imageUrl={newsItem.urlToImage}
                />
              );
            }
            return false;
          })}
        </List>
      </NewsWrapper>
    </div>
  );
}

export default NewsList;
