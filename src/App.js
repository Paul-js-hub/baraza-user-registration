import { Register } from "./components/Register";
import { ToastContainer } from 'react-toastify';
import { VerifyStatus } from "./components/VerifyStatus";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import 'antd/dist/antd.css';

const App =() => {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Register} exact/>
          <Route path="/verify-status" component={VerifyStatus} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
