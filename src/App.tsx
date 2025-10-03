// App.tsx

import TarotGame from './pages/TarotGame';
import './App.css';

/**
 * 🎯 主要 App 元件
 *
 * 職責：
 * - 作為整個應用程式的容器
 * - 渲染塔羅遊戲頁面
 */
function App() {
  return (
    <div className="App">
      <TarotGame />
    </div>
  );
}

export default App;
