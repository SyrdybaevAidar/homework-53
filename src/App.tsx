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

  const removeAction = (id: string) => {
    const copyTasks = tasks.filter(it => it.Id != id);
    setTasks(copyTasks);
  };

  const taskComponents = tasks.map(item => 
    (<Task Task={item} RemoveAction={() => removeAction(item.Id)}></Task>)  
  );
  return (
    <>
      {taskComponents}
    </>
  )
};

export default App
