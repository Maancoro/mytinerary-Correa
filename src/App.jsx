import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
     <header>
      <nav class="navbar navbar-expand-lg bg-dark ">
        <h1>My Tinerary</h1>
         <div class="container-fluid">
            <ul class="list-group list-group-horizontal">
             <li class="list-group-item">Home</li>
              <li class="list-group-item">Cities</li>
              <li class="list-group-item">
                <i class="fa-solid fa-user-lock fa-xl" type="button"data-bs-toggle="modal"data-bs-target="#exampleModal" ></i>
               </li>
            </ul>
         </div>
       </nav>
      </header>
      <main>
      <section  id="acerca-de-mi" class="acerca-de-mi">
         <div class="section"  id="acerca-de-mi">
            <div class="container">
               <div class="card" data-aos="fade-up" data-aos-offset="10">
                  <div class="row">
                     <div class="col-lg-6 col-md-12">
                        <div class="card-body">
                           <div class="h4 mt-0 title">Find the perfect destination</div>
                          
                           <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                        </div>
                     </div>
                     <div class="col-lg-6 col-md-12">
                        <div class="card-body">
                           <div class="h4 mt-0 title">Imagen</div>
                         </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
                                 <button type="button" class="btn btn-dark" >View More</button>    

      </main>
        <footer>
         <div class="autor">
            <p id="footer">©2023 Creado - Angélica Correa</p>
         </div>
      </footer>
    </>
  )
}

export default App
