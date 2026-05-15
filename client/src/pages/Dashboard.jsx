import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold">
        Welcome {userInfo?.fullName}
      </h1>

      <p className="mt-2 text-gray-600">
        Patient Dashboard Overview
      </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div className="bg-white p-4 rounded-xl shadow">
          Upcoming Appointments
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          Medical Records
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          Notifications
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;