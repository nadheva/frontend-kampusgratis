import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Semester 1",
        semester: 2400,
        amt: 2400
    },
    {
        name: "Semester 2",
        semester: 1398,
        amt: 2210
    },
    {
        name: "Semester 3",
        semester: 9800,
        amt: 2290
    },
    {
        name: "Semester 4",
        semester: 3908,
        amt: 2000
    },
    {
        name: "Semester 5",
        semester: 4800,
        amt: 2181
    },
    {
        name: "Semester 6",
        semester: 3800,
        amt: 2500
    },
    {
        name: "Semester 7",
        semester: 4300,
        amt: 2100
    }
];

const Chart = () => {
    return (
        <section className="pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <h2>Analisis Pembelajaran</h2>
                    </div>
                </div>
                <div className="card shadow h-100">
                    <div className="card-body pt-5">
                        <ResponsiveContainer aspect={2.3}>
                            <LineChart
                                width={1300} 
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="semester"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chart