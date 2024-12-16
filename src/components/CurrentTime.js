import React, { useState, useEffect } from 'react';

/*
  現在時刻を表示するためのコンポーネント
*/

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // 現在時刻を取得する関数
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentTime(formattedTime);
    };

    // 初回の時刻更新
    updateTime();

    // 1分ごとに時刻を更新
    const intervalId = setInterval(updateTime, 1000);

    // クリーンアップ時に interval をクリア
    return () => clearInterval(intervalId);
  }, []);

  return <span>{currentTime}</span>;
}

export default CurrentTime;
