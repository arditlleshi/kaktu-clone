import React, { useState, useRef, useEffect } from 'react';
import { Send, Image } from 'lucide-react';
import PropertyMessage from './PropertyMessage';
import PropertySkeleton from './PropertySkeleton';
import { Property } from '../types';

const initialProperties: Property[] = [
  {
    id: 1,
    price: 715.00,
    address: "Elm St, Othertown",
    rooms: 6,
    baths: 2,
    sqft: 53.08,
    agency: "MAIN AGENCY",
    timestamp: "1 week ago",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format",
    viewed: true,
    coordinates: [41.3275, 19.8187]
  },
  {
    id: 2,
    price: 82500.00,
    address: "Oak Avenue",
    rooms: 4,
    baths: 1,
    sqft: 47,
    agency: "MERRJEP",
    timestamp: "2 days ago",
    coordinates: [41.3275, 19.8187]
  }
];

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  properties?: Property[];
  loading?: boolean;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: 'Hello! I can help you find the perfect property. What are you looking for?',
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
    };

    // Add loading message
    const loadingMessage: Message = {
      id: messages.length + 2,
      type: 'assistant',
      content: 'Searching for properties...',
      loading: true,
    };

    setMessages([...messages, userMessage, loadingMessage]);
    setInput('');

    // Simulate API delay
    setTimeout(() => {
      setMessages(prev => {
        const newMessages = [...prev];
        // Replace loading message with actual response
        newMessages[newMessages.length - 1] = {
          id: messages.length + 2,
          type: 'assistant',
          content: 'Based on your request, I found these properties that might interest you:',
          properties: initialProperties,
        };
        return newMessages;
      });
    }, 5000);
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto pt-6 pb-24">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`px-4 py-6 ${
                message.type === 'assistant' ? 'bg-gray-50' : 'bg-white'
              }`}
            >
                  <div ref={messagesEndRef} />
              
              <div className="max-w-3xl mx-auto flex space-x-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'assistant' ? 'bg-coral-500 text-white' : 'bg-gray-300'
                }`}>
                  {message.type === 'assistant' ? 'K' : 'U'}
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-gray-800">{message.content}</p>
                  {message.loading ? (
                    <div className="grid gap-4">
                      <PropertySkeleton />
                      <PropertySkeleton />
                      <PropertySkeleton />
                      <PropertySkeleton />
                    </div>
                  ) : (
                    message.properties && (
                      <div className="grid gap-4">
                        {message.properties.map((property) => (
                          <PropertyMessage key={property.id} property={property} />
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-64 right-0 bg-white border-t">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe the property you're looking for..."
              className="w-full p-4 pr-24 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button type="button" className="p-2 text-gray-400 hover:text-gray-600">
                <Image className="w-5 h-5" />
              </button>
              <button
                type="submit"
                className="p-2 text-gray-400 hover:text-gray-600"
                disabled={!input.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;