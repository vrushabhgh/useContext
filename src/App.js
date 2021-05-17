
import Sid from './sidebar';
import Topbar from './topbar'
import Dash from './dash'
import Userlist from './userlist';
import Useredit from './useredit';
import Usercreate from './usercreate';
import Product from './product';
import Proedit from './productedit';
import Productcard from './productcard';
import {UserProvider} from './usercontext';

import {
  BrowserRouter as Router,
  Switch,Route
  
} from "react-router-dom";



function App() {

  return (<>
  <Router>
   <div id="wrapper">
    <Sid></Sid>
    <UserProvider>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
        
          <Switch>
            <Route path="/dashboard" component={Dash} exact={true}/>
            <Route path="/userlist" component={Userlist} exact={true}/>
            <Route path="/useredit/:id" component={Useredit} exact={true}/>
            <Route path="/usercreate" component={Usercreate} exact={true}/>
            <Route path="/product" component={Product} exact={true}/>
            <Route path="/productedit" component={Proedit} exact={true}/>
            <Route path="/productcard/:id" component={Productcard} exact={true}/>
          
            
   

            
          </Switch>
        
        

      </div>
    </div>
    </div>
    </UserProvider>
    </div>
    </Router>
    </>
  );
}

export default App;
