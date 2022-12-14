import { Route, Switch } from "react-router-dom";
import CreateServerForm from "./components/createServerForm";
import LeftSidebar from "./components/leftSideBar";
import LoginFormPage from "./components/LoginFormPage";
import Navbar from "./components/Navbar";
import RegisterFormPage from "./components/RegisterForm";
import ServerIndex from "./components/ServerIndex";
import ServerShow from "./components/ServerShow";
import Home from './components/Home'
import ServerFull from "./components/ServerFull";
import EditServerForm from "./components/EditServerForm";
import CreateChannelForm from "./components/CreateChannelForm";
import DirectMessagesFull from "./components/DirectMessagesFull";

function App({cable}) {
  return (
    <>
    <Switch>
      <Route exact path="/login">
        <LoginFormPage />
      </Route>
      <Route exact path="/register">
        <RegisterFormPage />
      </Route>  
      <Route exact path="/channels/new/:channelId">
        <CreateChannelForm />
      </Route>
      <Route path="/servers/new">
        <CreateServerForm />
      </Route>
      <Route path='/channels/@me/:chatId?'>
        <DirectMessagesFull cable={cable}/>
      </Route>
      <Route path='/channels/:id'>
        <ServerFull />
      </Route>
      <Route path='/servers/:id/'>
        <ServerFull />
      </Route>

  
      <Route path='/'>
        <Home />
      </Route>
       


    </Switch>
    </>

  );
}

export default App;
