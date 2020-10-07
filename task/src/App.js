import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.scss';

const App = () =>{
  return(
    <>
    <div className='app'></div>
    <h1>test</h1>
    </>
  );
};

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>,document.getElementById('app'))
})
export default App;