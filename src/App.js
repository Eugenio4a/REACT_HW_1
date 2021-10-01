// import logo from './logo.svg';
import "./App.css";

function FirstComponent() {
  return <div>First</div>;
}

const book = {
  name: "name book",
  pages: 150,
  author: "author name",
  about: "lorem impsum",
};
const musicBand = {
  name: "Band name",
  poster: "Poster",
  about: "about",
};
function books(book) {
  return book.name + "," + book.author + "," + book.pages;
}
function myBand(musicBand) {
  return musicBand.name + "-->" + musicBand.poster + "-->" + musicBand.about;
}

function App() {
  return (
    <>
      <div>Info book: {books(book)}</div>;<p>Bands: {myBand(musicBand)} </p>
      <FirstComponent />
    </>
  );
}

export default App;
