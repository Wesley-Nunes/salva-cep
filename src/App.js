import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

import "./App.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a>Favoritos</a>
      </li>
      <li>
        <a>Pesquisar</a>
      </li>
      <li>
        <h3>Jack</h3>
      </li>
      <li>
        <a>Sair</a>
      </li>
    </ul>
  );
};

function App() {
  // const {user} = useAuth(); Implementar hook aqui!
  // const isLogged = user.isAuthenticated;
  const isLogged = true;

  return (
    <>
      {isLogged ? (
        <>
          <nav className="navWrapper">
            <NavBar />
          </nav>
          <Home />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

export default App;
