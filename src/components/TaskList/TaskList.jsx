import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskData = await axios.get(
          "https://ems-back-or45.onrender.com/tasks",
          {
            params: { id: data.id },
          },
        );
        setTasks(taskData.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [data.id]);

  console.log(tasks);

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={elem.id} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={elem.id} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={elem.id} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={elem.id} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
