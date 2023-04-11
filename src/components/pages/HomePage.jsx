import React from 'react';
import AuthContext from '../context/AuthContext';

function HomePage() {
  const context = React.useContext(AuthContext);
    return(
      <div>
        <h1>Вы на главной</h1>
        <div>Привет {context.username}</div>
      </div>
    );
}

export default HomePage;