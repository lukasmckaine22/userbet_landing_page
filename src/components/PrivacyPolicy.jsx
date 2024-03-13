import React from "react";

const PrivacyPolicy = () => {
  const pdfPath = "/privacy_policy_micro_draft.pdf";

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe src={pdfPath} style={{ width: "100%", height: "100%" }}>
        This browser does not support PDFs. Please download the PDF to view it:{" "}
        <a href={pdfPath}>Download PDF</a>.
      </iframe>
    </div>
  );
};

export default PrivacyPolicy;
