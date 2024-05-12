import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
// import Header from './components/Header'

function App() {

  return (
    <>
      <div className='p-10 mx-auto sm:p-20'>
        {/* HEADER */}
        {/* <Header/> */}

        {/* CONTENT */}
        <Form/>

        {/* FOOTER */}
        <Footer/>
      </div>
    </>
  )
}

export default App
