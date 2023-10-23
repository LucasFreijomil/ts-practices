import './App.css';
import Dashboard from './components/DashboardHeader/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Dashboard />
      </header>

      <body>
        <p>Este es el contenido del medio.</p>
      </body>

      <Footer />

    </div>
  );
}

export default App;
