import React, { useState } from 'react';
import { Screen } from './types';
import Screen1Connection from './components/screens/Screen1Connection';
import ScreenEnterId from './components/screens/ScreenEnterId';
import ScreenAccountVerification from './components/screens/ScreenAccountVerification';
import Screen2EstablishingLink from './components/screens/Screen2EstablishingLink';
import Screen3GameSelection from './components/screens/Screen3GameSelection';
import Screen4MainInterface from './components/screens/Screen4MainInterface';
import AnimatedBackground from './components/common/AnimatedBackground';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.CONNECTION);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.CONNECTION:
        return <Screen1Connection onConnect={() => setCurrentScreen(Screen.ENTER_ID)} />;
      case Screen.ENTER_ID:
        return <ScreenEnterId onIdSubmit={() => setCurrentScreen(Screen.ACCOUNT_VERIFICATION)} />;
      case Screen.ACCOUNT_VERIFICATION:
        return <ScreenAccountVerification onVerificationComplete={() => setCurrentScreen(Screen.ESTABLISHING_LINK)} />;
      case Screen.ESTABLISHING_LINK:
        return <Screen2EstablishingLink onLinkEstablished={() => setCurrentScreen(Screen.GAME_SELECTION)} />;
      case Screen.GAME_SELECTION:
        return <Screen3GameSelection onGameSelect={() => setCurrentScreen(Screen.MAIN_INTERFACE)} />;
      case Screen.MAIN_INTERFACE:
        return <Screen4MainInterface />;
      default:
        return <Screen1Connection onConnect={() => setCurrentScreen(Screen.ENTER_ID)} />;
    }
  };

  return (
    <main className="bg-[#1a1a1d] text-white min-h-screen w-full flex flex-col items-center justify-center font-mono relative overflow-hidden p-4">
      <AnimatedBackground />
      <div className="z-10 w-full max-w-5xl">
        {renderScreen()}
      </div>
    </main>
  );
};

export default App;