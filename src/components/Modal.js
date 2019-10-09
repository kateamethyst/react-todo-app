import React, {useState} from 'react'

const Modal = (props) => {
  const [taskValue, setTaskValue] = useState("");

  const handleTaskInputChanges = (e) => {
    setTaskValue(e.target.value);
  }

  const resetInputField = () => {
    setTaskValue("");
  }

  const callAddTaskFunction = (e) => {
    e.preventDefault();
    props.add(taskValue);
    resetInputField();
  }

  return (
    <div className="modal">
        <div className="center">
        <form className="new_task">
          <input
            value={taskValue}
            onChange={handleTaskInputChanges}
            type="text"
            placeholder="Task"
          />
          <input onClick={callAddTaskFunction} type="submit" value="Save" />
        </form>
        </div>
    </div>
  )
}

export default Modal
