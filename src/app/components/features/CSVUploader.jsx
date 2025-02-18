import { useState } from "react";
import { usePapaParse } from "react-papaparse";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFile, FaExclamationTriangle } from "react-icons/fa";

export default function CSVUploader({ setData, setOpen }) {
  const { readString } = usePapaParse();
  const [fileName, setFileName] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      setError("Invalid file type. Please upload a .csv file.");
      setFileName(null);
      return;
    }

    setError("");
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target.result;
      readString(csvData, {
        complete: (results) => {
          const newRows = results.data.slice(1).map((row) => ({
            sportsbook: row[0] || "",
            betId: row[1] || "",
            sport: row[2] || "",
            eventName: row[3] || "",
            eventDate: row[4] || "",
            marketName: row[5] || "",
            betName: row[6] || "",
            position: row[7] || "",
            odds: row[8] || "",
            suggestedBetToWin: row[9] || "",
            suggestedBetSize: row[10] || "",
            stake: row[11] || "",
            potentialPayout: row[12] || "",
            projectedEV: row[13] || "",
            convertedWin: row[14] || "",
            tag: row[15] || "",
            helperColumn: row[16] || "",
            result: row[17] || "",
          }));

          if (newRows.length === 0) {
            setError("CSV file is empty or invalid.");
          } else {
            setParsedData(newRows);
            setError(""); // Clear error if valid
          }
        },
        header: false,
      });
    };

    reader.readAsText(file);
  };

  const handleSubmit = () => {
    if (parsedData.length === 0) {
      alert("No data to upload!");
      return;
    }

    setData((prevData) => [...prevData, ...parsedData]);
    setParsedData([]);
    setFileName(null);
    setOpen(false);
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* File Input */}
      <Input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="w-full cursor-pointer"
      />

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-500 text-center flex items-center justify-center gap-2">
          <FaExclamationTriangle className="h-4 w-4" />
          {error}
        </p>
      )}

      {/* File Name Display */}
      {fileName && (
        <p className="text-sm text-gray-500 text-center break-all flex items-center justify-center gap-2">
          <FaFile className="h-4 w-4 text-gray-500" />
          <span className="font-medium">{fileName}</span>
        </p>
      )}

      {/* Responsive Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 w-full">
        <Button
          variant="secondary"
          className="w-full sm:w-auto"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="w-full sm:w-auto"
          onClick={handleSubmit}
          disabled={!!error || parsedData.length === 0}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
