import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import store from './store'


// componentes

import Nav from './components/Nav'
import LibrosList from './components/LibrosList'
import CreateLibro from './components/CreateLibro'
import CreateUsuario from './components/CreateUsuario'
import lobby from './components/lobby'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
        </div>
        <div className="container p-4">
          <Route path="/" exact component = {lobby}/>
          <Route path="/libros" exact component={LibrosList} />
          <Route path="/editar/:id" component={CreateLibro} />
          <Route path="/crear" component={CreateLibro} />
          <Route path="/autores" component={CreateUsuario} />
        </div>

      </Router>
    </Provider>
  );
}

export default App;

