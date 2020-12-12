import * as React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { ICurrent } from "../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CssPropRules} from "../constants";
import {StyleSheet, Text, View} from "react-native";

interface IProps {
  isAuthenticated: boolean | null;
  uuid: string | null;
}

const Nav = ({ isAuthenticated, uuid }: IProps) => {
  const logInOut = isAuthenticated ? (
    <li>
      <NavLink to="/log-out">
        Log out
      </NavLink>
    </li>
  ) : (
    <li>
      <NavLink to="/log-in">
        Log in
      </NavLink>
    </li>
  );

  const mainLinks = isAuthenticated ? (
    <li>
      <NavLink to="/home">
        Home
      </NavLink>
    </li>
  ) : (
    <>
      <li>
        <NavLink to="/">
          Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About
        </NavLink>
      </li>
    </>
  );

  const styles = StyleSheet.create({
      dropdown: {
          paddingLeft: "16px",
          color: 'auto',
          'backgroundColor': '#333',
          top: '40px',
          position: 'absolute',
          right: '0',
      },
      icon: {
          position: 'absolute',
          top: '0px',
          right: '0px',
          padding: '5px',
          // pointer: 'select',
          color: 'auto',
          // float: 'right',
          fontSize: 22, //'2rem',
          backgroundColor: '#333',
          height: '40px',
          zIndex: 2,
      },
      iconred2: {
          position: 'absolute',
          top: '0px',
          right: '0px',
          padding: '5px',
          // pointer: 'select',
          color: 'auto',
          // float: 'right',
          // fontSize: '2rem',
          backgroundColor: '#333',
          height: '40px',
          zIndex: 1,
      },
      iconred: {
          position: 'absolute',
          top: '-40px',
          right: '0px',
          padding: '5px',
          // pointer: 'select',
          color: 'auto',
          // float: 'right',
          fontSize: 22, //'2rem',
          backgroundColor: '#333',
      },
      iconroot: {
          // float: 'right',
          color: 'green',
      },
      mobilecontainer: {
        width: '100vw',
        margin: 'auto',
        backgroundColor: '#555',
        // 'color': 'white',
        borderRadius: 10, // '10px',
      },
      topnav: {
          backgroundColor: '#333',
          position: 'relative',
          height: '40px',
          overflow: 'visible',
      },
      links: {
        // float: 'left',
        color: 'white',
        padding: '14px 16px',
        textDecorationLine: 'none', // 'text-decoration': 'none',
        fontSize: 17, // '17px',
        },
      active: {
        backgroundColor: '#4CAF50',
        color: 'white',
    }
  };

  if (isAuthenticated) {
      return <>
          <div id="topbar" style={styles.mobilecontainer}>
              <div className="verticalContainer" style={styles.topnav}>
                  <NavLink to="/home" className="ml-2">Logo</NavLink>
                  <Text className="w-100 horizontalContainerLine">
                    <View />
                    <NavLink to="/terreni">Terreni</NavLink>
                    <NavLink to="/coltivazioni">Coltivazioni</NavLink>
                    <view />
                </Text>
                  <i className="far fa-times-circle text-danger" style={styles.iconred2} tabIndex={-1}/>
                  <div className="iconroot" style={styles.iconroot} tabIndex={-1}>
                      <i className="fa fa-bars" style={styles.icon} />
                      <div className="showBlockOnlyIf onfocuswithin pr-3 text-danger" style={styles.dropdown}>
                          <p className="mb-2">Utente: {uuid}</p>
                          <NavLink className="mt-2 d-block text-right" to="/Home">Home</NavLink>
                          <NavLink className="mt-2 d-block text-right" to="/terreni">Terreni</NavLink>
                          <NavLink className="mt-2 d-block text-right" to="/coltivazioni">Coltivazioni</NavLink>
                          <NavLink className="mt-2 mb-2 d-block text-right" to="/log-out">Log out</NavLink>
                      </div>
                  </div>
              </div>
          </div>
      </>;
  }
  return <>
            <div id="topbar" style={styles.mobilecontainer}>
                <div className="verticalContainer" style={styles.topnav}>
                    <a href="#" className="active">Logo</a>
                    <span id="myLinks" className="w-100 horizontalContainerLine">
                        <a href="#"></a>
                        <a href="#">Log in</a>
                        <a href="#"></a>
                    </span>
                </div>
            </div>
        </>;
  return (
    <>
      <p>Auth state: {isAuthenticated ? `Logged in user: ${uuid}` : "Logged out"}</p>
      <ul>
        {mainLinks}
        <li>
          <NavLink to="/terms">
            Terms
          </NavLink>
        </li>
        <li>
          <NavLink to="/broken-link">
            Broken link
          </NavLink>
        </li>
        {logInOut}
      </ul>
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  uuid: state.uuid,
  isAuthenticated: state.isAuthenticated,
});

export default connect(
  mapStateToProps,
)(Nav);
