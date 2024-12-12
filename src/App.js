import React from 'react';
import { Clock, MapPin, BarChart2 } from 'lucide-react';
import CampusMap from './components/CampusMap';
import CongestionList from './components/CongestionList';

function App() {
  return (
    <main className="container mx-auto p-4 max-w-none">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">キャンパス混雑状況</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-1" />
            <span>17:25</span>
          </div>
          <MapPin className="w-5 h-5" />
          <BarChart2 className="w-5 h-5" />
        </div>
      </header>

      <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-bold">現在最も空いている食堂は2号館1階 (EAGLE TERRACE) です</p>
        <p>混雑度: 19%</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <CampusMap />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-2">リアルタイム混雑状況</h2>
          <CongestionList />
        </div>
      </div>
    </main>
  );
}

export default App;

