import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import PropertyAlerts from './components/PropertyAlerts';
import SavedProperties from './components/SavedProperties';

type Page = 'chat' | 'alerts' | 'saved';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('chat');

  return (
    <div className="flex h-screen bg-white">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'chat' && <ChatInterface />}
      {currentPage === 'alerts' && <PropertyAlerts />}
      {currentPage === 'saved' && <SavedProperties />}
    </div>
  );
}

export default App;