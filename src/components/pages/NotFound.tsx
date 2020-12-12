import * as React from "react";

import { Link } from "react-router-dom";
const styles={
    root: {
        'minHeight': 'calc(100vh - 40px)',
        color: 'inherit'
    }
}
const NotFound = () => (
  <>
      <div className="horizontalContainer verticalContainer" style={styles.root}>
          <div className="horizontalContainer">
              <p>404: Pagina non trovata</p>
              <Link to="/Home">Torna alla home</Link>
          </div>
      </div>
  </>
);

export default NotFound;
