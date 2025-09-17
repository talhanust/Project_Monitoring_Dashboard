import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  projectId: string;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  // Add more from guide
}

const initialState: { tasks: Task[] } = {
  tasks: [
    { id: '1', projectId: '1', title: 'Sample Task', status: 'todo' },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    // Add update/delete
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
