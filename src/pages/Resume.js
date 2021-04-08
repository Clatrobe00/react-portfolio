import React from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from '../assets/pdf/LatrobeEDResumePDF.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => (
    <div className='resumeContainer'>
        <Document file={resume}>
            <Page pageNumber={1}/>
            <br />
            <Page pageNumber={2}/>
        </Document>
    </div>

)
    

export default Resume;