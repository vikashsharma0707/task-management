

// // // import { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import Table from "react-bootstrap/Table";
// // // import rightimg from "../img/right.png";
// // // import wrongimg from "../img/pending.jpg";
// // // import Button from "react-bootstrap/Button";
// // // import { message } from "antd";

// // // const UserReport = () => {
// // //   const [mydata, setMydata] = useState([]);

// // //   const loadData = async () => {
// // //     let api = "http://localhost:8000/admin/usertaskdisplay";
// // //     try {
// // //       const response = await axios.get(api);
// // //       setMydata(response.data || []); // Ensure response data is an array
// // //       console.log(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadData();
// // //   }, []);

// // //   const reassignTask = async (taskid) => {
// // //     let api = "http://localhost:8000/admin/reasigntask";
// // //     try {
// // //       const response = await axios.post(api, { taskid });
// // //       message.success(response.data.msg || "Task reassigned successfully!");
// // //       loadData();
// // //     } catch (error) {
// // //       console.error("Error reassigning task:", error);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <h1>Show User Report</h1>
// // //       <Table striped bordered hover style={{ fontSize: "12px" }}>
// // //         <thead>
// // //           <tr>
// // //             <th></th>
// // //             <th>#</th>
// // //             <th>Employee Name</th>
// // //             <th>Designation</th>
// // //             <th>Email</th>
// // //             <th>Task Title</th>
// // //             <th>Task Description</th>
// // //             <th>Assign Days</th>
// // //             <th>Task Status</th>
// // //             <th>Report</th>
// // //             <th></th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {mydata.length > 0 ? (
// // //             mydata.map((key, index) => (
// // //               <tr key={key._id}>
// // //                 <td>
// // //                   {key.empreport === "submited" ? (
// // //                     <img src={rightimg} width="40" height="40" alt="Submitted" />
// // //                   ) : (
// // //                     <img src={wrongimg} width="40" height="40" alt="Pending" />
// // //                   )}
// // //                 </td>
// // //                 <td>{index + 1}</td>
// // //                 <td>{key.empid?.empname || "N/A"}</td>
// // //                 <td>{key.empid?.designation || "N/A"}</td>
// // //                 <td>{key.empid?.email || "N/A"}</td>
// // //                 <td>{key.tasktitle || "N/A"}</td>
// // //                 <td>{key.taskdescription || "N/A"}</td>
// // //                 <td>{key.completiondays || "N/A"}</td>
// // //                 <td>{key.taskstatus || "N/A"}</td>
// // //                 <td>
// // //                   <span
// // //                     style={{
// // //                       color: key.empreport === "submited" ? "green" : "red",
// // //                       fontWeight: "bold",
// // //                     }}
// // //                   >
// // //                     {key.empreport || "Pending"}
// // //                   </span>
// // //                 </td>
// // //                 <td>
// // //                   <Button
// // //                     variant="primary"
// // //                     size="sm"
// // //                     onClick={() => reassignTask(key._id)}
// // //                     style={{ fontSize: "10px" }}
// // //                   >
// // //                     ReAssign
// // //                   </Button>
// // //                 </td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="11" className="text-center">
// // //                 No data available
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </Table>
// // //     </>
// // //   );
// // // };

// // // export default UserReport;


// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import Table from "react-bootstrap/Table";
// // import Button from "react-bootstrap/Button";
// // import { message } from "antd";
// // import rightimg from "../img/right.png";
// // import wrongimg from "../img/pending.jpg";
// // import "../css/user.css"; // Custom CSS

// // const UserReport = () => {
// //   const [mydata, setMydata] = useState([]);

// //   useEffect(() => {
// //     const loadData = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8000/admin/usertaskdisplay");
// //         setMydata(response.data || []);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };
// //     loadData();
// //   }, []);

// //   const reassignTask = async (taskid) => {
// //     try {
// //       const response = await axios.post("http://localhost:8000/admin/reasigntask", { taskid });
// //       message.success(response.data.msg || "Task reassigned successfully!");
// //       window.location.reload();
// //     } catch (error) {
// //       console.error("Error reassigning task:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <h1 className="text-center">Show User Report</h1>
// //       <div className="table-responsive">
// //         <Table striped bordered hover className="table-custom">
// //           <thead>
// //             <tr>
// //               <th>Status</th>
// //               <th>#</th>
// //               <th>Employee Name</th>
// //               <th>Designation</th>
// //               <th>Email</th>
// //               <th>Task Title</th>
// //               <th>Task Description</th>
// //               <th>Assign Days</th>
// //               <th>Task Status</th>
// //               <th>Report</th>
// //               <th>Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {mydata.length > 0 ? (
// //               mydata.map((key, index) => (
// //                 <tr key={key._id}>
// //                   <td>
// //                     <img
// //                       src={key.empreport === "submited" ? rightimg : wrongimg}
// //                       alt="Status"
// //                       className="status-icon"
// //                     />
// //                   </td>
// //                   <td>{index + 1}</td>
// //                   <td>{key.empid?.empname || "N/A"}</td>
// //                   <td>{key.empid?.designation || "N/A"}</td>
// //                   <td>{key.empid?.email || "N/A"}</td>
// //                   <td>{key.tasktitle || "N/A"}</td>
// //                   <td>{key.taskdescription || "N/A"}</td>
// //                   <td>{key.completiondays || "N/A"}</td>
// //                   <td>{key.taskstatus || "N/A"}</td>
// //                   <td className={key.empreport === "submited" ? "text-success" : "text-danger"}>
// //                     {key.empreport || "Pending"}
// //                   </td>
// //                   <td>
// //                     <Button variant="primary" size="sm" onClick={() => reassignTask(key._id)}>
// //                       REASSIGN
// //                     </Button>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="11" className="text-center">
// //                   No data available
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </Table>
// //       </div>
// //     </>
// //   );
// // };

