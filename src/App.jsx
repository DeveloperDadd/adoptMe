import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
 <div>
  <h1>Adopt Me!</h1>
  <Pet name="Luna" animal="dog" breed="Havanese" />
  <Pet name="Kova" animal="dog" breed="Foxhound" />
  <Pet name="Butters" animal="dog" breed="Golden Retriever" />
 </div>
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
