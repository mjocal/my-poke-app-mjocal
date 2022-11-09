import { FirebaseProvider } from "./contexts/FirebaseContext";
import { PokemonProvider } from "./contexts/PokemonContext";
import { RoutesList } from "./routes";

function App() {
  return (
    <FirebaseProvider>
      <PokemonProvider>
        <RoutesList />
      </PokemonProvider>
    </FirebaseProvider>
  );
}

export default App;
