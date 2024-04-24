import React from 'react'
// import Card from './Card'
import academics from '../assests/academic.jpg'
import uniques from '../assests/uniques.jpg'
import { Link } from 'react-router-dom'; 
const Cards = () => {
  const data =[
    {
      id:"1",
      title:"Academics",
      img:academics,
      desc:"This is the description of the academics",
    },
    {
      id:"2",
      title:"The Uniques ",
      img:uniques,
      desc:"This is the description of the academics",
    },
    {
      id:"3",
      title:"Academics",
      img:academics,
      desc:"This is the description of the academics",
    },
    {
      id:"4",
      title:"Academics",
      img:academics,
      desc:"This is the description of the academics",
    },
  ]
  return (
<section className="text-gray-900 bg-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Choose Your Template</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Hello, here you can edit your template as per your requirements. Feel free to see the guidlines.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
   
      {
        data.map((item)=>{
          return(
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-lg" key={item.id}>
            <div className="rounded-lg h-64 overflow-hidden"> 
              <img alt="content" className="object-cover object-center" src={item.img}/>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.title}</h2>
            <p className="text-base leading-relaxed mt-2">{item.desc}</p>
            <Link to="/admin/edit" className="text-indigo-400 inline-flex items-center mt-3 hover:cursor-pointer hover:text-indigo-600">
              Edit Template
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          
          </div>
          )
        })
      }
    </div>
  </div>
</section>

  
  )
}

export default Cards