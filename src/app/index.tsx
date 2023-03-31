import './index.css';
import { Routing } from "pages";
import Header from "widgets/header";
import { withProviders } from "./providers";

function App() {
    return (
      <div className="App">
        <Header/>
        <Routing />
      </div>
    );
  }
  
export default withProviders(App);
