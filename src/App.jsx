import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return <>
    <ContactForm/>
    <SearchBox />
    <ContactsList/>
  </>;
}

export default App;
