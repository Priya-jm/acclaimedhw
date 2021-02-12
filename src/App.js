
import './App.css';
import './assets/css/header.css';
import { Route, Switch } from "react-router-dom";
import  Home  from "./Home";
import  Contact  from "./Contact";
import  Error  from "./Error";
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div className="App">
      <header>
      <div className="container">
      <Menu />
      </div>
      </header>
      <div className="pagecontent">
      <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </main>
      </div>
      </div>
    </>

  );
}

export default App;
