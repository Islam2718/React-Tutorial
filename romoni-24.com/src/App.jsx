import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/global/Header'
import Menu from './components/global/Menu';
import Footer from './components/global/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/blog.style.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header/>
      <Menu/>
      <div className='container'>
        <div className='row font-bold underline' style={{ height: '70vh' }}>
          <div className='col-9'>
            //slider...<br/>
            //সাম্প্রতিক পোস্ট...<br/>
            //ক্যাটাগরীসমূহ...<br/>
          </div>
          <div className='col-3 rm24-header my-4 radius'>
            //sidebar..
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default App
