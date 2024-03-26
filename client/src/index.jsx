import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Footer from './comp/footer.jsx'
import style from "./css/homePage.css"
import Header from './comp/Header.jsx'
import MainPage from './comp/MainPage.jsx'




const App = () => {
 



  useEffect(() => {
  }, [])

  return<>
  <header>
      Join Trimpa today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      <MainPage/>
</>
      {/* <Footer/> */}
}

ReactDOM.render(<App />, document.getElementById('app'))