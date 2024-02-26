import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { addBook } from "../../services/api";

function AddBook() {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(1);
  const [releaseDate, setReleaseDate] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(title, coverImage, author, pages, releaseDate);
    addBook({
      title,
      cover_image: coverImage,
      author,
      pages,
      releaseDate,
    }).then((res) => {
      console.log(res);
      if (res.status == 200 || res.status == 201) {
        navigate("/admin");
      }
    });
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cover_image">
        <Form.Label>Cover Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Image Url"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pages">
        <Form.Label>pages</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Pages Count"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="releaseDate">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddBook;
