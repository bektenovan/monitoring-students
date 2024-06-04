import React from 'react';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExportToExcelButton = () => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/contacts');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
            return [];
        }
    };

    const exportToExcel = async () => {
        const data = await fetchData();
        if (data.length === 0) return;

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Contacts');

        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });

        saveAs(blob, 'contacts.xlsx');
    };

    return (
        <Button
            variant="contained"
            color="success"
            onClick={exportToExcel}
            fullWidth
            style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '20px',
            }}
        >
            Открыть в Excel
        </Button>
    );
};

export default ExportToExcelButton;
