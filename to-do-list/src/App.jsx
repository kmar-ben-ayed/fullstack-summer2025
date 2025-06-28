import Header from './fragments/header';
import Footer from './fragments/footer';
import ToDoList from './fragments/body';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App
