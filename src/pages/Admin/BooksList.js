import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { deleteBook, getAllBooks } from "../../services/api";

function BooksList() {
  const [books, setBooks] = useState([]);

  const renderBookRows = books.map((book) => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td width={"10%"}>
        <Image src={book.cover_image} thumbnail alt="" />
      </td>

      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.pages}</td>
      <td>{book.releaseDate}</td>
      <td>
        <Button variant="danger" onClick={() => deleteSelectedBook(book.id)}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  const deleteSelectedBook = (id) => {
    console.log(`Deleting ${id}`);
    deleteBook(id).then((res) => {
      if (res.status == 200 || res.status == 201) {
        getAllBooks().then((res) => {
          setBooks(res.data);
        });
      }
    });
  };

  useEffect(() => {
    getAllBooks().then((res) => {
      setBooks(res.data);
    });
  }, []);
  return (
    <>
      <Button as={Link} to={"add-book"} className="my-3" variant="primary">
        Add New Book
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>

            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Release Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderBookRows}</tbody>
      </Table>
    </>
  );
}

export default BooksList;
