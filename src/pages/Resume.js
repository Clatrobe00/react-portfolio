import React from 'react';
import { Container } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from '../assets/pdf/LatrobeEDResumePDF.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => (
    <Container>
        <Document file={resume}>
            <Page pageNumber={1}/>
            <br />
            <Page pageNumber={2}/>
        </Document>
    </Container>
)
    

export default Resume;