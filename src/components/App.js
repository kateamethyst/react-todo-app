import React, { useReducer, useEffect } from 'react';
import '../App.css';
import Tasks from './Tasks';
import Modal from './Modal';
import {useCookies} from 'react-cookie';

const initialState = {
  tasks: []
}

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CLEAR_TASKS = 'CLEAR_TASKS';
const GET_TASK = 'GET_TASK';

const taskReducer = (state, action) => {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        tasks: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case CLEAR_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
};

const App = () => {
  const [cookies, setCookie] = useCookies(['tasks']);
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tasks } = state;

  useEffect(() => {
    setCookie('tasks', [
      {
        title: 'Go to school',
        id: Math.random()
      },
      {
        title: 'Go to supermarket',
        id: Math.random()
      }
    ]);
    dispatch({
      type: GET_TASK,
      payload: cookies.tasks
    });
  }, []);

  const add = taskValue => {
    setCookie('tasks', [...state.tasks, { title: taskValue, id: Math.random() }]);
    dispatch({
      type: ADD_TASK,
      payload: {
        title: taskValue,
        id: Math.random()
      }
    });
  };

  return (
    <div className="container">
      <div className="panel">
        <div className="panel-header">
          <button className="btn">New Todo</button>
        </div>
        <div className="panel-body">
          <div className="tasks">
            {
              tasks.map( (task, index) => (
                <Tasks key={`${index}-${task.title}`} task={task} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
