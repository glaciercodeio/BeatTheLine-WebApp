'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceLineChartMonthly = () => {
    const labels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const winnings = [
        121798, 100644, 133788, 101908, 68838, 110568, 55560, 55220, 135544, 91544, 277600, 124000
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Winnings ($)',
                data: winnings,
                borderColor: '#72D53C',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                borderWidth: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#FFFFFF',
                },
            },
            title: {
                display: false,
                text: '',
                color: '#FFFFFF',
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#FFFFFF',
                },
                grid: {
                    color: '',
                },
            },
            y: {
                ticks: {
                    color: '#FFFFFF',
                },
                grid: {
                    color: '',
                },
            },
        },
    };

    return (
        <div style={{ backgroundColor: '#1E1E1E', padding: '20px', borderRadius: '8px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default PerformanceLineChartMonthly;
