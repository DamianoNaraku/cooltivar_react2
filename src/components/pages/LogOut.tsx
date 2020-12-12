import * as React from "react";
import { connect } from "react-redux";

import { logOut } from "../../actions/current";
import {ICurrent} from "../../types";

interface IProps {
  logOutConnect: () => void,
  uuid: string | null,
  isAuthenticated: boolean | null,
}

const styles = {
    root: {
        height: 'calc(100vh - 40px)'
    }
}
const LogOut =  (props: IProps) => (
  <>
      <div className="verticalContainer flow-column" style={styles.root}>
          <div />
          <div />
          <div className="horizontalContainer">
              <p>Hai effettuato l'accesso come</p>
              <b className="mb-3">{props.uuid}</b>
              <p>sei sicuro di volerti disconnettere?</p>
              <button className="btn btn-outline-danger mt-3" onClick={props.logOutConnect}>Log out</button>
          </div>
          <div className="verticalContainer horizontalContainer d-none">
              <button className="btn btn-outline-danger" onClick={props.logOutConnect}>Log out</button>
          </div>
          <div />
          <div />
          <div />
      </div>
  </>
);

// vengono eseguite dopo l'esecuzione del dispatch chiamato sulle static props che ritorna uno stato?
const mapDispatchToProps: (state: ICurrent) => IProps = (state: ICurrent) => ({
    uuid: state.uuid,
    isAuthenticated: state.isAuthenticated,
    logOutConnect: logOut, // () => { console.log('logout clicked'); logOut(); }
});

const staticProps = {
    logOutConnect: logOut, // () => { console.log('logout clicked'); logOut(); }
}
export default connect(
  mapDispatchToProps,
  staticProps
)(LogOut);
