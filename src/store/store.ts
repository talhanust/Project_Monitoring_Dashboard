import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './slices/projectSlice'; // We'll create this next
import taskSlice from './slices/taskSlice'; // We'll create this next

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    tasks: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
