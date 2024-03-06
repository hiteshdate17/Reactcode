import React from 'react';
import { Outlet } from 'react-router-dom';
import './PageLayout.css'
import Navbar from './Navbar/Navbar';
import { RxAvatar } from "react-icons/rx";
import { MdOutlineGridView } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";



const PageLayout = () => {

    const linksData=[
        {
            linkName:'Client Transfer Home',
            linkRef: '/transfer',
            linkImage: <MdOutlineGridView size={20}/>,
        },
        {
            linkName:'Data Transfer Details',
            linkRef: '/transfer',
            linkImage: <IoSchoolOutline size={20}/>
        },
        {
            linkName:'Transfer Variable Setup',
            linkRef: '/transfer',
            linkImage: <MdOutlineGridView size={20}/>
        },
    ]


  return (
    <>
        <div className=''>
            <Navbar />
        </div>
        <div className='body_container'>
            <div className='sidebar'>
                <div className='sidebar_top'>
                    <div className='user_profile'>
                        <div className='user_img'>
                            <RxAvatar size={40}/>
                        </div>
                        <div className='user_desc'>
                            <h3 className='text-lg'>Joe Doe</h3>
                            <p>test@gmail.com</p>
                        </div>
                    </div>
                    <div className='links_wrapper'>
                        {linksData.map((val,i)=>{
                            return (
                                <a href={val.linkRef} key={`${val.linkName}_${i}`} className='links_container opacity-[0.6] hover:opacity-[1]'>
                                    <div>{val.linkImage}</div>
                                    <p className='text-black text-xl'>{val.linkName}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className='setting_wrapper border-t-2 border-gray-300'>
                    <a href='/settings' className='settings_container'>
                    <div className='Setting_icon'>
                       <CiSettings size={30}/>
                        </div>
                    <h3 className=''>Settings</h3>
                    </a>
                </div>
            </div>
            <div className='outlet'><Outlet /></div>
        </div>
    </>
//     <div id="viewport">
  
//   <div id="sidebar">
//     <header>
//       <a href="#">My App</a>
//     </header>
//     <ul class="nav">
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-view-dashboard"></i> Dashboard
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-link"></i> Shortcuts
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-widgets"></i> Overview
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-calendar"></i> Events
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-info-outline"></i> About
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-settings"></i> Services
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <i class="zmdi zmdi-comment-more"></i> Contact
//         </a>
//       </li>
//     </ul>
//   </div>
  
//   <div id="content">
//     <nav class="navbar navbar-default">
//       <div class="container-fluid">
//         <ul class="nav navbar-nav navbar-right">
//           <li>
//             <a href="#"><i class="zmdi zmdi-notifications text-danger"></i>
//             </a>
//           </li>
//           <li><a href="#">Test User</a></li>
//         </ul>
//       </div>
//     </nav>
//     <div class="container-fluid">
//       <h1>Simple Sidebar</h1>
//       <p>
//         Make sure to keep all page content within the 
//         <code>#content</code>.
//       </p>
//     </div>
//   </div>
// </div>
  );
};

export default PageLayout;