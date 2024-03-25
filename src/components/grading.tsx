"use client"; 

import { AppBar, Button, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

interface Data {
    label: string;
    value: number;
  }

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

function Grading(props:ReactDropdownProps) {
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
  
    const sourceData= [
        {
          "label": "Average school score",
          "value": 100
        },
        {
          "label": "Client school score",
          "value": 60
        },
     
      ]
      
    const statusData=[
      { "label": "Science", 
         "value": 30 },
      { "label": "Maths", 
        "value": 20 },
      { "label": "Physics",
        "value": 15 },
      { "label": "Chem",
        "value": 10 },
      { "label": "Bio",
        "value": 8 },
      { "label": "Geo", 
        "value": 17 }
    ]
    
    return (
      <>
                 <div>
      <AppBar position="static" sx={{ bgcolor: '#3485ae', boxShadow: 'none'}}>
          <Toolbar>
          <Button component={Link} to="/mobilization"><p style={{color:"white",textTransform: "capitalize"}}>Mobilization</p></Button>
          <Button component={Link} to="/attendance"><p style={{color:"white",textTransform: "capitalize"}}>Attendance</p></Button>
          <Button component={Link} to="/grading"><b style={{color:"black",textTransform: "capitalize"}}>Grading</b></Button>
          <Button component={Link} to="/students"><p style={{color:"white",textTransform: "capitalize"}}>Student Details</p></Button>
          <Button component={Link} to="/training"><p style={{color:"white",textTransform: "capitalize"}}>Training</p></Button>
         
          </Toolbar>
        </AppBar>
        </div>
      
      <div className="dropdown-container-grading">
  
  
          <div className="dropdown-wrapper-grading">
            <h1></h1>
            <Dropdown
              options={[{ value: '', label: 'Vertical' }, ...options1]}
              value={selectedOption1}
              onChange={handleChange1} />
            {/* {selectedOption1 && <p>{infoForOption1[selectedOption1]}</p>} */}
          </div>
  
  
          <div className="dropdown-wrapper-grading">
            <h1></h1>
            <Dropdown
              options={[{ value: '', label: 'Centre' }, ...options2]}
              value={selectedOption2}
              onChange={handleChange2} />
            {/* {selectedOption2 && <p>{infoForOption2[selectedOption2]}</p>} */}
          </div>
  
          <div className="dropdown-wrapper-grading">
            <h1></h1>
            <Dropdown
              options={[{ value: '', label: 'Course' }, ...options3]}
              value={selectedOption3}
              onChange={handleChange3} />
            {/* {selectedOption3 && <p>{infoForOption3[selectedOption3]}</p>} */}
          </div>
  
          <div className="dropdown-wrapper-grading">
            <h1></h1>
            <Dropdown
              options={[{ value: '', label: 'Batch' }, ...options4]}
              value={selectedOption4}
              onChange={handleChange4} />
            {/* {selectedOption4 && <p>{infoForOption4[selectedOption4]}</p>} */}
          </div>
          </div>
          <div className='grading-main'>
          <div className="dataCard categoryCard-grading">
            <h3 style={{textAlign:"center"}}>School</h3>
          <Doughnut
            data={{
              labels: statusData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: statusData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(73, 0, 0, 0.87)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(73, 0, 0, 0.87)',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Grades",  
                  font:{
                    size: 15,
                  },
                },
              },
            }}
          />
        </div>
      
        <div className="dropdown-container-grading1">
  
        <h3 style={{textAlign:"center"}}>Student Name</h3>
  <div className="dropdown-wrapper-grading1">

    <Dropdown
      options={options1}
      value={selectedOption1}
      onChange={handleChange1} />
    {/* {selectedOption1 && <p>{infoForOption1[selectedOption1]}</p>} */}
  </div>


<div className=" customerCard-grading" style={{ width: '400px' }}>
          <Bar
            data={{
              labels: sourceData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Score',
                  data: sourceData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                 
                },
              },
            }}
          />
        </div>
        </div>

        <div className="dataCard categoryCard-grading">
            <h3 style={{textAlign:"center"}}>Client Center</h3>
          <Doughnut
            data={{
              labels: statusData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: statusData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(73, 0, 0, 0.87)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(73, 0, 0, 0.87)',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Grades", 
                  font:{
                    size: 15,
                  },
                },
              },
            }}
          />
        </div>
        </div>
          </>
          );
}

export default Grading;