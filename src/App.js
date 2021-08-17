import NavBar from 'components/NavBar/NavBar';
import ItemListContainer from 'components/ItemList/ItemListContainer';
import "./App.css";
import ItemDetailContainer from 'components/ItemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from 'pages/Products';
import { ItemCartProvider } from 'context/CartContext';
import CartItemsContainer from 'components/Cart/CartItemsContainer';
import CartForm from 'components/Cart/CartForm';
import Footer from 'components/Footer/Footer';
import ContactForm from 'components/Contact/ContactForm';

function App() {
 
  return (
    <ItemCartProvider>
    <div>
    <Router>
    <div>
    <NavBar/>
    <Switch>   
      <>
    <main>
    <Route exact path="/">
<ItemListContainer greeting={[
  {id:1, name:"Productos para veganos"},
{id:2, name:"Productos para celiacos"}, 
{id:3, name:"Legumbres"},
{id:4, name:"Frutos Secos"},
{id:5, name:"Condimentos"}]}/>
   </Route>
   </main>
  <div>
  <Route exact path="/product-detail/:id">
    <ItemDetailContainer/>
  </Route>
  <Route exact path="/category/:categoryID" component={Products}/>
  </div>
  <Route exact path="/Cart" component={CartItemsContainer}/>
  <Route exact path="/CartForm" component={CartForm} />
  <Route exact path="/Contact" component={ContactForm} />
      </>
      </Switch>
    </div>
    </Router>
    <Footer/>
    </div>
    </ItemCartProvider>
  )
}

export default App;

