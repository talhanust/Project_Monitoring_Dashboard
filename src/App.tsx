import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, Container } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Notifications from './pages/Notifications';

const theme = createTheme({
  palette: { mode: 'light' }, // Toggle for dark mode
});

const drawerWidth = 240;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
              <Typography variant="h6" noWrap>Project Monitoring App</Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0 }}>
            <Toolbar />
            <List>
              <ListItem button component="a" href="/">
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button component="a" href="/projects">
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button component="a" href="/tasks">
                <ListItemText primary="Tasks" />
              </ListItem>
              <ListItem button component="a" href="/notifications">
                <ListItemText primary="Notifications" />
              </ListItem>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Container>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
