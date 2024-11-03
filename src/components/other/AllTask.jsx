import axios from "axios";
import { useEffect, useState } from "react";

const AllTask = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/employees");
        setEmployees(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="">
        {employees.map((elem) => {
          return (
            <div
              key={elem.id}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="flex flex-col text-lg font-medium w-1/5">
                {elem.firstName}
                <span className="text-sm text-slate-400">{elem.email}</span>
              </h2>
              <h3 className="text-lg font-medium w-1/5">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
