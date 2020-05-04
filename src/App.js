import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'; // we will keep track of current user from App component and
// trickle down that info to each and every component

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: 'null'
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){ //whenever our App component mounts on DOM, auth starts working as below
    //onAuthStateChanged returns a func, which is also saved below, which when called closes that subscription
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); // whenever App component unmounts from DOM, subscription of user ends
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/> {/*we pass currentUser to header so that it knows when to show signOut button */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
