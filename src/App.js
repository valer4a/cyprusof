import { Routes, Route, Link, Navigate } from "react-router-dom";
import IndexPage from './components/pages/IndexPage';
import HistoryPage from './components/pages/History';
import ObjectsPage from './components/pages/Objects';
import PeoplesPage from './components/pages/Peoples';
import MediaPage from './components/pages/Media';
import ToursPage from './components/pages/Tours';
import Top10Page from './components/pages/Top10';
import UnknownPage from './components/pages/Unknown';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/:year" element={<HistoryPage />} />
        <Route path="/history/events/:id" element={<HistoryPage />} />
        <Route path="/objects" element={<ObjectsPage />} />
        <Route path="/peoples" element={<PeoplesPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/top10" element={<Top10Page />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </>
  );
}

export default App;
