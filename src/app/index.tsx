import './index.css';
import { Routing } from "pages";
import { withProviders } from "./providers";
import HeaderFooter from 'widgets/header_footer';

function App() {
  return (
    <div className="App">
      <HeaderFooter type='header'/>
      <Routing />
      <HeaderFooter type='footer'/>
    </div>
  );
}

export default withProviders(App);
