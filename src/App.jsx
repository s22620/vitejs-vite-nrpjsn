import './App.css';
import TextComponent from './components/TextComponent';
import ListComponent from './components/ListComponent';
import FancyTable from './components/FancyTable';
import Multiple from './components/Multiple';

function App() {
  return (
    <>
      <TextComponent color="red" text="Test text" />
      <ListComponent items={['Lukasz', 'Marek']} />
      <FancyTable n={10} />
      <Multiple name="Lukasz" number={10} />
    </>
  );
}

export default App;
