import React, { forwardRef } from "react";

const TemplateThree = forwardRef(({
  theme,
  headerData,
  summaryData,
  skillsData,
  experienceData,
  educationData,
  certificationsData
}, ref) => {

  return (
    <div className="flex justify-center print:block">

      {/* A4 SHEET */}
      <div
        ref={ref}
        className="resume-print bg-white px-16 py-10 print:px-6 print:py-10 text-gray-900"
        style={{
          width: "210mm",
          height: "297mm"
        }}
      >

        {/* HEADER (Minimal) */}
        <div className="mb-4">
          <h1 style={{ color: theme.headingColor }} className="text-2xl font-bold tracking-wide">
            {headerData.name}
          </h1>
          <p style={{ color: theme.headingColor }} className="text-sm">{headerData.role}</p>

          <div className="flex flex-wrap gap-3 text-xs mt-2 text-gray-600">
            <span>{headerData.email}</span>
            <span>|</span>
            <span>{headerData.phone}</span>
            <span>|</span>
            <span>{headerData.linkedin}</span>
            <span>|</span>
            <span>{headerData.github}</span>
            <span>|</span>
            <span>{headerData.portfolio}</span>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mb-4">
          <h2 style={{ borderColor: theme.borderColor, color: theme.headingColor }} className="text-sm font-bold uppercase tracking-wide border-b pb-1">
            Summary
          </h2>
          <p className="text-sm mt-2 leading-relaxed">
            {summaryData.summary}
          </p>
        </div>

        {/* SKILLS (Inline style - ATS friendly) */}
        <div className="mb-4">
          <h2 style={{ borderColor: theme.borderColor, color: theme.headingColor }} className="text-sm font-bold uppercase tracking-wide border-b pb-1">
            Techanical Skills
          </h2>
          <p className="text-sm mt-2">
            {skillsData.skills.join("  |  ")}
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-4">
          <h2 style={{ borderColor: theme.borderColor, color: theme.headingColor }} className="text-sm font-bold uppercase tracking-wide border-b pb-1">
            Experience
          </h2>

          {experienceData.experience.map((exp, i) => (
            <div key={i} className="mt-3">

              <div className="flex justify-between text-sm font-semibold">
                <span>{exp.jobTitle}</span>
                <span className="text-xs text-gray-500">
                  {exp.startMonth} {exp.startYear} -{" "}
                  {exp.present ? "Present" : `${exp.endMonth} ${exp.endYear}`}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                {exp.company} | {exp.location}
              </p>

              <ul className="list-disc pl-5 text-sm mt-1">
                {exp.descriptions.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="mb-4">
          <h2 style={{ borderColor: theme.borderColor, color: theme.headingColor }} className="text-sm font-bold uppercase tracking-wide border-b pb-1">
            Education
          </h2>

          {educationData.education.map((edu, i) => (
            <div key={i} className="mt-3">

              <div className="flex justify-between text-sm font-semibold">
                <span>{edu.degree}</span>
                <span className="text-xs text-gray-500">
                  {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
                </span>
              </div>

              <p className="text-sm text-gray-600">{edu.college}</p>

              <p className="text-sm mt-1">
                {edu.courses.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 style={{ borderColor: theme.borderColor, color: theme.headingColor }} className="text-sm font-bold uppercase tracking-wide border-b pb-1">
            Certifications
          </h2>

          <ul className="text-sm mt-2 list-disc pl-5">
            {certificationsData.certifications.map((cert, i) => (
              <li key={i}>
                {cert.title} - {cert.issuer}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
});

export default TemplateThree;