import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/index";
import Headline from "./component/headline/index";

const tempArr = [{
  fname:'john',
  lname:'blogs',
  email:'jonhblogs@email.com',
  age:24,
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline tempArr = {tempArr} header="Posts" desc="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
