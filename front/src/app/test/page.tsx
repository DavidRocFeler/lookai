'use client'
import React, { useEffect } from 'react';
import '@/style/chatAI.css'
import { createChat } from '@n8n/chat';

const App: React.FC = () => {
  useEffect(() => {
    createChat({
        webhookUrl: 'https://davidrocfeler.app.n8n.cloud/webhook/2083fbbd-988d-43e0-b1c0-a7345f99020d/chat',
        webhookConfig: {
            method: 'POST',
            headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
            'Hi I&apos;m Lookai! Yuor AI agent'
        ],
        i18n: {
            en: {
                title: 'Lookai agent',
                subtitle: "Start a chat with your agent AI",
                footer: '',
                getStarted: 'New Conversation',
                inputPlaceholder: 'Type your question..',
                closeButtonTooltip: 'Close',
            },
        },
    });
  }, []);

  return (
    <div className='flex justify-center h-[100%]'>
      <div id="n8n-chat"></div>
    </div>
  );
};

export default App;