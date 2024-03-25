import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Footer from './comp/footer.jsx'




const App = () => {
 



  useEffect(() => {
  }, [])

  return (
    <div>
      <Footer/>
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))