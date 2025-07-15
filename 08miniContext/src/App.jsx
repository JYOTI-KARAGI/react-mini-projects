import './App.css'
import UserContextProvider from './context/UserContextProvider'
import ThemeContextProvider from  './context/ThemeContextProvider'

import Profile from './components/Profile'
import Login from './components/Login'
import ThemeToggle from './components/ThemeToggle'

// step3
// access of the storage in the app.jsx->main.jsx
// here the UsercontextProvider is a wrapper the components inside has access to global variable 

function App() {


  return (
    // this wrapsthe the app in the context 
    // Login and profile can access the user and setUser from the context 
    <UserContextProvider >
       <ThemeContextProvider>
      
          <h1>context api | React</h1>
          <Login/>
          <Profile/>
          <ThemeToggle/>
          
       </ThemeContextProvider>
    </UserContextProvider>
  )
}

export default App
