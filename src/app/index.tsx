import { Routing } from "pages";
import './index.css';
import { withProviders } from "./providers";

function App() {
    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
  
export default withProviders(App);
