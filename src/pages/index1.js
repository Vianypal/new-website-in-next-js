import { useState, useEffect } from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import NewsAPI from './components/NewsAPI';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await NewsAPI.getTopHeadlines();
      setArticles(response.data.articles);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Top Headlines</h1>
      <Row>
        {articles.map((article) => (
          
          <Col lg={4} md={6} key={article.title}>
            <Card className='mb-3'>
              <Card.Img variant='top' src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={`/article/${article.title}`}>Read 1More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
         

        ))}
      </Row>
    </div>
  );
}