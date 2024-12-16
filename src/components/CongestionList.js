import React from 'react';
import { useCongestion } from './CongestionProvider';
import { Check, X, AlertTriangle } from 'lucide-react';

/*
  プログレスバーを用いたリアルタイム状況表示を行うコンポーネント
*/

export default function CongestionList() {
  const { facilities } = useCongestion(); // 施設データを取得

  const getCongestionPercentage = (currentCount, maxCapacity) => {
    return Math.round((currentCount / maxCapacity) * 100); // 混雑度のパーセンテージ計算
  };

  const getStatusColor = (congestionPercentage) => {
    if (congestionPercentage < 40) return 'bg-blue-500';    // 混雑度低
    if (congestionPercentage < 80) return 'bg-yellow-500';  // 混雑度中
    return 'bg-red-500';                                    // 混雑度高
  };

  const getStatusIcon = (congestionPercentage) => {
    if (congestionPercentage < 40) return <Check className="w-5 h-5 text-green-500" />;
    if (congestionPercentage < 80) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <X className="w-5 h-5 text-red-500" />;
  };

  if (facilities.length === 0) {
    return <p>データを読み込み中...</p>; // データがまだない場合
  }

  return (
    <div className="space-y-4">
      {facilities.map((facility) => {
        const congestionPercentage = getCongestionPercentage(facility.current_count, facility.max_capacity);

        return (
          <div key={facility.id} className="flex items-center space-x-2">
            {getStatusIcon(congestionPercentage)}
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{facility.name}</p>
                  <p className="text-sm text-gray-600">{facility.sub_name}</p>
                </div>
                <span className="font-medium">{congestionPercentage}%</span>
              </div>
              <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getStatusColor(congestionPercentage)}`}
                  style={{ width: `${congestionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}