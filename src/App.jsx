import { AllRoutes } from "./routes/AllRoutes";

import './App.css';
import { Header, Footer, ScrollToTop } from "./componenets/index";


function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
