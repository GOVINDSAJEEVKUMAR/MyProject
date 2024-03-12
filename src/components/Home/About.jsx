import React from 'react'
import { Link } from 'react-router-dom'



export default function About() {
  return (
    <section className="container text-center ">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white !leading-tight">
            Hello, Im <span className="text-primary">GOVIND</span> <br /> MernStack Developer
         </h2>
         <p className="text-white max-w-lg mx-auto text-lg mt-8">FrontEnd Developer</p>

         <div className="flex gap-8 items-center justify-center mt-10">
               <Link to="/project">
            <button className="btn-primary" >
               Recent Works
            </button></Link>
            <Link to="https://drive.google.com/file/d/1HuDcQcWsQONYcJCYHUckG9u9fKA5k8qC/view?usp=drive_link">
            <button className="btn-secondary">
               Get My CV
            </button> </Link>     
         </div>
      </section>
  )
}
