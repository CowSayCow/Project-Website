import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

const locations = [
  { name: '2号館1階', subName: 'EAGLE TERRACE', congestion: 19, status: 'low' },
  { name: '2号館2階', subName: 'CHUGLE CAFE', congestion: 84, status: 'high' },
  { name: '19号館2階', subName: 'フードコート・リスタ', congestion: 55, status: 'medium' },
];

export default function CongestionList() {
  return (
    <div className="space-y-4">
      {locations.map((location) => (
        <div key={location.name} className="flex items-center space-x-2">
          <StatusIcon status={location.status} />
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{location.name}</p>
                <p className="text-sm text-gray-600">{location.subName}</p>
              </div>
              <span className="font-medium">{location.congestion}%</span>
            </div>
            <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getStatusColor(location.status)}`}
                style={{ width: `${location.congestion}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusIcon({ status }) {
  switch (status) {
    case 'low':
      return <Check className="w-5 h-5 text-green-500" />;
    case 'medium':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'high':
      return <X className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
}

function getStatusColor(status) {
  switch (status) {
    case 'low':
      return 'bg-blue-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'high':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}

