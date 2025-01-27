/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/global/Header'
import Menu from './components/global/Menu';
import Footer from './components/global/Footer'
import Slider from './components/regular/Slider';
import Sidebar from './components/regular/Sidebar'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/blog.style.css';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header/>
      <Menu/>
      <div className='container'>
        <div className='row font-bold underline'>
          <div className='row py-2 mx-auto'>
            <Slider/>
          </div>
          <div className='col-9'>
            <div className="row p-3 h3 rm24-bg rounded my-3">সাম্প্রতিক পোস্ট</div>
            <div className="row">
              {/* //card  */}
              
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
              <div className='col-4 my-3'><a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                  </div>
                </div>
                </a>
              </div>
            </div>
            <div className="row p-3 h3 rm24-bg rounded my-3">ক্যাটাগরীসমূহ</div>
            <div className="row mb-4">
              {/* //card  */}
              
              <div className='col-3 my-2 text-center'>
                <a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">রুপচর্চা</h5>
                  </div>
                </div>
                </a>
              </div>
              <div className='col-3 my-2 text-center'>
                <a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">শিশুর যত্ন</h5>
                  </div>
                </div>
                </a>
              </div>
              <div className='col-3 my-2 text-center'>
                <a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">স্বাস্থ্য ও সুরক্ষা</h5>
                  </div>
                </div>
                </a>
              </div>
              <div className='col-3 my-2 text-center'>
                <a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">ঘরের যত্ন</h5>
                  </div>
                </div>
                </a>
              </div>
              <div className='col-3 my-2 text-center'>
                <a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">উদ্যোক্তা কর্নার</h5>
                  </div>
                </div>
                </a>
              </div>
              <div className='col-3 my-2 text-center'>
                <a href="">
                <div className="card">
                  <img src="https://romoni-24.com/uploads/cat_1691611240_health.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">রান্না ও রান্নাঘর</h5>
                  </div>
                </div>
                </a>
              </div>
            </div>            
          </div>
          <div className='col-3 rm24-header1 radius'>
            <Sidebar/>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default App
