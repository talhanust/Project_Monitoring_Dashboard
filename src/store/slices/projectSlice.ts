import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  progress: number;
  // Add more from guide
}

const initialState: { projects: Project[] } = {
  projects: [
    { id: '1', name: 'Sample Project', description: 'Demo project', status: 'active', progress: 50 },
  ],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    // Add update/delete
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
