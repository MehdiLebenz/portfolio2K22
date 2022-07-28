/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import {
  Bar,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
} from 'chart.js';
import data from './dataBar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
);

function Courbe() {
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <div
      id="stats"
      style={{
        width: '80%',
        height: '80%',
      }}
    >
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">Projects managed  </Text>
      <SimpleGrid columns={[2, null, 2]} spacing="40px">
        <Box>
          <Bar
            data={data}
            options={options}
          />
        </Box>
        <Box>
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </SimpleGrid>
    </div>
  );
}
export default Courbe;
