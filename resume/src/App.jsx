import { useState } from "react";
import Header from "./components/header";
import Summary from "./components/summary";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Certifications from "./components/certifications";
import Preview from "./components/preview";
import TemplateOne from "./preview/TemplateOne";
import { useRef } from "react";


function App() {

  const previewRef = useRef();

  const [openSections, setOpenSections] = useState([]);

  const presets = [
  { name: "Blue", headingColor: "#1D4ED8", borderColor: "#3B82F6" },
  { name: "Green", headingColor: "#047857", borderColor: "#10B981" },
  { name: "Black", headingColor: "#111827", borderColor: "#374151" },
  { name: "Burgundy", headingColor: "#800020", borderColor: "#A52A2A" }
];

  const [theme, setTheme] = useState(presets[2]);
  const [template, setTemplate] = useState("template1");

  const toggleSection = (section) => {
  setOpenSections((prev) =>
    prev.includes(section)
      ? prev.filter((s) => s !== section)
      : [...prev, section]
  );
};

const handleDownloadPDF = async () => {
  const element = previewRef.current;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />

  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Font (important for alignment) -->
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }

    .resume-print {
      width: 210mm;
      height: 297mm; /* 🔥 FIXED HEIGHT (NO EXTRA PAGE) */
      margin: 0 auto;
      background: white;
      overflow: hidden; /* 🔥 PREVENT OVERFLOW */
    }
  </style>

</head>

<body>
  ${element.outerHTML}
</body>
</html>
`;

  const response = await fetch("http://localhost:5000/generate-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ html })
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${headerData.name || "resume"}.pdf`;
  a.click();
};

const handlePrint = () => {
  window.print();
};

  const [headerData, setHeaderData] = useState({
    name: "",
    role: "",
    address: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    github: ""
  });
  
  const [summaryData, setSummaryData] = useState({
    summary: ""
  });

  const [skillsData, setSkillsData] = useState({
    skills: []
  });

  const [experienceData, setExperienceData] = useState({
    experience: [
      {
          jobTitle: "",
          company: "",
          location: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          present: false,
          descriptions: [""]
      }
    ]
  });
  
  const [educationData, setEducationData] = useState({
    education: [
      {
          college: "",
          degree: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          courses: [""]
      }
    ]
  }); 

  const [certificationsData, setCertificationsData] = useState({
  certifications: [
    { title: "", 
      issuer: "", 
      date: "", 
      link: "" }
  ]
});

  return (
    <div>
        
        {/* TOP BAR */}
       <div className="sticky top-0 left-0 w-full h-14 bg-gray-800 text-white px-4 flex items-center justify-between z-10 print:hidden">
          <h1 className="text-2xl font-bold">Resume Builder</h1>
          <div className="flex gap-3 items-center">
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="bg-gray-200 text-black px-4 py-2 rounded-lg outline-2 cursor-pointer hover:bg-gray-300"
            >
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
              <option value="template3">Template 3</option>
            </select>

            <select
              value={theme.name}
              onChange={(e) => {
                const selected = presets.find(p => p.name === e.target.value);
                setTheme(selected);
              }}
              className="bg-gray-200 text-black px-4 py-2 rounded-lg outline-2 cursor-pointer hover:bg-gray-300"
            >
              <option value="Blue">🔵 Blue</option>
              <option value="Green">🟢 Green</option>
              <option value="Black">⚫ Black</option>
              <option value="Burgundy">🔴 Burgundy</option>
            </select>
          <button onClick={handleDownloadPDF} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Download PDF</button>
          <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Print Resume</button>
          </div>
        </div>
    
       <div className="flex h-[calc(100vh-56px)]">
    
          {/* LEFT */}
         <div className="w-2/5 h-full overflow-y-auto bg-gray-300 p-4 space-y-2 print:hidden">

            {/* HEADER */}
            <button
              onClick={() => toggleSection("header")}
              className="w-full text-left px-3 py-2 font-bold bg-gray-400 hover:bg-gray-500 rounded-lg"
            >
              Header
            </button>

            {openSections.includes("header") && (
              <Header headerData={headerData} setHeaderData={setHeaderData} />
            )}

            {/* SUMMARY */}
            <button
              onClick={() => toggleSection("summary")}
              className="w-full text-left px-3 py-2 font-bold bg-gray-400 hover:bg-gray-500 rounded-lg"
            >
              Summary
            </button>

            {openSections.includes("summary") && (
              <Summary summaryData={summaryData} setSummaryData={setSummaryData} />
            )}

            {/* SKILLS */}
            <button
              onClick={() => toggleSection("skills")}
              className="w-full text-left px-3 py-2 font-bold bg-gray-400 hover:bg-gray-500 rounded-lg"
            >
              Skills
            </button>

            {openSections.includes("skills") && (
              <Skills skillsData={skillsData} setSkillsData={setSkillsData} />
            )}

            {/* EXPERIENCE */}
            <button
              onClick={() => toggleSection("experience")}
              className="w-full text-left px-3 py-2 font-bold bg-gray-400 hover:bg-gray-500 rounded-lg"
            >
              Experience
            </button>

            {openSections.includes("experience") && (
              <Experience experienceData={experienceData} setExperienceData={setExperienceData} />
            )}

            {/* EDUCATION */}
            <button
              onClick={() => toggleSection("education")}
              className="w-full text-left px-3 py-2 font-bold bg-gray-400 hover:bg-gray-500 rounded-lg"
            >
              Education
            </button>

            {openSections.includes("education") && (
              <Education educationData={educationData} setEducationData={setEducationData} />
            )}

            {/* CERTIFICATIONS */}
            <button
              onClick={() => toggleSection("certifications")}
              className="w-full text-left px-3 py-2 font-bold bg-gray-400 hover:bg-gray-500 rounded-lg"
            >
              Certifications
            </button>

            {openSections.includes("certifications") && (
              <Certifications
                certificationsData={certificationsData}
                setCertificationsData={setCertificationsData}
              />
            )}

          </div>
    
          {/* RIGHT */}
          <div className="w-3/5 h-full bg-gray-200 p-6 overflow-y-auto space-y-2">

            {template === "template1" && <TemplateOne 
              ref={previewRef}
              theme={theme}
              headerData={headerData}
              summaryData={summaryData}
              skillsData={skillsData}
              experienceData={experienceData}
              educationData={educationData}
              certificationsData={certificationsData} />}

            {template === "template2" && <TemplateTwo {...props} />}
            {template === "template3" && <TemplateThree {...props} />}
          </div>
    
        </div>
    
      </div>
  );
}

export default App;