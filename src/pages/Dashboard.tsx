import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { LinearProgress, Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{ name: 'Project 1', progress: 50 }]; // Mock

function Dashboard() {
  const projects = useSelector((state: RootState) => state.projects.projects);
  return (
    <div>
      <Typography variant="h4">Project Health Overview</Typography>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography>Overall Progress: {projects[0]?.progress}%</Typography>
          <LinearProgress variant="determinate" value={projects[0]?.progress || 0} />
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>
      {/* Expand with Gantt, risks, etc. */}
    </div>
  );
}

export default Dashboard;
