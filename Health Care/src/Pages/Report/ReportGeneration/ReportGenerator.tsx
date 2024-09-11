import { useState } from 'react';
import { MenuItem, FormControl, InputLabel, Select, Button } from '@mui/material';

import { reportTypes } from '../../../utilities/constants';
import axios from 'axios';

const ReportGenerator = () => {
    const [selectedFile, setSelectedFile] = useState('');

    
    const handleChange = (event : any) => {
        setSelectedFile(event.target.value);
    };

    const handleGenerateReport = async () => {
        if (selectedFile) {
          try {
            // Post request to download the file
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/download-report`, {
              file: selectedFile,
            }, {
              responseType: 'blob', // Ensure the response is a binary blob
            });
      
            const fileBlob = response.data; // The blob data from the response
            const url = window.URL.createObjectURL(fileBlob); // Create a download URL for the blob
            const a = document.createElement('a');
            a.href = url;
            a.download = selectedFile; // Set the filename for download
            document.body.appendChild(a);
            a.click(); // Simulate a click to start download
            a.remove(); // Clean up the element
      
            window.URL.revokeObjectURL(url); // Clean up the blob URL
          } catch (error) {
            console.error('File download failed', error);
          }
        } else {
          console.log('Please select a file');
        }
      };
      

    return (
        <div>
        <div style={{ padding: '20px' ,width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="file-select-label">Select Report Type</InputLabel>
                <Select
                    labelId="file-select-label"
                    id="file-select"
                    value={selectedFile}
                    onChange={handleChange}
                    label="Select Report Type"
                >
                    

                    {reportTypes.map((report) => {
                        return <MenuItem value={report.value}>{report.label}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleGenerateReport} 
                style={{ marginTop: '20px' }}
            >
                Generate Report
            </Button>
        </div>
        </div>
    );
};

export default ReportGenerator;
