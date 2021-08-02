// Context hook
import { useAuth } from "./context/auth";

// React
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes";

function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}

export default App;
