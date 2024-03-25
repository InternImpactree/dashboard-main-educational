"use client";
import { AppBar, Button, Toolbar } from "@mui/material";
import React, { FC ,useEffect, useState} from "react";
// import sourceData from "../data/sourceData.json";
// import statusData from "../data/statusData.json";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';

const Training: FC = () => {
 const statusData= [
    { "label": "Source 1", 
       "value": 30 },
    { "label": "Source 2", 
      "value": 20 },
    { "label": "Source 3",
      "value": 15 },
    { "label": "Source 4",
      "value": 10 },
    { "label": "Source 5",
      "value": 8 },
    { "label": "Source 6", 
      "value": 17 }
  ]
  const locationData=[
    {
      "label": "Absent",
      "value": 80
    },
    {
      "label": "Present",
      "value": 20
    },

  ]

  const courseData=[
    {
      "label": "Absent",
      "value": 44
    },
    {
      "label": "Present",
      "value": 45
    },

  ]
  const batchData=[
    {
      "label": "Absent",
      "value": 32
    },
    {
      "label": "Present",
      "value": 66
    },

  ]

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
    <AppBar position="static" sx={{ bgcolor: '#3485ae', boxShadow: 'none'}}>
        <Toolbar>
          <Button component={Link} to="/mobilization"><p style={{color:"white",textTransform: "capitalize"}}>Mobilization</p></Button>
          <Button component={Link} to="/attendance"><p style={{color:"white",textTransform: "capitalize"}}>Attendance</p></Button>
          <Button component={Link} to="/grading"><p style={{color:"white",textTransform: "capitalize"}}>Grading</p></Button>
          <Button component={Link} to="/students"><p style={{color:"white",textTransform: "capitalize"}}>Student Details</p></Button>
          <Button component={Link} to="/training"><b style={{color:"black",textTransform: "capitalize"}}>Training</b></Button>
          
        </Toolbar>
      </AppBar>
      </div>

      <div className="dropdown-container-training">

      <div className="dropdown-wrapper-training">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Vertical' }, ...options1]}
      value={selectedOption1}
      onChange={handleChange1} />
    {/* {selectedOption1 && <p>{infoForOption1[selectedOption1]}</p>} */}
  </div>


  <div className="dropdown-wrapper-training">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Centre' }, ...options2]}
      value={selectedOption2}
      onChange={handleChange2} />
    {/* {selectedOption2 && <p>{infoForOption2[selectedOption2]}</p>} */}
  </div>

  <div className="dropdown-wrapper-training">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Course' }, ...options3]}
      value={selectedOption3}
      onChange={handleChange3} />
    {/* {selectedOption3 && <p>{infoForOption3[selectedOption3]}</p>} */}
  </div>

  <div className="dropdown-wrapper-training">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Batch' }, ...options4]}
      value={selectedOption4}
      onChange={handleChange4} />
    {/* {selectedOption4 && <p>{infoForOption4[selectedOption4]}</p>} */}
  </div>
  </div>

    <div>
      <main className="main-container-training">
        <div className="main-cards-training">
          <div className="card-training">
            <div className="card-inner-training">
              <h3>Center Average</h3>
            </div>
            <h3>75%</h3>
          </div>
          <div className="card-training">
            <div className="card-inner-training">
              <h3>Vertical Average</h3>
            </div>
            <h3>75%</h3>
          </div>
          <div className="card-training">
            <div className="card-inner-training">
              <h3>Course Average</h3>
            </div>
            <h3>75%</h3>
          </div>
          <div className="card-training">
            <div className="card-inner-training">
              <h3>Batch Average</h3>
            </div>
            <h3>75%</h3>
          </div>
        </div>
      </main>
      <div className="charts-training">
        <div className="dataCard customerCard-training">
          <Doughnut
            data={{
              labels: locationData.map((data: { label: string }) => data.label),
              datasets: [
                {
                  label: "Number",
                  data: locationData.map((data: { value: number }) => data.value),
                  backgroundColor: [
                   
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(151, 40, 145, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Attendance % Location wise",
                  font: {
                    size: 18,
                  },
                },
              },
            }}
          />
        </div>
        <div className="dataCard customerCard-training">
          <Doughnut
            data={{
              labels: courseData.map((data: { label: string }) => data.label),
              datasets: [
                {
                  label: "Number",
                  data: courseData.map((data: { value: number }) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(151, 40, 145, 0.8)",
                    "rgba(24, 214, 126, 0.98)",
                    "rgba(73, 0, 0, 0.87)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Attendance % Course wise",
                  font: {
                    size: 18,
                  },
                },
              },
            }}
          />
        </div>
        <div className="dataCard customerCard-training">
          <Doughnut
            data={{
              labels: batchData.map((data: { label: string }) => data.label),
              datasets: [
                {
                  label: "Number",
                  data: batchData.map((data: { value: number }) => data.value),
                  backgroundColor: [
                    
                
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(151, 40, 145, 0.8)",
                    "rgba(24, 214, 126, 0.98)",
                    "rgba(73, 0, 0, 0.87)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Attendance % Batch wise",
                  font: {
                    size: 18,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Training;