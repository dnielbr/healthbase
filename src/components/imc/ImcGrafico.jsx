import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const ImcGrafico = ({ dados, classificacoes, categoria }) => {
  const chartData = {
    labels: classificacoes.map((c) => c.faixa),
    datasets: [
      {
        label: "IMC",
        data: classificacoes.map((c) =>
          dados.imc >= c.min && dados.imc <= c.max
            ? dados.imc.toFixed(2)
            : c.max
        ),
        backgroundColor: classificacoes.map((c) =>
          categoria && c.faixa === categoria.faixa ? c.cor : "#DCEAE8"
        ),
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0077B6",
        callbacks: { label: (context) => `IMC: ${context.raw}` },
      },
    },
    scales: {
      x: { beginAtZero: true, max: 45, grid: { display: false } },
      y: { grid: { display: false } },
    },
  };

  return (
    <div className="chart-container mt-4">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ImcGrafico;
