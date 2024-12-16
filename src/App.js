import React from 'react';
import { Clock, MapPin, BarChart2 } from 'lucide-react';
import CampusMap from './components/CampusMap';
import CongestionList from './components/CongestionList';
import CurrentTime from './components/CurrentTime';
import { CongestionProvider } from './components/CongestionProvider';
import LeastCrowdedFacility from './components/LeastCrowdedFacility';

function App() {
  return (
    <CongestionProvider>
      <main className="container mx-auto p-4 max-w-none">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">キャンパス混雑状況</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-1" />
              <CurrentTime />
            </div>
            <MapPin className="w-5 h-5" />
            <BarChart2 className="w-5 h-5" />
          </div>
        </header>

        <LeastCrowdedFacility />

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/5">
            <CampusMap />
          </div>
          <div className="md:w-2/5 md:h-[700px]">
            <h2 className="text-xl font-bold mb-2">リアルタイム混雑状況</h2>
            <CongestionList />
          </div>
        </div>
      </main>
    </CongestionProvider>
  );
}

export default App;

