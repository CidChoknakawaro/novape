import { Routes, Route, Navigate } from 'react-router-dom'

import Splash from './pages/Splash'
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import SetPassword from './pages/SetPassword'
import Login from './pages/Login'
import Home from './pages/Home'
import FeatureNoVape from './pages/FeatureNoVape'
import FeatureNoVapeSchedule from './pages/FeatureNoVapeSchedule'
import FeatureNoVapeDetails from './pages/FeatureNoVapeDetails'
import FeatureNoVapeSuccess  from './pages/FeatureNoVapeSuccess' 
import FeatureJournal from './pages/FeatureJournal'
import FeatureJournalDetail from './pages/FeatureJournalDetail'
import FeatureSmartwatch from './pages/FeatureSmartwatch'
import ProfessionalHelp from './pages/ProfessionalHelp'
import ProfessionalChat from './pages/ProfessionalChat'
import AddonsJourney from './pages/AddonsJourney'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/feature/no-vape" element={<FeatureNoVape />} />
      <Route path="/feature/no-vape/schedule" element={<FeatureNoVapeSchedule />} />
      <Route path="/feature/no-vape/details"  element={<FeatureNoVapeDetails />} />
      <Route path="/feature/no-vape/success"  element={<FeatureNoVapeSuccess />} />
      <Route path="/feature/journal" element={<FeatureJournal />} />
      <Route path="/feature/journal/:id" element={<FeatureJournalDetail />} />
      <Route path="/feature/smartwatch" element={<FeatureSmartwatch />} />
      <Route path="/feature/professional" element={<ProfessionalHelp />} />
      <Route path="/feature/professional/chat/:id" element={<ProfessionalChat />} />
      <Route path="/addons/journey" element={<AddonsJourney />} />
      {/* catch‐all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
