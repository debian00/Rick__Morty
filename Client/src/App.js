import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Navbar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Error404 from "./components/404/404"

const email = "debianstark@gmail.com";
const password = "rosebud77";
function App() {
  const location = useLocation(); //retorna un objeto con la prop pathname
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, SetAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      SetAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
     !access && navigate('/');
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data) //concatena el id de la url pasada por el user en input
      .then((data) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
        }
      })
      .catch((err) => window.alert("¡No hay personajes con este ID!"));
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      

      <Routes>      
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path ="/Favorites" element={<Favorites/>}/>
        <Route path="/404" element={<Error404/>}/>

      </Routes>
    </div>
  );
}

export default App;
