import React, { PureComponent, useCallback, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart,
    Bar,
    PieChart, Pie, Sector,
} from "recharts";

// PieChart LineChart
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


// Data PieChart
const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const data3 = [
    {
        name: "Page A",
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    }
];


// Start PieChart
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};
// End PieChart

const Chart = () => {

    // Start PieChart
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
    // End PieChart



    return (
        <>
            <section className="pt-4">
                <div className="container">
                    <div>
                        <h3>Performa semester ini</h3>
                    </div>
                    <div className="card shadow">
                        <div className="card-body">
                            <PieChart width={500} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data2}
                                    cx={200}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <h3>Analisa hasil belajar tiap semester</h3>
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
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <h3>Analisa performa mahasiswa</h3>
                        </div>
                    </div>
                    <div className="card shadow h-100">
                        <div className="card-body pt-5">
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data3 }
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                            </ComposedChart>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chart