import React from 'react';
import { useCongestion } from './CongestionProvider';

/*
  混雑していない施設を表示するコンポーネント、CongestionProviderを利用して情報を取得して比較。
*/

export default function LeastCrowdedFacility() {
  const { facilities } = useCongestion();

  // 最も空いている施設を取得
  const leastCrowdedFacility = facilities.reduce((least, current) => {
    const leastCongestion = least.current_count / least.max_capacity;
    const currentCongestion = current.current_count / current.max_capacity;
    return currentCongestion < leastCongestion ? current : least;
  }, facilities[0]);

  // 施設がない場合の処理
  if (!leastCrowdedFacility) {
    return (
      <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mb-4">
        <p className="font-bold">現在利用可能な施設情報がありません</p>
      </div>
    );
  }

  const congestionPercentage = Math.round(
    (leastCrowdedFacility.current_count / leastCrowdedFacility.max_capacity) * 100
  );

  return (
    <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
      <p className="font-bold">
        現在最も空いている施設は {leastCrowdedFacility.name} です
      </p>
      <p>混雑度: {congestionPercentage}%</p>
    </div>
  );
}
