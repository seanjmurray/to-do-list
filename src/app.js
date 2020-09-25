import React from 'react';

import Header from './components/header'
import ToDo from './components/todo/todo';
import SettingsProvider from './context/settings'

export default function App () {
    return (
      <>
        <Header />
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </>
    );
  }

