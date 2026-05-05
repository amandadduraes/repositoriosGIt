import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import RepositoryPage from "./pages/RepositoryPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route
          path="/users/:username/repos/:repoName"
          element={<RepositoryPage />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
