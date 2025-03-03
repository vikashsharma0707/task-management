// const Header=()=>{
//     return(
//         <>
//         <center>
//         <h3 id="color">Task ManageMent System</h3>
//         </center>
//         </>
//     )
// }
// export default Header;



const Header = () => {
    return (
      <>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "#4ca1af",
            color: "white",
            textAlign: "center",
            padding: "15px",
            fontSize: "20px",
            fontWeight: "bold",
            width: "100%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Task Management System
        </div>
      </>
    );
  };
  
  export default Header;
  