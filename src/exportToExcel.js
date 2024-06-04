import XLSX from 'xlsx';

export const exportToExcel = (surveys) => {
  const worksheet = XLSX.utils.json_to_sheet(surveys);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Surveys');
  XLSX.writeFile(workbook, 'surveys.xlsx');
};
