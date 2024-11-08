import { useState } from "react";
import ChatInterface from "./components/ChatInterface";
import PropertyAlerts from "./components/PropertyAlerts";
import SavedProperties from "./components/SavedProperties";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

type Page = "chat" | "alerts" | "saved" | "settings";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("chat");

  return (
    <div className="flex h-screen bg-white">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      {currentPage === "chat" && <ChatInterface />}
      {currentPage === "alerts" && <PropertyAlerts />}
      {currentPage === "saved" && <SavedProperties />}
      {currentPage === "settings" && <Settings />}
    </div>
  );
}

export default App;
