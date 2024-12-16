import React from 'react';

/* 
  キャンパスマップを表示するためのコンポーネント
 */

export default function CampusMap() {
  return (
    <div className="relative w-full md:h-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
      <img
        src="/Campusmap.png"
        alt="キャンパスマップ"
        className="w-full h-full object-cover"
      />
    </div>
  );
}