import { Card } from 'react-bootstrap';

const Article = ({ article }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {article.publishedAt} by {article.author}
        </Card.Subtitle>
        <Card.Text>{article.content}</Card.Text>
        <Card.Link href={article.url}>Read Full Article</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Article;