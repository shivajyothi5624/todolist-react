import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import Showlist from './components/Showlist';

function App() {
  return (
    <>
      <Navbar Title="TODO LIST"></Navbar>
      <AddItem></AddItem>
      <Showlist></Showlist>
    </>
  );
}

export default App;
