
export default function CertificationForm({ certificationsData, setCertificationsData }) {

  const handleChange = (index, field, value) => {
    const updated = [...certificationsData.certifications];
    updated[index][field] = value;
    setCertificationsData({ ...certificationsData, certifications: updated });
  };

  const addCertification = () => {
    setCertificationsData({
      ...certificationsData,
      certifications: [
        ...certificationsData.certifications,
        { title: "", issuer: "", date: "", link: "" }
      ]
    });
  };

  const removeCertification = (index) => {
    const updated = certificationsData.certifications.filter((_, i) => i !== index);
    setCertificationsData({ ...certificationsData, certifications: updated });
  };

  return (
    <div className="bg-gray-400 p-6 rounded-2xl shadow-md mt-2">

      {certificationsData.certifications.map((cert, index) => (
        <div key={index} className="border border-gray-200 p-5 mb-4 rounded-xl bg-gray-300">

          {/* Title */}
          <input
            placeholder="Certification Title (e.g. AWS Certified Developer)"
            value={cert.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Issuer */}
          <input
            placeholder="Issued By (e.g. Coursera, AWS)"
            value={cert.issuer}
            onChange={(e) => handleChange(index, "issuer", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Date */}
          <input
            placeholder="Completion Date (e.g. Jan 2024)"
            value={cert.date}
            onChange={(e) => handleChange(index, "date", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Link */}
          <input
            placeholder="Certificate Link (optional)"
            value={cert.link}
            onChange={(e) => handleChange(index, "link", e.target.value)}
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Remove Button */}
          <button
            onClick={() => removeCertification(index)}
            className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Remove Certification
          </button>

        </div>
      ))}

      {/* Add Button */}
      <button
        onClick={addCertification}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
      >
        + Add Certification
      </button>

    </div>
  );
}