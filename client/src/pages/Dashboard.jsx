import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    navigate("/");
  };

  return (
    <div>
      <h1>Patient Dashboard</h1>

      <h2>
        Welcome {userInfo?.fullName}
      </h2>

      <button onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;