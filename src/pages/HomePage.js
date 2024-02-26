import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BookItem from "../components/BookItem";
import { getAllBooks } from "../services/api";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const bookList = books.map((book) => (
    <Col key={book.id} onClick={() => navigate(`/book/${book.id}`)}>
      <BookItem book={book} />
    </Col>
  ));

  const getAll = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Container>
        <Row>{bookList}</Row>
      </Container>
    </>
  );
}
