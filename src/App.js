import Store from "./component/Store/Store";
import Title from "./component/Title/Title";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Store></Store>
      <div>
      question:How react work?
        <p>Ans : React is a javascript library .It has a structural patterns that separates the apps into three main components.
        In short it is known as MVC -which stand for Model-View-Controller.As it is fast react follow a particular way to rander something.
        Every time for a single simple change ,the react app create a virtual dom.Then the app compare newly created virtual dom with browser
        dom and show the changes</p>

      question:How useState works ?
        <p>Ans : useState is a react hook which help use hook into react feature.This hook can trace state and can also update it.
        This function returns two things,one is current value and the other is a function for this we need to pass initial state 
        to the function.
        </p>
      </div>
    </div>
  );
}

export default App;
