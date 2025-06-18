
function Reports() {
    return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Reports</h1>
        <p className="text-gray-700 mb-6">
            Generate and view reports related to cattle management.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Report Options</h2>
            <ul className="list-disc pl-5 space-y-2">
            <li>Daily Cattle Health Report</li>
            <li>Monthly Milk Production Report</li>
            <li>Annual Breeding Performance Report</li>
            <li>Feed Consumption Analysis</li>
            </ul>
        </div>
        </div>
    );
    }
export default Reports;
