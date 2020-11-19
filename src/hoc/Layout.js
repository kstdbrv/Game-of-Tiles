import React from 'react'
import Counter from '../components/counter/Counter'
import Header from '../components/header/Header'


const Layout = props => {
  return (
  <>  
     <Header />
     <Counter />
     <main className="wrapper">
      { props.children }
     </main>
  </>
 )
}

export default Layout