import { withMacOSWindow } from "@hoc";
import { pdfjs, Document, Page } from 'react-pdf';

import { Download } from "lucide-react";
import { WindowControls } from "@components";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Oleksandr Sukhinin CV.pdf</h2>
                <a
                    href="files/Oleksandr Sukhinin CV.pdf"
                    download
                    className="cursor-pointer"
                    title="Download Resume"
                >
                    <Download className="icon" />
                </a>
            </div>
            <Document file="files/Oleksandr Sukhinin CV.pdf">
                <Page
                    pageNumber={1}
                    renderAnnotationLayer
                    renderTextLayer
                />
            </Document>

        </>
    );
};

export const ResumeWindow = withMacOSWindow(Resume, "resume");
