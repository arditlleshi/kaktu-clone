import React, { useState, useRef, useEffect } from 'react';
import { Send, Image, Sparkles, Bot, Zap, Brain } from 'lucide-react';
import PropertyMessage from './PropertyMessage';
import PropertySkeleton from './PropertySkeleton';
import { Property } from '../types';

const initialProperties: Property[] = [
  {
    id: 1,
    price: 715000.00,
    address: "Quantum Heights, Neo District",
    rooms: 6,
    baths: 2,
    sqft: 53.08,
    agency: "FUTURE HOMES AI",
    timestamp: "1 hour ago",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format",
    viewed: true,
    coordinates: [41.3275, 19.8187]
  },
  {
    id: 2,
    price: 825000.00,
    address: "Skyline Nexus, Cloud Zone",
    rooms: 4,
    baths: 1,
    sqft: 47,
    agency: "NEURAL ESTATES",
    timestamp: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format",
    coordinates: [41.3275, 19.8187]
  }
];

const aiResponses = [
  "🔮 Initializing quantum property search...",
  "🧠 Neural networks analyzing market patterns...",
  "⚡ Scanning dimensional matrices for optimal matches...",
  "🌌 Traversing the real estate multiverse..."
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
      content: '🌟 Welcome to KaKtu AI! I\'m your quantum-powered real estate companion, designed to find your perfect sanctuary across dimensions. How shall we begin our journey today?',
    }
  ]);
  const [input, setInput] = useState('');
  const [loadingIndex, setLoadingIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (messages[messages.length - 1]?.loading) {
      interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % aiResponses.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
    };

    const loadingMessage: Message = {
      id: messages.length + 2,
      type: 'assistant',
      content: aiResponses[0],
      loading: true,
    };

    setMessages([...messages, userMessage, loadingMessage]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          id: messages.length + 2,
          type: 'assistant',
          content: '✨ Analysis complete! I\'ve discovered these perfect spaces that match your criteria:',
          properties: initialProperties,
        };
        return newMessages;
      });
    }, 4500);
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto pt-6 pb-24">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`px-4 py-6 ${
                message.type === 'assistant' 
                  ? 'bg-gradient-to-r from-violet-50/50 to-indigo-50/50 backdrop-blur-sm' 
                  : 'bg-white/70'
              }`}
            >
              <div ref={messagesEndRef} />
              
              <div className="max-w-3xl mx-auto flex space-x-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  message.type === 'assistant' 
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white animate-pulse-slow shadow-lg shadow-indigo-500/25'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300'
                }`}>
                  {message.type === 'assistant' ? (
                    message.loading ? (
                      <Brain className="w-7 h-7 animate-float" />
                    ) : (
                      <Bot className="w-7 h-7" />
                    )
                  ) : (
                    <Zap className="w-6 h-6 text-gray-500" />
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  {message.loading ? (
                    <p className="text-gray-800 leading-relaxed animate-pulse">
                      {aiResponses[loadingIndex]}
                    </p>
                  ) : (
                    <p className="text-gray-800 leading-relaxed">{message.content}</p>
                  )}
                  {message.loading ? (
                    <div className="grid gap-4">
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

      <div className="fixed bottom-0 left-64 right-0">
        <div className="glass-effect border-t border-white/20">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your dream property (e.g., 'Looking for a modern penthouse with smart features and city views...')"
                className="w-full p-4 pr-24 bg-white/50 backdrop-blur-lg border border-indigo-100 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder-gray-400 shadow-lg shadow-indigo-500/5"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button 
                  type="button" 
                  className="p-2 text-indigo-400 hover:text-indigo-600 transition-colors hover:bg-indigo-50 rounded-xl"
                  title="Upload property images"
                >
                  <Image className="w-5 h-5" />
                </button>
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 text-indigo-400 hover:text-indigo-600 transition-colors hover:bg-indigo-50 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Start search"
                >
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-2 text-xs text-center text-gray-400">
              Powered by KaKtu • Finding your perfect space
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;