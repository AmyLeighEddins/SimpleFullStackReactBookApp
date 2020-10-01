import React from "react";
import "./App.css";
function App() {
  const [books, setBooks] = React.useState([]);
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
    </div>
  );
}
export default App;