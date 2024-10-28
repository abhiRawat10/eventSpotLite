import React, { useState} from 'react';
import './styles/App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailModal';
import events from './data/mockData';

const App = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedEvent, setSelectedEvent] = useState(null);



   const filteredEvents = searchTerm?
   events.filter(event =>
     event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     event.location.toLowerCase().includes(searchTerm.toLowerCase())
   ):events;

   return (
     <div className="App">
       <Header />
       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
       <div className="events-list">
         {filteredEvents.map(event => (
           <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
         ))}
       </div>
       <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
     </div>
   );
};

export default App;
