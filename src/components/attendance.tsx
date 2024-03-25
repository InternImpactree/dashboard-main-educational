"use client"; 

import { AppBar, Button, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'Batch', headerName: 'Batch', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) => {
//       // Cast params to access the `value` property
//       return `${params.row.Batch || ''} ${params.row.lastName || ''}`;
//      }
//   },
// ];
const columns: GridColDef[] = [
  { field: 'batch', headerName: 'Batch', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'noOfStudents', headerName: 'No of Students', width: 130, type: 'number' },
  { field: 'averageAttendance', headerName: 'Average Attendance', width: 130, type: 'number' },
  { field: 'dropouts', headerName: 'Dropouts', width: 130, type: 'number' },
 ];
 

const rows = [
  { id: 1, batch: 'Batch 1', status: 'Active', noOfStudents: 25, averageAttendance: 85, dropouts: 2 },
  { id: 2, batch: 'Batch 2', status: 'Inactive', noOfStudents: 30, averageAttendance: 75, dropouts: 5 },
  { id: 3, batch: 'Batch 3', status: 'Active', noOfStudents: 20, averageAttendance: 90, dropouts: 1 },
  // Add more rows as needed
 ];
 


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface Option {
  label: React.ReactNode;
  value: string;
  className?: string;
  data?: {
    [dataAttribute: string]: string | number
  };
}
interface Group {
  type: "group";
  name: string;
  items: Option[];
}
interface ReactDropdownProps {
  options: (Group | Option | string)[];
  baseClassName?: string;
  className?: string;
  controlClassName?: string;
  placeholderClassName?: string;
  menuClassName?: string;
  arrowClassName?: string;
  disabled?: boolean;
  arrowClosed?: React.ReactNode,
  arrowOpen?: React.ReactNode,
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  value?: Option | string;
  placeholder?: String;
}

function Attendance(props:ReactDropdownProps) {


  const [value, onChange] = useState<Value>(new Date());

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const options1 = ['Option 1', 'Option 2', 'Option 3'];
  const options2 = ['Option A', 'Option B', 'Option C'];
  const options3 = ['Apple', 'Banana', 'Orange'];
  const options4 = ['Apple', 'Banana', 'Orange'];

  const handleChange1 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption1(option.value);
  };

  const handleChange2 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption2(option.value);
  };

  const handleChange3 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption3(option.value);
  };

  const handleChange4 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption4(option.value);
  };

  const infoForOption1 = {
    'Option 1': 'Information for Option 1',
    'Option 2': 'Information for Option 2',
    'Option 3': 'Information for Option 3',
  };

  const infoForOption2 = {
    'Option A': 'Information for Option A',
    'Option B': 'Information for Option B',
    'Option C': 'Information for Option C',
  };

  const infoForOption3 = {
    'Apple': 'Information for Apple',
    'Banana': 'Information for Banana',
    'Orange': 'Information for Orange',
  };

  const infoForOption4 = {
    'Apple': 'Information for Apple',
    'Banana': 'Information for Banana',
    'Orange': 'Information for Orange',
  };

  
  return (
    <>
      <div>
        <AppBar position="static" sx={{ bgcolor: '#3485ae', boxShadow: 'none' }}>
          <Toolbar>
            <Button component={Link} to="/mobilization"><p style={{ color: "white", textTransform: "capitalize" }}>Mobilization</p></Button>
            <Button component={Link} to="/attendance"><b style={{ color: "black", textTransform: "capitalize" }}>Attendance</b></Button>
            <Button component={Link} to="/grading"><p style={{ color: "white", textTransform: "capitalize" }}>Grading</p></Button>
            <Button component={Link} to="/students"><p style={{ color: "white", textTransform: "capitalize" }}>Student Details</p></Button>
            <Button component={Link} to="/training"><p style={{ color: "white", textTransform: "capitalize" }}>Training</p></Button>
                      </Toolbar>
        </AppBar>
      </div>
      <div className="calendar-container">
        <div className="custom-calendar">
          <div >
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>

      <div className="dropdown-container">


        <div className="dropdown-wrapper">
          <h1></h1>
          <Dropdown
            options={options1}
            value={selectedOption1}
            onChange={handleChange1} />
          {/* {selectedOption1 && <p>{infoForOption1[selectedOption1]}</p>} */}
        </div>


        <div className="dropdown-wrapper">
          <h1></h1>
          <Dropdown
            options={options2}
            value={selectedOption2}
            onChange={handleChange2} />
          {/* {selectedOption2 && <p>{infoForOption2[selectedOption2]}</p>} */}
        </div>

        <div className="dropdown-wrapper">
          <h1></h1>
          <Dropdown
            options={options3}
            value={selectedOption3}
            onChange={handleChange3} />
          {/* {selectedOption3 && <p>{infoForOption3[selectedOption3]}</p>} */}
        </div>

        <div className="dropdown-wrapper">
          <h1></h1>
          <Dropdown
            options={options4}
            value={selectedOption4}
            onChange={handleChange4} />
          {/* {selectedOption4 && <p>{infoForOption4[selectedOption4]}</p>} */}
        </div>

      </div>

      <div style={{ height: 400, width: '60%', margin:'3%', backgroundColor:"white"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection />
      </div></>
      
  );
}

export default Attendance;