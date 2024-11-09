import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import PropertyAlerts from './components/PropertyAlerts';
import SavedProperties from './components/SavedProperties';
import Settings from './components/Settings';
import PropertyDetails from './components/PropertyDetails';

type Page = 'chat' | 'alerts' | 'saved' | 'settings' | 'property';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('chat');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const handlePropertyClick = (propertyId: number) => {
    setSelectedPropertyId(propertyId);
    setCurrentPage('property');
  };

  const handleBackToList = () => {
    setSelectedPropertyId(null);
    setCurrentPage('chat');
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'chat' && <ChatInterface onPropertyClick={handlePropertyClick} />}
      {currentPage === 'alerts' && <PropertyAlerts />}
      {currentPage === 'saved' && <SavedProperties onPropertyClick={handlePropertyClick} />}
      {currentPage === 'settings' && <Settings />}
      {currentPage === 'property' && selectedPropertyId && (
        <PropertyDetails propertyId={selectedPropertyId} onBack={handleBackToList} />
      )}
    </div>
  );
}

export default App;