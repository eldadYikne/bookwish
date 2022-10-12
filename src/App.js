import { Route, Routes } from "react-router-dom/dist";
import { AppHeader } from "./pages/app-header";
import { BookApp } from "./pages/book-app";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
<Route path="/" element={<BookApp/>} />

      </Routes>
    </div>
  );
}

export default App;
