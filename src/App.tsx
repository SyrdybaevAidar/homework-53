import { useState } from 'react'
import { TaskModel } from './Task';
import { Task } from './Task';
import './App.css'

 const App = () => {
  const [tasks, setTasks] = useState([
    new TaskModel("Сделать уборку"),
    new TaskModel("Прогулка"),
    new TaskModel("Работа"),
    new TaskModel("Тренировка")
  ]);

  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    setInputText(event.currentTarget.value);
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const taskName = e.currentTarget.querySelector("input")?.value;
    if(taskName){
      const task = new TaskModel(taskName);
      const copyTasks = [...tasks];
      copyTasks.push(task);
      setTasks(copyTasks);
      setInputText("");
    }
  };

  const removeAction = (id: string) => {
    const copyTasks = tasks.filter(it => it.Id != id);
    setTasks(copyTasks);
  };

  const taskComponents = tasks.map(item => 
    (<Task Task={item} RemoveAction={() => removeAction(item.Id)}></Task>)  
  );
  return (
    <>
    <form action="post" onSubmit={e => addTask(e)} onChange={e => handleChange(e)}>
      <input value={inputText}></input>
      <button type='submit'>add task</button>
    </form>
    <div  className='tasks'>
      {taskComponents}
    </div>
    </>
  )
};

export default App
