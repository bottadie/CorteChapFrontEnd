import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemList'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CustomersHome from './components/Customers/Customer'
import Form from './components/Form/Form'

function App() {
  return (
    <BrowserRouter>
  <NavBar />
<Routes>
<Route path="/" element={<h1 style={{textAlign: 'center',  margin: 50}}>Gestión de clientes</h1>} />

   
    <Route path='/invoices' element={<CustomersHome/>}/>
    <Route path='/formulario' element={<Form/>}/>

      
      
</Routes>





    </BrowserRouter>
  );
}

export default App;
