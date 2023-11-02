import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [writerName, setWriterName] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [assignedTasks, setAssignedTasks] = useState([]); // Define state for assigned tasks
  const [completedTasks, setCompletedTasks] = useState([]); // Define state for completed tasks

  const loadChatMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get/chatMessages');
      setChatMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAssignedTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get/assignedTasks');
      setAssignedTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadCompletedTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get/completedTasks');
      setCompletedTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChatMessageChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleWriterNameChange = (event) => {
    setWriterName(event.target.value);
  };

  const handleChatSubmit = async () => {
    const newChatMessage = `${writerName}: ${chatMessage}`;

    try {
      await axios.post('http://localhost:5000/api/chatMessages', { message: newChatMessage }, { headers: { 'Content-Type': 'application/json' } });
      loadChatMessages();
      setChatMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAssignedToChange = (event) => {
    setAssignedTo(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTaskSubmit = async () => {
    const dateParts = dueDate.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    const formattedDueDate = new Date(year, month - 1, day).toISOString().split('T')[0];

    const newTask = {
      task_name: taskName,
      assigned_to: assignedTo,
      due_date: formattedDueDate,
      description,
    };

    try {
      await axios.post('http://localhost:5000/api/tasks', newTask, {
        headers: { 'Content-Type': 'application/json' },
      });
      loadTasks();
      setTaskName('');
      setDueDate('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadChatMessages();
    loadTasks();
    loadAssignedTasks(); // Load assigned tasks
    loadCompletedTasks(); // Load completed tasks
  }, []);

  return (
    <div className="task-management">
      <div className="left-section">
        <h1>
          <center>[Project Management Tool]</center>

        </h1>
        <div className="task-list">
          <h3>My Tasks</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <div className="task-info">
                  <h4>{task.taskName}</h4>
                  <p className="task-due-date">Due on: {task.due_date}</p>
                  <p className="task-assignee">Assigned to: {task.assigned_to}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h2>Task Management</h2>
        <div className="create-task">
          <form id="createTaskForm" onSubmit={handleTaskSubmit}>
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" id="taskName" name="task_name" value={taskName} onChange={handleTaskNameChange} />
            <br />
            <label htmlFor="assignedTo">Assign By:</label>
            <select id="assignedTo" name="assigned_to" value={assignedTo} onChange={handleAssignedToChange}>
              <option value="Ajit">Ajit</option>
              <option value="Jaswanth">Jaswanth</option>
              <option value="Rajesh">Rajesh</option>
              <option value="Santhosh">Santhosh</option>
              <option value="Vardhan">Vardhan</option>
            </select>
            <br />
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" name="due_date" id="dueDate" value={dueDate} onChange={handleDueDateChange} />
            <br />
            <label htmlFor="description">Description:</label>
            <br />
            <textarea name="description" id="description" value={description} onChange={handleDescriptionChange}></textarea>
            <br />
            <input type="submit" value="Create Task" />
          </form>
        </div>
        <div className="task-list">
          <h3>Assigned Tasks</h3>
          <ul>
            {assignedTasks.map((task, index) => (
              <li key={index}>
                <div className="task-info">
                  <h4>{task.taskName}</h4>
                  <p className="task-due-date">Due on: {task.due_date}</p>
                  <p className="task-assignee">Assigned to: {task.assigned_to}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="completed-task-list">
          <h3>Completed Tasks</h3>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                <div className="task-info">
                  <h4>{task.taskName}</h4>
                  <p className="task-due-date">Due on: {task.due_date}</p>
                  <p className="task-assignee">Assigned to: {task.assigned_to}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-section">
        <h2>Chat</h2>
        <div className="chat-messages">
          {chatMessages.map((message, index) => (
            <div key={index} className="chat-message">
              <strong>{message.sender_name}:</strong> {message.message_text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <select id="writerName" value={writerName} onChange={handleWriterNameChange}>
            <option value="">Select Your Name</option>
            <option value="Ajit">Ajit</option>
            <option value="Jaswanth">Jaswanth</option>
            <option value="Rajesh">Rajesh</option>
            <option value="Santhosh">Santhosh</option>
            <option value="Vardhan">Vardhan</option>
          </select>
          <input
            type="text"
            id="chatMessage"
            placeholder="Type your message..."
            value={chatMessage}
            onChange={handleChatMessageChange}
          />
          <button onClick={handleChatSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
