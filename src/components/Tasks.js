import React from 'react';

const Tasks = ({task}) => {
  return (
    <div className="task">
      <input type="checkbox" className="checkbox" />
      <p>{task.title}</p>
      <button className="close">
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </div>
  )
}

export default Tasks
