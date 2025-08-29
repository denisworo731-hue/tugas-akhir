import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Table } from "./components/Table";
// import Login from "./components/Login";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-auto">
          <Dashboard />
        </main>
        {/* <Login/> */}
      </div>
    </div>
  );
}
