import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let customziseObjectForNavBar = {
  title: "TextUitls",
  about: "About-Me",
  home: "My-Home",
  site: "https://www.google.com/",
};
function App() {
  return (
    <div>
      <Navbar
        title={customziseObjectForNavBar.title}
        about={customziseObjectForNavBar.about}
        home={customziseObjectForNavBar.home}
        site={customziseObjectForNavBar.site}
      />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </div>
  );
}

export default App;
