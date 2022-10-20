import { FirebaseProvider } from "./contexts/FirebaseContext";
import { RoutesList } from "./routes";

function App() {
  return (
    <FirebaseProvider>
      <RoutesList />
    </FirebaseProvider>
  );
}

export default App;
