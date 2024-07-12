import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d47b41e0291f4fa1a197a9d2e47c0be4&page=${page}&pageSize=${props.pageSize}`;
    console.log(`Fetching data from: ${url}`);
    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setArticles([]);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    updateNews();
  }, [page, props.category]);

  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  const handleNextClick = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="background"></div>
      <div className="container my-3 mx-3">
        <h2 className="text-center" style={{ margin: '10px 0px', marginTop: '80px', color: '#87CEEB' }}>
          DailyNews-Top Headlines on {capitalizeFirstLetter(props.category)} category
        </h2>
        {loading && <Spinner />}
        <div className="row" style={{ marginLeft: '70px' }}>
          {!loading && articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="beautiful-button" onClick={handlePrevClick}>
          &larr; Previous
        </button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="beautiful-button" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
