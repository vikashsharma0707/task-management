


import React, { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [loading, setLoading] = useState(false); // Prevent multiple clicks
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!userid || !password || !usertype) {
      message.warning("Please fill all fields!");
      return;
    }

    setLoading(true);
    let apiUrl = "";
    let storageKeys = {};

    if (usertype === "admin") {
      apiUrl = "https://task-management-24r6.onrender.com/admin/admindata";
      storageKeys = { name: "adminName", id: "userID" };
    } else if (usertype === "user") {
      apiUrl = "https://task-management-24r6.onrender.com/user/userlogin";
      storageKeys = { name: "username", id: "userid", email: "useremail" };
    } else {
      message.error("Invalid user type!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(apiUrl, { userid, password });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem(storageKeys.name, data.username || data.name);
        localStorage.setItem(storageKeys.id, data.userid || data._id);
        if (storageKeys.email) localStorage.setItem(storageKeys.email, data.email);

        message.success(`${usertype === "admin" ? "Admin" : "User"} Login Successful!`);
        navigate(usertype === "admin" ? "/dashboard" : "/userdashboard");
      }
    } catch (error) {
      message.error(error.response?.data?.msg || "Login failed! Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
          border: "1px solid #4ca1af",
        }}
      >
        <h2 className="text-center mb-2">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="fw-bold">User ID :admin12345</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type your User ID"
                value={userid}
                onChange={(e) => setUserId(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="fw-bold">Password :12345 </Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Login As:</Form.Label>
            <Form.Select value={usertype} onChange={(e) => setUsertype(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="primary"
            className="w-100"
            type="button"
            disabled={loading}
            style={{
              background: "linear-gradient(to right, #8e44ad, #3498db)",
              border: "none",
            }}
            onClick={handleSubmit}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Home;
