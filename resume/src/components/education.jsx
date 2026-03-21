export default function EducationForm({ educationData, setEducationData }) {

  const handleChange = (index, field, value) => {
    const updated = [...educationData.education];
    updated[index][field] = value;
    setEducationData({ ...educationData, education: updated });
  };

  const addEducation = () => {
    setEducationData({
      ...educationData,
      education: [
        ...educationData.education,
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
  };

  const removeEducation = (index) => {
    const updated = educationData.education.filter((_, i) => i !== index);
    setEducationData({ ...educationData, education: updated });
  };

  const handleCourseChange = (eduIndex, courseIndex, value) => {
    const updated = [...educationData.education];
    updated[eduIndex].courses[courseIndex] = value;
    setEducationData({ ...educationData, education: updated });
  };

  const addCourse = (eduIndex) => {
    const updated = [...educationData.education];
    updated[eduIndex].courses.push("");
    setEducationData({ ...educationData, education: updated });
  };

  const removeCourse = (eduIndex, courseIndex) => {
    const updated = [...educationData.education];
    updated[eduIndex].courses =
      updated[eduIndex].courses.filter((_, i) => i !== courseIndex);
    setEducationData({ ...educationData, education: updated });
  };

  return (
    <div className="bg-gray-400 p-6 rounded-2xl shadow-md mt-2">

      {educationData.education.map((edu, index) => (
        <div key={index} className="border border-gray-200 p-5 mb-5 rounded-xl bg-gray-300">

          {/* Degree */}
          <input
            placeholder="Degree / Field of Study"
            value={edu.degree}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* College */}
          <input
            placeholder="College / University Name"
            value={edu.college}
            onChange={(e) => handleChange(index, "college", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Month */}
          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="Start Month"
              value={edu.startMonth}
              onChange={(e) => handleChange(index, "startMonth", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              placeholder="Start Year"
              value={edu.startYear}
              onChange={(e) => handleChange(index, "startYear", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <input
              placeholder="End Month"
              value={edu.endMonth}
              onChange={(e) => handleChange(index, "endMonth", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              placeholder="End Year"
              value={edu.endYear}
              onChange={(e) => handleChange(index, "endYear", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Coursework */}
          <h3 className="mt-4 font-medium text-gray-800">Relevant Coursework</h3>

          <div className="space-y-2 mt-2">
            {edu.courses.map((course, cIndex) => (
              <div key={cIndex} className="flex gap-2">

                <input
                  value={course}
                  onChange={(e) =>
                    handleCourseChange(index, cIndex, e.target.value)
                  }
                  placeholder={`Course ${cIndex + 1}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <button
                  onClick={() => removeCourse(index, cIndex)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-lg"
                >
                  ✕
                </button>

              </div>
            ))}
          </div>

          {/* Add Course */}
          <button
            onClick={() => addCourse(index)}
            className="mt-3 text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg"
          >
            + Add Course
          </button>

          {/* Remove Education */}
          <button
            onClick={() => removeEducation(index)}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Remove Education
          </button>

        </div>
      ))}

      {/* Add Education */}
      <button
        onClick={addEducation}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
      >
        + Add Education
      </button>

    </div>
  );
}