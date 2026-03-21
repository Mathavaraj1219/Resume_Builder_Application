export default function SkillsForm({ skillsData, setSkillsData }) {

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skillsData.skills];
    updatedSkills[index] = value;
    setSkillsData({ ...skillsData, skills: updatedSkills });
  };

  const addSkill = () => {
    setSkillsData({ ...skillsData, skills: [...skillsData.skills, ""] });
  };

  const removeSkill = (index) => {
    const updatedSkills = skillsData.skills.filter((_, i) => i !== index);
    setSkillsData({ ...skillsData, skills: updatedSkills });
  };

  return (
    <div className="bg-gray-400 p-6 rounded-2xl shadow-md mt-2">

      {/* Skills List */}
      <div className="space-y-3">
        {skillsData.skills.map((skill, index) => (
          <div key={index} className="flex gap-2 items-center">

            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              placeholder={`Skill ${index + 1}`}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />

            {/* Remove Button */}
            <button
              onClick={() => removeSkill(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
            >
              ✕
            </button>

          </div>
        ))}
      </div>

      {/* Add Skill Button */}
      <button
        onClick={addSkill}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
      >
        + Add
      </button>

    </div>
  );
}