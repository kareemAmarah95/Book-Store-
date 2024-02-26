import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { createSearchParams, useParams } from "react-router-dom";
import { getBookById } from "../services/api";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const getBook = async () => {
    try {
      const res = await getBookById(id);
      console.log(res.data);
      setBook(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBook();
  }, []);
  return (
    <Container>
      <Card className="bg-dark text-white">
        <Card.Img src={book.cover_image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{book.title}</Card.Title>

          <Card.Text>Author: {book.author}</Card.Text>
          <Card.Text>Release date : {book.releaseDate}</Card.Text>
          <Card.Text>Pages: {book.pages}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default BookDetails;
