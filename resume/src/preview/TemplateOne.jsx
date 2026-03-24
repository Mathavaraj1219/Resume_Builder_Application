import React, { forwardRef } from "react";

const TemplateOne = forwardRef(({
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
        className="resume-print bg-white px-16 py-10 print:px-6 print:py-10"
        style={{
          width: "210mm",
          height: "297mm"
        }}
      >

        {/* HEADER */}
        <div style={{ borderColor: theme.borderColor }} className="px-2 border-b-4">
          <h1 style={{ color: theme.headingColor }} className="text-3xl font-bold">
            {headerData.name}
          </h1>
          <p className="text-gray-700">{headerData.role}</p>

          <div className="grid grid-cols-3 gap-2 mt-2 text-sm mb-2">
            <p>{headerData.address}</p>
            <p>{headerData.email}</p>
            <p>{headerData.phone}</p>
            <p>{headerData.portfolio}</p>
            <p>{headerData.linkedin}</p>
            <p>{headerData.github}</p>
          </div>
        </div>

        {/* SUMMARY */}
        <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2 px-2">
          <h2 style={{ color: theme.headingColor }} className="font-bold text-xl">
            Professional Summary
          </h2>
          <p className="text-sm mt-2">{summaryData.summary}</p>
        </div>

        {/* SKILLS */}
        <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2 px-2">
          <h2 style={{ color: theme.headingColor }} className="font-bold text-xl">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-3 gap-2 text-sm mt-2 list-disc pl-5">
            {skillsData.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2 px-2">
          <h2 style={{ color: theme.headingColor }} className="font-bold text-xl">
            Experience
          </h2>

          {experienceData.experience.map((exp, i) => (
            <div key={i} className="mt-2">
              <p className="font-medium text-gray-700">{exp.jobTitle}</p>
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
        <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2 px-2">
          <h2 style={{ color: theme.headingColor }} className="font-bold text-xl">
            Education
          </h2>

          {educationData.education.map((edu, i) => (
            <div key={i} className="mt-2">
              <p className="font-medium text-gray-700">{edu.degree}</p>
              <p className="text-sm">{edu.college}</p>
              <p className="text-xs text-gray-500 mb-1">
                {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
              </p>

              <p className="text-sm">
                <span className="font-medium">Relevant Coursework: </span>
                {edu.courses.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div style={{ borderColor: theme.borderColor }} className="mt-4 border-b-2 pb-2 px-2">
          <h2 style={{ color: theme.headingColor }} className="font-bold text-xl">
            Certifications
          </h2>

          <ul className="text-sm mt-2 list-disc pl-5">
            {certificationsData.certifications.map((cert, i) => (
              <li key={i}>
                {cert.title} - {cert.issuer} - {cert.date}
                {cert.link && (
                  <span>
                    {" "} - <a href={cert.link} className="text-blue-600 hover:underline">View</a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
});

export default TemplateOne;