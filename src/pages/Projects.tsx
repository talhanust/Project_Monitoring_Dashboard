import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addProject } from '../store/slices/projectSlice';
import { TextField, Button, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(addProject({ ...data, id: Date.now().toString(), status: 'active' as const, progress: 0 }));
    reset();
  };

  return (
    <div>
      <Typography variant="h4">Projects</Typography>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('name')} label="Name" fullWidth sx={{ mb: 2 }} />
            <TextField {...register('description')} label="Description" fullWidth sx={{ mb: 2 }} />
            <Button type="submit" variant="contained">Add Project</Button>
          </form>
        </CardContent>
      </Card>
      <List sx={{ mt: 2 }}>
        {projects.map((project) => (
          <ListItem key={project.id}>
            <ListItemText primary={project.name} secondary={project.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Projects;
