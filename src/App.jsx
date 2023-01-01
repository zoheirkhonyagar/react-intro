import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

// in App.js, replace all the Pets
<SearchParams />;
const App = () => {
  // const pets = [
  //   {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   },
  //   { name: "Pepper", animal: "Bird", breed: "Cockatiel" },
  //   { name: "Doink", animal: "Cat", breed: "Mix" },
  // ];

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
  //  /   {pets.map((pet) => (
  //       <Pet animal={pet.animal} name={pet.name} breed={pet.breed} />
  //     ))}
  //     )
  /// </div>
  // );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
