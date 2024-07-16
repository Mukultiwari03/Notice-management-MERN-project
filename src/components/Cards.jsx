import React from 'react'
// import Card from './Card'
import academics from '../assests/academic.jpg'
import uniques from '../assests/uniques.jpg'
import { Link } from 'react-router-dom'; 
import UniquesTemp from '../components/notices/UniquesTemp';
import cover1 from '../assests/cover1.jpg';
const Cards = () => {
  const data =[
    {
      id:"1",
      title:"Academics",
      img:academics,
      desc:"This is the description of the academics",
      // edit:<Academic/>
      edit:'/admin/academic'
    },
    {
      id:"2",
      title:"The Uniques ",
      img:uniques,
      desc:"This is the description of the academics",
      edit:'/admin/uniques'
      
    },
    {
      id:"3",
      title:"The Uniques",
      img:uniques,
      desc:"This is the description of the Uniques",
      edit:'/admin/uniques'
    },
   
  ]
  return (
<section className="text-gray-900 bg-[#f1f1f194] body-font">
  <div 
  className='h-[24.325rem] bg-[#f1f1f194] w-[95%] mt-[2rem] rounded-lg shadow-lg mx-auto'
  style={{
                    background: `url(${cover1}) no-repeat center center/cover`,
                     // Reduce brightness for dull effect
                }}>
                  <div className='h-[70%] ml-4 sm:ml-8 flex flex-col justify-center'>
                  <h2 className='text-white font-bold text-4xl font-sans '>Welcome back, Admin! </h2>
                  <p className='text-white font-sans text-wrap w-full sm:w-[60%] mt-5'> Streamline your notice management effortlessly with our intuitive platform. Draft, publish, and manage notices seamlessly to keep your organization informed and engaged.</p>
                  </div>
                </div>
  <div className="container py-24 w-[95%] bg-[#f1f1f194] mx-auto">
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
            <Link to={item.edit} className="text-indigo-400 inline-flex items-center mt-3 hover:cursor-pointer hover:text-indigo-600">
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