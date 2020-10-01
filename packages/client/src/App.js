import React from "react";
import "./App.css";
function App() {
  const [books, setBooks] = React.useState([]);
  const [value, setValue] = React.useState("");
  const handleSubmit = event => {
    event.preventDefault();
  if (value && value !== "") {
      const data = {
        title: value
      };
      fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(result => {
          setBooks(books.concat([result]));
          setValue("");
        });
    }
  };
React.useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(res => res.json())
      .then(result => {
        setBooks(result);
      });
  }, []);
return (
    <div className="App">
      <h1>Favorite Books</h1>
      <p>Keep track of your favorites!</p>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="new-form">
      <input
        className="new-input"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="eg. The Great Gatsby"
      />
      <button className="button primary-button" type="submit">
        Submit
      </button>
</form>
    </div>
  );
}
export default App;