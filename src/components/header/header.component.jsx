import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
// A HOC that lets us modify our component for access to redux
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

// State being passed in below is root reducer state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// We're passing in a function that connects this component to state.
// This is used anywhere a component needs to know/interact with state.
// Now, Header receives the initial null value of current user in user-reducer
export default connect(mapStateToProps)(Header);
