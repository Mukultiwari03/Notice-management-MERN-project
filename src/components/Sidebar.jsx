import React from 'react'
import { Link } from 'react-router-dom';
import { BsGraphUpArrow } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { LiaFolderOpenSolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { PiWrenchLight } from "react-icons/pi";
import { MdPieChartOutlined } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { MdDisplaySettings } from "react-icons/md";

const Sidebar = () => {
    const side = [
        // {
        //     id:"1",
        //     icon:<BsGraphUpArrow size={20}/>,
        //     title:<Link to="/Admin/Dashboard">Dashboard</Link>
        // },
        // {
        //     id:"2",
        //     icon:<CgNotes size={20}/>,
        //     title:"Sales"
        // },
        // {
        //     id:"3",
        //     icon:<LiaFolderOpenSolid size={20}/>,
        //     title:"Catalog"
        // },
        {
            id:"10",
            icon:<CgNotes size={20}/>,
            title:<Link to="/admin/draft">Draft a Notice</Link>
        },
        {
            id:"4",
            icon:<HiOutlineUser size={20}/>,
            title:<Link to="/admin/privacy">Privacy & Policy</Link>
        },
        // {
        //     id:"5",
        //     icon:<MdDisplaySettings size={20}/>,
        //     title:"CMS"
        // },
        // {
        //     id:"6",
        //     icon:<TbSpeakerphone size={20}/>,
        //     title:"Marketing"
        // },
        // {
        //     id:"7",
        //     icon:<MdPieChartOutlined size={20}/>,
        //     title: "Reporting"
        // },
        {
            id:"8",
            icon:<FiSettings size={20}/>,
            title:"Settings"
        },
        {
            id:"9",
            icon:<PiWrenchLight size={20}/>,
            title:"Configuration"
        }
    ]
  return (
    <div className='h-screen shadow-md p-3 '>
        <div className=''>
            {
                side.map((item)=>{
                    return(
                        <div key={item.id} className='p-2 rounded-md text-black/65 font-medium my-2 flex gap-3 hover:bg-black/5'>
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Sidebar