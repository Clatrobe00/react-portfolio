import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css';
import { pdfjs } from 'react-pdf';
import resume from '../assets/pdf/LatrobeWDResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {

    return (
    <div className='resumeContainer'>
        <Worker className='worker-pdf' workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={resume} />
        </Worker>
    </div>

)}
    

export default Resume;