import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import PropertyAlerts from './components/PropertyAlerts';
import SavedProperties from './components/SavedProperties';
import Settings from './components/Settings';
import PropertyDetails from './components/PropertyDetails';
import KaktuPro from './components/KaktuPro';
import AlertDetails from './components/AlertDetails';

type Page = 'chat' | 'alerts' | 'saved' | 'settings' | 'property' | 'pro' | 'alert-details';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('chat');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [selectedAlertId, setSelectedAlertId] = useState<number | null>(null);

  const handlePropertyClick = (propertyId: number) => {
    setSelectedPropertyId(propertyId);
    setCurrentPage('property');
  };

  const handleBackToList = () => {
    setSelectedPropertyId(null);
    setCurrentPage('chat');
  };

  const handleAlertClick = (alertId: number) => {
    setSelectedAlertId(alertId);
    setCurrentPage('alert-details');
  };

  const handleProClick = () => {
    setCurrentPage('pro');
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar 
        onPageChange={setCurrentPage} 
        currentPage={currentPage} 
        onProClick={handleProClick}
      />
      {currentPage === 'chat' && <ChatInterface onPropertyClick={handlePropertyClick} />}
      {currentPage === 'alerts' && <PropertyAlerts onAlertClick={handleAlertClick} />}
      {currentPage === 'saved' && <SavedProperties onPropertyClick={handlePropertyClick} />}
      {currentPage === 'settings' && <Settings />}
      {currentPage === 'property' && selectedPropertyId && (
        <PropertyDetails propertyId={selectedPropertyId} onBack={handleBackToList} />
      )}
      {currentPage === 'pro' && <KaktuPro />}
      {currentPage === 'alert-details' && selectedAlertId && (
        <AlertDetails alertId={selectedAlertId} onBack={() => setCurrentPage('alerts')} />
      )}
    </div>
  );
}

export default App;