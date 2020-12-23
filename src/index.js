import React from 'react';
import ReactDOM from 'react-dom';
import Header from'./components/header';
import './style/style.css'

const App = () => {
  return(
   <>
   <Header></Header>
   </>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'))