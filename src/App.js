import { FirebaseProvider } from "./contexts/FirebaseContext";
import { PokemonProvider } from "./contexts/PokemonContext";
import { PokemonMovesProvider } from "./contexts/PokemonMovesContext";
import { RoutesList } from "./routes";

function App() {
  return (
    <FirebaseProvider>
      <PokemonProvider>
        <PokemonMovesProvider>
          <RoutesList />
        </PokemonMovesProvider>
      </PokemonProvider>
    </FirebaseProvider>
  );
}

export default App;
