import React, { forwardRef } from "react";

const TemplateTwo = forwardRef(({
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
        className="resume-print bg-white flex"
        style={{
          width: "210mm",
          height: "297mm",
          overflow: "hidden"
        }}
      >

        {/* 🔵 LEFT SIDEBAR */}
        <div
          className="w-1/3 p-6 text-white"
          style={{ backgroundColor: theme.headingColor }}
        >
          {/* NAME */}
          <h1 className="text-2xl font-bold">{headerData.name}</h1>
          <p className="text-sm mb-4">{headerData.role}</p>

          {/* CONTACT */}
          <div className="text-xs space-y-1 mb-4">
            <p>{headerData.address}</p>
            <p>{headerData.email}</p>
            <p>{headerData.phone}</p>
            <p>{headerData.portfolio}</p>
            <p>{headerData.linkedin}</p>
            <p>{headerData.github}</p>
          </div>

          {/* SKILLS */}
          <div className="mt-4">
            <h2 className="font-bold border-b pb-1 border-white">
              Skills
            </h2>
            <ul className="mt-2 text-sm list-disc ml-4">
              {skillsData.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div className="mt-4">
            <h2 className="font-bold border-b pb-1 border-white">
              Certifications
            </h2>
            <ul className="mt-2 text-sm list-disc ml-4">
              {certificationsData.certifications.map((cert, i) => (
                <li key={i}>
                  {cert.title} - {cert.issuer}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ⚪ RIGHT CONTENT */}
        <div className="w-2/3 px-10 py-8">

          {/* SUMMARY */}
          <div style={{ borderColor: theme.borderColor }} className="border-b-2 pb-2">
            <h2
              style={{ color: theme.headingColor }}
              className="font-bold text-xl"
            >
              Professional Summary
            </h2>
            <p className="text-sm mt-2">{summaryData.summary}</p>
          </div>

          {/* EXPERIENCE */}
          <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2">
            <h2
              style={{ color: theme.headingColor }}
              className="font-bold text-xl"
            >
              Experience
            </h2>

            {experienceData.experience.map((exp, i) => (
              <div key={i} className="mt-2">
                <p className="font-medium">{exp.jobTitle}</p>
                <p className="text-sm">{exp.company} - {exp.location}</p>
                <p className="text-xs text-gray-500">
                  {exp.startMonth} {exp.startYear} -{" "}
                  {exp.present ? "Present" : `${exp.endMonth} ${exp.endYear}`}
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
          <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2">
            <h2
              style={{ color: theme.headingColor }}
              className="font-bold text-xl"
            >
              Education
            </h2>

            {educationData.education.map((edu, i) => (
              <div key={i} className="mt-2">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm">{edu.college}</p>
                <p className="text-xs text-gray-500">
                  {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
                </p>

                <p className="text-sm">
                  <span className="font-medium">Coursework: </span>
                  {edu.courses.join(", ")}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
});

export default TemplateTwo;