import React from 'react';
import './App.css';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SwaggerUI  url="https://raw.githubusercontent.com/YaroslavlProhodimec/swagger-one/main/todolist.yaml" />
      </header>
    </div>
  );
}

export default App;
