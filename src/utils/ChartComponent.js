import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Replace this data with your own data
const dataset1Data = [300, 450, 600, 200, 800, 350, 700];
const dataset2Data = [500, 250, 750, 400, 300, 900, 150];

export const data = {
    labels,
    datasets: [
        // {
        //     label: 'Dataset 1',
        //     data: dataset1Data,
        //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // },
        {
            label: 'Dataset 2',
            data: dataset2Data,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            barPercentage: 0.2,
        },
    ],
};

export function ChartComponent() {
    return (
        <div className="chart_component">
            <Bar options={options} data={data} />
        </div>
    );
};