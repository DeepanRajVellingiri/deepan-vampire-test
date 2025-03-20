import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PermissionRequestApp } from './components/Permission/PermissionRequestApp';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AdminComponent } from './components/Admin/AdminComponent';
import { RequestProvider } from './context/RequestContext';
import { PermissionAIProvider } from './components/AI/PermissionAIProvider';
import { FeaturesTab } from './components/Features/FeaturesTab';
import { TimelineTab } from './components/Timeline/TimelineTab';
import { RequirementsComponent } from './components/Requirements';
import { 
  HelpContent, 
  UserJourney, 
  UserGuide, 
  AdminGuide 
} from './components/Help';

function App() {
  return (
    <RequestProvider>
      <PermissionAIProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Navigation />
            <Routes>
              <Route path="/" element={<PermissionRequestApp />} />
              <Route path="/help" element={<HelpContent />} />
              <Route path="/help/journey" element={<UserJourney />} />
              <Route path="/help/user-guide" element={<UserGuide />} />
              <Route path="/help/admin-guide" element={<AdminGuide />} />
              <Route path="/admin" element={<AdminComponent />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/features" element={<FeaturesTab />} />
              <Route path="/timeline" element={<TimelineTab />} />
              <Route path="/requirements" element={<RequirementsComponent />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </PermissionAIProvider>
    </RequestProvider>
  );
}

export default App;