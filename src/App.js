import NavBar from 'components/NavBar';
import ItemListContainer from 'components/ItemListContainer';
import "./App.css";
import ItemDetailContainer from 'components/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from 'pages/Products';


function App() {

  return (
    <div>
    <Router>
      <NavBar/>
    <div className="App">
    <Switch>   
      <div>
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
      </div>
      </Switch>
    </div>
    </Router>
    </div>
  )
}

export default App;

