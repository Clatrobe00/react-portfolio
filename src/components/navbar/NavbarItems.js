import React from 'react'
import { FaHome, FaPhoneAlt, FaProjectDiagram, FaRegFileAlt } from "react-icons/fa";

const Data = [{
    name: 'Home',
    path: '/',
    icon: <FaHome />,
    class: 'nav-item'
},
{
    name: 'Contact',
    path: '/contact',
    icon: <FaPhoneAlt />,
    class: 'nav-item'
},
{
    name: 'Projects',
    path: '/projects',
    icon: <FaProjectDiagram />,
    class: 'nav-item'
},
{
    name: 'Resume',
    path: '/resume',
    icon: <FaRegFileAlt />,
    class: 'nav-item'
}
]

export default Data;