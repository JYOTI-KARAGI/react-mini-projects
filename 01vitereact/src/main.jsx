import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit Google'
// }

 // to run it expect it be in certain syntax

 const anotheruser="Jyoti Prabhunath Karagi"


 const reactElement=React.createElement(
  'a',
  { href:'https://google.com', target:'_blank'},
  'Visit Google',
  anotheruser
  // anotheruser is just variable that inject a tag just to show
  // how js varible injected at the last

)


ReactDOM.createRoot(document.getElementById('root')).render(
  // we volunterily craeted object that react creates 
  // after calling render

   // to run it expect it be in certain syntax
  reactElement
  // <App/>
);
