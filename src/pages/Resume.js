import React, { useState, useEffect } from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from '../assets/pdf/LatrobeWDResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const getDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window
        return {width, height}
    }
    const [dimensions, setDimensions] = useState(getDimensions());
    
    useEffect (() => {
        const handleResize = () => {
            console.log('hello')
            setDimensions(getDimensions())
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)

    }, []) 

    return (
    <div className='resumeContainer'>
        <Document file={resume}>
            <Page width={dimensions.width < 600 ? '300' : '600'} pageNumber={1}/>
            <br />
            <Page width={dimensions.width < 600 ? '300' : '600'} pageNumber={2}/>
        </Document>
    </div>

)}
    

export default Resume;