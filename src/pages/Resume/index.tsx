
import React, {useState} from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MainBoard from '@/common/main';
// import file from '../../../public/svg/Daniel_Olagunju_Resume__.pdf'
// import { Document, Page } from 'react-pdf';
// import {Document, Page} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import {pdfjs, Document, Page} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function ResumePage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(nextNumPages);
  // }

  return (
    <Layout>
      <Seo templateTitle='Daniel Olagunju' />
      {/* <Document file='./Daniel_Olagunju_Resume__.pdf' onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}

        {/* <Document file="../../../public/svg/Daniel_Olagunju_Resume__.pdf"  options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document> */}
          {/* <Document
        file={{
          url: {file}
        }}
        onLoadError={e =>
          console.log("Error while loading document! " + e.message)
        }
        onSourceError={e =>
          console.log("Error while loading document! " + e.message)
        }
      >
        <Page pageNumber={1} />
      </Document> */}

      {/* <MainBoard >
      
      <iframe src='../../../public/svg/Daniel_Olagunju_Resume__.pdf' />
      
      </MainBoard> */}
    </Layout>
  );
}