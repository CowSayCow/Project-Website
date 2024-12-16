import React, { createContext, useState, useEffect, useContext } from 'react';

/*
  混雑状況をAPIで取得し、各コンポーネントに提供するプロバイダ
*/

// Contextの作成
const CongestionContext = createContext();

// プロバイダの作成
export const CongestionProvider = ({ children }) => {
  const [facilities, setFacilities] = useState([]);

  // データを取得する関数
  const fetchData = () => {
    fetch('https://project-centralserver.onrender.com/api/getJsonData')
      .then((response) => response.json())
      .then((data) => setFacilities(data.facilities || [])) // facilitiesが存在しない場合の対処
      .catch((error) => console.error('データ取得エラー:', error));
  };

  // コンポーネントがマウントされたときの処理
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000); // 30秒ごとにデータを再取得
    return () => clearInterval(intervalId); // アンマウント時にクリーンアップ
  }, []);

  return (
    <CongestionContext.Provider value={{ facilities }}>
      {children}
    </CongestionContext.Provider>
  );
};

// データを利用するためのカスタムフック
export const useCongestion = () => {
  return useContext(CongestionContext);
};
