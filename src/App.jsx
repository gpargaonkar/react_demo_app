import Header from "./components/Header/Header";
import Examples from "./components/Examples/Examples";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";

function App() {

  

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
