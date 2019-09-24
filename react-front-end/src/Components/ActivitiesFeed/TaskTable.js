import React from 'react';
import styled from 'styled-components';

const AddTaskTable = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	width: 80%;
	max-width: 400px;
	margin: 10px;
	border: 3px solid #00bc98;
	border-radius: 20px;
	padding: 10px;
	margin-top: 140px;
	h1 {
		font-size: 3rem;
		margin: 20px;
	}
	div {
		margin: 5px;
	}
	button {
		font-size: 1.8rem;
		color: white;
		border-radius: 10px;
		border: none;
		width: 90px;
		height: 35px;
		&:hover {
			cursor: pointer;
		}
	}
	button.cancel {
		background-color: #00bc98;
	}
	button.delete {
		background-color: #fb8570;
	}
	.footer {
		display: flex;
		flex-direction: row;
		justify-content:  space-between;
		align-items: center;
		padding: 30px 10px 10px;
		width: 90%;
	}
	.name {
		font-size 2rem;
		font-weight: bold;
	}
	.category {
		font-size 1.8rem;
	}
	.rating {
		font-size 1.6rem;
	}
	.time {
		font-size: 1.6rem;
	}
	
	.notes {
		font-size: 1.6rem;
	}
	
	.timestamps {
		font-size: 1.0rem;
		font-style: italic;
	}
`;

const TaskTable = props => (
  <table class="taskTable">
    <thead>
      <tr>
        <th>Category</th>
        <th>Task</th>
        <th>Time</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.length > 0 ? (
        props.tasks.map(task => (
          <tr class="taskTable1" key={task.id}>
            <td class="taskTable2">{task.category}</td>
            <td class="taskTable2">{task.name}</td>
            <td class="taskTable2">{task.rating}</td>
            <td class="taskTable2">{task.time}</td>
            <td class="taskTable2">{task.notes}</td>
            <td>
              <button
                onClick={() => props.deleteTask(task.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No Data</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default TaskTable;