export default function Header({ headerData, setHeaderData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeaderData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-400 p-6 rounded-2xl shadow-md mt-2">

      <div className="grid grid-cols-1 gap-4">

        {/* Full Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={headerData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />

        {/* Role */}
        <input
          name="role"
          placeholder="Job Role"
          value={headerData.role}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />

        {/* Address (full width) */}
        <input
          name="address"
          placeholder="Address (City, State)"
          value={headerData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />

        {/* Email */}
        <input
          name="email"
          placeholder="Email ID"
          value={headerData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"        />

        {/* Phone */}
        <input
          name="phone"
          placeholder="Mobile Number"
          value={headerData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"        />

        {/* Portfolio */}
        <input
          name="portfolio"
          placeholder="Portfolio Link"
          value={headerData.portfolio}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"        />

        {/* LinkedIn */}
        <input
          name="linkedin"
          placeholder="LinkedIn URL"
          value={headerData.linkedin}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"        />

        {/* GitHub */}
        <input
          name="github"
          placeholder="GitHub URL"
          value={headerData.github}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"        />

      </div>
    </div>
  );
}