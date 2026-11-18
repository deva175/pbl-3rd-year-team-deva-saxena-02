import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './components/Layouts';
import PublicLayout from './components/Layouts';
import ProtectedRoute from './components/ProtectedRoute';
import ComplaintDetail from './pages/ComplaintDetail';
import { Forbidden, NotFound } from './pages/InfoPages';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminComplaints from './pages/admin/Complaints';
import AdminDashboard from './pages/admin/Dashboard';
import AllocationsPage from './pages/admin/Allocations';
import DepartmentsPage from './pages/admin/Departments';
import QueuePage from './pages/admin/Queue';
import ReportsPage from './pages/admin/Reports';
import ResourcesPage from './pages/admin/Resources';
import OsConcepts from './pages/admin/OsConcepts';
import DbmsConcepts from './pages/admin/DbmsConcepts';
import CitizenDashboard from './pages/citizen/Dashboard';
import MyComplaints from './pages/citizen/MyComplaints';
import Profile from './pages/citizen/Profile';
import SubmitComplaint from './pages/citizen/SubmitComplaint';
import TrackStatus from './pages/citizen/TrackStatus.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />

      </Route>

      <Route element={<ProtectedRoute role="CITIZEN" />}>
        <Route element={<DashboardLayout />}>
          <Route path="/citizen" element={<CitizenDashboard />} />
          <Route path="/citizen/complaints/new" element={<SubmitComplaint />} />
          <Route path="/citizen/complaints" element={<MyComplaints />} />
          <Route path="/citizen/complaints/:id" element={<ComplaintDetail />} />
          <Route path="/citizen/profile" element={<Profile />} />
          <Route path="/citizen/track" element={<TrackStatus />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute role="ADMIN" />}>
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/queue" element={<QueuePage />} />
          <Route path="/admin/os" element={<OsConcepts />} />
          <Route path="/admin/dbms" element={<DbmsConcepts />} />
          <Route path="/admin/complaints" element={<AdminComplaints />} />
          <Route path="/admin/complaints/:id" element={<ComplaintDetail />} />
          <Route path="/admin/resources" element={<ResourcesPage />} />
          <Route path="/admin/departments" element={<DepartmentsPage />} />
          <Route path="/admin/allocations" element={<AllocationsPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
        </Route>
      </Route>

      <Route path="/dashboard" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
