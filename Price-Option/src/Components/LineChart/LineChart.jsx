import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const LineChart = () => {
    const studentData = [
        { name: 'Student 1', math: 85, physics: 90, english: 78 },
        { name: 'Student 2', math: 75, physics: 88, english: 92 },
        { name: 'Student 3', math: 92, physics: 79, english: 87 },
        { name: 'Student 4', math: 68, physics: 70, english: 65 },
        { name: 'Student 5', math: 78, physics: 82, english: 73 },
        { name: 'Student 6', math: 91, physics: 84, english: 89 },
        { name: 'Student 7', math: 83, physics: 76, english: 72 },
        { name: 'Student 8', math: 77, physics: 91, english: 80 },
        { name: 'Student 9', math: 89, physics: 72, english: 78 },
        { name: 'Student 10', math: 70, physics: 68, english: 75 },
      ];

      
      
    return (
        <div className='flex flex-col lg:flex-row'>
            <LChart width={600} height={400} data={studentData} margin={{top: 5, right:20, bottom:5, left:0}}   >
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="physics" stroke="red" />
                <Line type="monotone" dataKey="english" stroke="gold" />
                <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>  
            </LChart>
            <BarChart width={900} height={400} data={studentData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar dataKey="math" barSize={30} fill="#8884d8"/>
                <Bar dataKey="physics" barSize={30} fill="gold"/>
                <Bar dataKey="english" barSize={30} fill="red"/>
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc'}}></Tooltip>
            </BarChart>
            
        </div>
    );
};

export default LineChart;