// // export default UserReport;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from "react-bootstrap/Table";
// import rightimg from "../img/right.png";
// import wrongimg from "../img/pending.jpg";
// import Button from "react-bootstrap/Button";
// import { message } from "antd";

// const UserReport = () => {
//   const [mydata, setMydata] = useState([]);

//   const loadData = async () => {
//     let api = "http://localhost:8000/admin/usertaskdisplay";
//     try {
//       const response = await axios.get(api);
//       setMydata(response.data || []); // Ensure response data is an array
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const reassignTask = async (taskid) => {
//     let api = "http://localhost:8000/admin/reasigntask";
//     try {
//       const response = await axios.post(api, { taskid });
//       message.success(response.data.msg || "Task reassigned successfully!");
//       loadData();
//     } catch (error) {
//       console.error("Error reassigning task:", error);
//     }
//   };

//   return (
//     <>
//       <h1>Show User Report</h1>
//       <Table striped bordered hover style={{ fontSize: "12px" }}>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Designation</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Task Description</th>
//             <th>Assign Days</th>
//             <th>Task Status</th>
//             <th>Report</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {mydata.length > 0 ? (
//             mydata.map((key, index) => (
//               <tr key={key._id}>
//                 <td>
//                   {key.empreport === "submited" ? (
//                     <img src={rightimg} width="40" height="40" alt="Submitted" />
//                   ) : (
//                     <img src={wrongimg} width="40" height="40" alt="Pending" />
//                   )}
//                 </td>
//                 <td>{index + 1}</td>
//                 <td>{key.empid?.empname || "N/A"}</td>
//                 <td>{key.empid?.designation || "N/A"}</td>
//                 <td>{key.empid?.email || "N/A"}</td>
//                 <td>{key.tasktitle || "N/A"}</td>
//                 <td>{key.taskdescription || "N/A"}</td>
//                 <td>{key.completiondays || "N/A"}</td>
//                 <td>{key.taskstatus || "N/A"}</td>
//                 <td>
//                   <span
//                     style={{
//                       color: key.empreport === "submited" ? "green" : "red",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {key.empreport || "Pending"}
//                   </span>
//                 </td>
//                 <td>
//                   <Button
//                     variant="primary"
//                     size="sm"
//                     onClick={() => reassignTask(key._id)}
//                     style={{ fontSize: "10px" }}
//                   >
//                     ReAssign
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="11" className="text-center">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </>
//   );
// };

// export default UserReport;


import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { message } from "antd";
import rightimg from "../img/right.png";   // ✅ Task completed image
import wrongimg from "../img/pending.jpg"; // ❌ Pending image
import "../css/task.css"; // ✅ Custom CSS

const UserReport = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://task-management-24r6.onrender.com/admin/usertaskdisplay");
        setTasks(response.data || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const reassignTask = async (taskId) => {
    try {
      const response = await axios.post("https://task-management-24r6.onrender.com/admin/reasigntask", { taskId });
      message.success(response.data.msg || "Task reassigned successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error reassigning task:", error);
    }
  };

  return (
    <>
      <h2 className="text-center">User Task Report</h2>
      <div className="table-responsive">
        <Table striped bordered hover className="table-custom">
          <thead>
            <tr>
              <th>Status</th>
              <th>#</th>
              <th>Employee Name</th>
              <th>Task Title</th>
              <th>Description</th>
              <th>Duration (Days)</th>
              <th>Task Status</th>
              <th>Report</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={task._id}>
                  <td>
                    <img
                      src={task.empreport === "submited" ? rightimg : wrongimg}
                      alt="Status"
                      className="status-icon"
                      style={{width:"40px"}}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{task.empid?.name || "N/A"}</td>
                  <td>{task.title || "N/A"}</td>
                  <td>{task.description || "N/A"}</td>
                  <td>{task.duration || "N/A"}</td>
                  <td>{task.taskstatus}</td>
                  <td className={task.empreport === "submited" ? "text-success" : "text-danger"}>
                    {task.empreport}
                  </td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => reassignTask(task._id)}>
                      REASSIGN
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserReport;

