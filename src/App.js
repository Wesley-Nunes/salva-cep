import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes";

import { useAuth } from "./context/auth";

import Result from "./pages/Result";

function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}

export default App;
