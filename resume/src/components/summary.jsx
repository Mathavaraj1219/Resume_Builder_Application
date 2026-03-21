 

export default function Summary({ summaryData, setSummaryData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSummaryData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        };

        return (
            <div>
                <textarea
                    name="summary"
                    placeholder="Write a brief summary about your professional background, skills, and career goals."
                    value={summaryData.summary}
                    onChange={handleChange}
                    className="w-full h-52 border-2 border-gray-500 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
            </div>
        )
    };  