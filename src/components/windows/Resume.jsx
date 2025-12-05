import { withMacOSWindow } from "@hoc";
import { pdfjs, Document, Page } from "react-pdf";

import { Download } from "lucide-react";
import { WindowControls } from "@components";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const RESUME_PATH = "files/Oleksandr Sukhinin CV.pdf";
const RESUME_TITLE = "Oleksandr Sukhinin CV.pdf";

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>{RESUME_TITLE}</h2>
        <a
          href={RESUME_PATH}
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document
        file={RESUME_PATH}
        loading={<div className="p-8 text-center">Loading PDF...</div>}
        error={
          <div className="p-8 text-center text-red-600">Failed to load PDF</div>
        }
      >
        <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
      </Document>
    </>
  );
};

export const ResumeWindow = withMacOSWindow(Resume, "resume");
