import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Assessment from './components/Assessment';
import Vocabulary from './components/Vocabulary';
import Reading from './components/Reading';
import Progress from './components/Progress';
import { initialPacks } from './components/Vocabulary';
import type { VocabPack } from './components/Vocabulary';

function App() {
  const [currentSection, setCurrentSection] = React.useState('home');
  const [userLevel, setUserLevel] = React.useState('L1');
  const [packs, setPacks] = React.useState<VocabPack[]>(initialPacks);
  const [selectedPackId, setSelectedPackId] = React.useState<string>('survival100');

  const selectedPack = packs.find((p: VocabPack) => p.id === selectedPackId);
  const learnedWords = selectedPack ? selectedPack.words.slice(0, selectedPack.learned).map((w: any) => w.word) : [];
  const currentPackId = selectedPackId;

  const handleGetStarted = () => {
    setCurrentSection('assessment');
  };

  const handleAssessmentComplete = () => {
    setCurrentSection('vocabulary');
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'assessment':
        return <Assessment onComplete={handleAssessmentComplete} />;
      case 'vocabulary':
        return (
          <Vocabulary
            userLevel={userLevel}
            packs={packs}
            setPacks={setPacks}
            selectedPackId={selectedPackId}
            setSelectedPackId={setSelectedPackId}
          />
        );
      case 'reading':
        return (
          <Reading
            userLevel={userLevel}
            learnedWords={learnedWords}
            currentPackId={currentPackId}
          />
        );
      case 'progress':
        return <Progress userLevel={userLevel} />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      {renderCurrentSection()}
    </div>
  );
}

export default App;