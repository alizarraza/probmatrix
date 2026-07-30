import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Solutions from './pages/Solutions'
import Articles from './pages/insights/Articles'
import IFRS9Guides from './pages/insights/IFRS9Guides'
import WhitePapers from './pages/insights/WhitePapers'
import CaseStudies from './pages/insights/CaseStudies'
import IfrsAddin from './pages/solutions/Ifrsaddin'
import CredX from './pages/solutions/Credx'
import ArticleDetail from './pages/insights/Articledetail'
import WhitePaperDetail from './pages/insights/Whitepaperdetail'
import Partnership from './pages/Partnership'
import Certification from './pages/Certification'
import RefundPolicy from './pages/RefundPolicyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/insights/articles" element={<Articles />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/articles" element={<Articles />} />
          <Route path="/insights/guides" element={<IFRS9Guides />} />
          <Route path="/insights/white-papers" element={<WhitePapers />} />
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path='/solutions/ifrsaddin' element={<IfrsAddin />} />
          <Route path="/solutions/credX" element={<CredX />} />
          <Route path="/partnership" element={< Partnership />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/insights/articles/:slug" element={<ArticleDetail />} />
          <Route path="/insights/white-papers/:slug" element={<WhitePaperDetail />} />
          <Route path="/refund-policy" element={<RefundPolicy/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
