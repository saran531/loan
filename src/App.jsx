import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

import HomePropertyLoans from './pages/loans/HomePropertyLoans'
import MortgageLAP from './pages/loans/MortgageLAP'
import BusinessMSMELoans from './pages/loans/BusinessMSMELoans'
import MachineryEquipmentFinance from './pages/loans/MachineryEquipmentFinance'
import WorkingCapitalFinance from './pages/loans/WorkingCapitalFinance'
import PersonalCarLoans from './pages/loans/PersonalCarLoans'
import EducationAgriFinance from './pages/loans/EducationAgriFinance'

import Insurance from './pages/insurance/Insurance'
import HealthInsurance from './pages/insurance/HealthInsurance'
import MotorInsurance from './pages/insurance/MotorInsurance'
import SMEBusinessInsurance from './pages/insurance/SMEBusinessInsurance'
import TravelInsurance from './pages/insurance/TravelInsurance'
import HomeInsurance from './pages/insurance/HomeInsurance'

import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import Disclaimer from './pages/legal/Disclaimer'

function NotFound() {
  return (
    <section className="page page-not-found">
      <div className="container">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Back to home</a>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Core pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />

          {/* Loan pages */}
          <Route path="/home-property-loans/" element={<HomePropertyLoans />} />
          <Route path="/mortgage-loan-against-property/" element={<MortgageLAP />} />
          <Route path="/business-msme-loans/" element={<BusinessMSMELoans />} />
          <Route path="/machinery-equipment-finance/" element={<MachineryEquipmentFinance />} />
          <Route path="/working-capital-finance/" element={<WorkingCapitalFinance />} />
          <Route path="/personal-car-loans/" element={<PersonalCarLoans />} />
          <Route path="/education-agri-finance/" element={<EducationAgriFinance />} />

          {/* Insurance pages */}
          <Route path="/insurance/" element={<Insurance />} />
          <Route path="/health-insurance-madurai/" element={<HealthInsurance />} />
          <Route path="/motor-insurance-madurai/" element={<MotorInsurance />} />
          <Route path="/sme-business-insurance/" element={<SMEBusinessInsurance />} />
          <Route path="/travel-insurance-madurai/" element={<TravelInsurance />} />
          <Route path="/home-insurance-madurai/" element={<HomeInsurance />} />

          {/* Resources */}
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/resources/" element={<Resources />} />
          <Route path="/contact/" element={<Contact />} />

          {/* Legal pages */}
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/disclaimer/" element={<Disclaimer />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
