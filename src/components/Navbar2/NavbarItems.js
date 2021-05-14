import React from 'react'
import { FaHome, FaSearchLocation, FaHistory } from "react-icons/fa";

const Data = [{
    name: 'Home',
    path: '/',
    icon: <FaHome />,
    class: 'nav-item'
},
{
    name: 'Contact',
    path: '/contact',
    icon: <FaSearchLocation />,
    class: 'nav-item'
},
{
    name: 'Projects',
    path: '/projects',
    icon: <FaHistory />,
    class: 'nav-item'
},
{
    name: 'Resume',
    path: '/resume',
    icon: <FaHistory />,
    class: 'nav-item'
}
]

export default Data;