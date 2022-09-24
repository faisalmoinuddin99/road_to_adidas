import "./App.css";
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
