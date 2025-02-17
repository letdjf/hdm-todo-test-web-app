/**
 * @todo YOU HAVE TO IMPLEMENT THE DELETE AND SAVE TASK ENDPOINT, A TASK CANNOT BE UPDATED IF THE TASK NAME DID NOT CHANGE, YOU'VE TO CONTROL THE BUTTON STATE ACCORDINGLY
 */
import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleFetchTasks = async () => {
    const response = await api.get("/tasks");
    console.log("données reçues :", response.data);
    setTasks(Array.isArray(response.data) ? response.data : []);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSave = async (updatedTask: Task) => {
    await api.patch(`/tasks/${updatedTask.id}`, updatedTask);
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  }

  const handleAdd = async () => {
    console.log("handleAdd a été appelé !");
    const newTask = { name: "nouvelle tache", description: "description ici" };
    const response = await fetch ("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    if (response.ok) {
      const createdTask = await response.json();
      console.log("tache créée :", createdTask);
      setTasks((prevTasks) => [... prevTasks, createdTask]);
    } else {
      console.error("erreur lors de l'ajout:", response.statusText);
    }
  };

  useEffect(() => {
    (async () => {
      handleFetchTasks();
    })();
  }, []);

  console.log("composant todopage rendu ! ");

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>

      <Box justifyContent="center" mt={5} flexDirection="column">
        {Array.isArray(tasks) && tasks.map((task) => (
          <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%">
            <TextField size="small" value={task.name} fullWidth sx={{ maxWidth: 350 }} />
            <Box>
              <IconButton color="success" disabled>
                <Check />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(task.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Button variant="outlined" onClick={() => {
            console.log("boutton cliqué");
            handleAdd();
          }}>
            Ajouter une tâche
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default TodoPage;
