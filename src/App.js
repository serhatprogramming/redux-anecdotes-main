import AnectodeForm from "./components/AnectodeForm";
import AnectodeList from "./components/AnectodeList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnectodeList />
      <AnectodeForm />
    </div>
  );
};

export default App;
