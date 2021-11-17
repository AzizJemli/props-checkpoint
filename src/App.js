
import './App.css';
import Component from './Profile/Component.js';

function App() {
 
  const cardContainer = {
    backgroundColor: "#753188",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.75)",
    color: "#b3b8cd",
    paddingTop: "30px",
    position: "relative",
    width: "350px",
    maxWidth: "100%",
    textAlign: "center",
  };

  const circle = {
    border: "2px solid #fff",
    borderRadius: "50%",
    padding: "7px",
    height:"120px",
    width:"120px"
  };

  const App = {
    backgroundColor: "#B983FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "100vh",
    margin: "0",
  };



  
     let handleName=()=>{
       alert('Aziz Jemli');
     };
 
  return (
    <div style={App}>
      <div style={cardContainer}>
        <Component name="Aziz Jemli" data={handleName} pro="Fullstack Developer"  bio="I'm a freelancer,gamer and i love football" >
          <img
            src="./profilepic.jpg"
            alt="profile pic"
            style={circle}
          /></Component>
      </div>
    </div>
  );
}

export default App;
