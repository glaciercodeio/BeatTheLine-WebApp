'use client';

import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PerformanceChart() {
    const chartContainerRef = useRef(null);

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
                backgroundColor: 'rgba(114, 213, 60, 0.4)',
                tension: 0.1,
                borderWidth: 5,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
                    color: '#000000',
                    font: {
                        family: "'montserrat', sans-serif", 
                        size: 20, 
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    display: true
                },
            },
            y: {
                min: 0,
                ticks: {
                    color: '#000000',
                    stepSize: 50000,
                    font: {
                        family: "'montserrat', sans-serif", 
                        size: 14, 
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    display: true
                },
            },
        },
    };

    useEffect(() => {
        const resizeHandler = () => {
            if (chartContainerRef.current) {
                chartContainerRef.current.style.width = '100%';
            }
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <div ref={chartContainerRef} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', height: '500px', width: '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
};
