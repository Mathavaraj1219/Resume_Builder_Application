export default function ExperienceForm({ experienceData, setExperienceData }) {

  const handleChange = (index, field, value) => {
    const updated = [...experienceData.experience];
    updated[index][field] = value;
    setExperienceData({ ...experienceData, experience: updated });
  };

  const addExperience = () => {
    setExperienceData({
      ...experienceData,
      experience: [
        ...experienceData.experience,
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
  };

  const removeExperience = (index) => {
    const updated = experienceData.experience.filter((_, i) => i !== index);
    setExperienceData({ ...experienceData, experience: updated });
  };

  const handleDescChange = (expIndex, descIndex, value) => {
    const updated = [...experienceData.experience];
    updated[expIndex].descriptions[descIndex] = value;
    setExperienceData({ ...experienceData, experience: updated });
  };

  const addDescription = (expIndex) => {
    const updated = [...experienceData.experience];
    updated[expIndex].descriptions.push("");
    setExperienceData({ ...experienceData, experience: updated });
  };

  const removeDescription = (expIndex, descIndex) => {
    const updated = [...experienceData.experience];
    updated[expIndex].descriptions =
      updated[expIndex].descriptions.filter((_, i) => i !== descIndex);
    setExperienceData({ ...experienceData, experience: updated });
  };

  return (
    <div className="bg-gray-400 p-6 rounded-2xl shadow-md mt-2">

      {experienceData.experience.map((exp, index) => (
        <div key={index} className="border border-gray-200 p-5 mb-5 rounded-xl bg-gray-300">

          {/* Job Title */}
          <input
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Company */}
          <input
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Location */}
          <input
            placeholder="Company Location"
            value={exp.location}
            onChange={(e) => handleChange(index, "location", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="Start Month"
              value={exp.startMonth}
              onChange={(e) => handleChange(index, "startMonth", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              placeholder="Start Year"
              value={exp.startYear}
              onChange={(e) => handleChange(index, "startYear", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <input
              placeholder="End Month"
              value={exp.endMonth}
              disabled={exp.present}
              onChange={(e) => handleChange(index, "endMonth", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            />
            <input
              placeholder="End Year"
              value={exp.endYear}
              disabled={exp.present}
              onChange={(e) => handleChange(index, "endYear", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 mt-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={exp.present}
              onChange={(e) => handleChange(index, "present", e.target.checked)}
              className="accent-blue-500"
            />
            Currently working here
          </label>

          {/* Description */}
          <h3 className="mt-4 font-medium text-gray-800">Responsibilities</h3>

          <div className="space-y-2 mt-2">
            {exp.descriptions.map((desc, dIndex) => (
              <div key={dIndex} className="flex gap-2">

                <input
                  value={desc}
                  onChange={(e) =>
                    handleDescChange(index, dIndex, e.target.value)
                  }
                  placeholder={`Point ${dIndex + 1}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <button
                  onClick={() => removeDescription(index, dIndex)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-lg"
                >
                  ✕
                </button>

              </div>
            ))}
          </div>

          {/* Add Description */}
          <button
            onClick={() => addDescription(index)}
            className="mt-3 text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg"
          >
            + Add Point
          </button>

          {/* Remove Experience */}
          <button
            onClick={() => removeExperience(index)}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Remove Experience
          </button>

        </div>
      ))}

      {/* Add Experience */}
      <button
        onClick={addExperience}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
      >
        + Add Experience
      </button>

    </div>
  );
}