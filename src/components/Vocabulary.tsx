import React from 'react';
import { Star, Book, RotateCcw, Volume2, Eye, EyeOff, Lock, Calendar, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

interface VocabWord {
  word: string;
  translation: string;
  example: string;
}

export interface VocabPack {
  id: string;
  name: string;
  description: string;
  color: string;
  total: number;
  learned: number;
  unlocked: boolean;
  dailyUnlock: number;
  nextPackId?: string;
  words: VocabWord[];
}

export const initialPacks: VocabPack[] = [
  {
    id: 'survival100',
    name: '生存100词',
    description: '日常生活必备词汇',
    color: 'bg-green-500',
    total: 100,
    learned: 0,
    unlocked: true,
    dailyUnlock: 10,
    nextPackId: 'basic500',
    words: [
      { word: 'hello', translation: '你好', example: 'Hello, how are you?' },
      { word: 'thank', translation: '谢谢', example: 'Thank you very much.' },
      { word: 'water', translation: '水', example: 'I need some water.' },
      { word: 'food', translation: '食物', example: 'This food is delicious.' },
      { word: 'help', translation: '帮助', example: 'Can you help me?' },
      { word: 'good', translation: '好的', example: 'This is good.' },
      { word: 'bad', translation: '坏的', example: 'This is bad.' },
      { word: 'yes', translation: '是的', example: 'Yes, I agree.' },
      { word: 'no', translation: '不', example: 'No, I disagree.' },
      { word: 'please', translation: '请', example: 'Please help me.' },
    ],
  },
  {
    id: 'basic500',
    name: '基础500词',
    description: '扩展日常交流词汇',
    color: 'bg-blue-500',
    total: 500,
    learned: 0,
    unlocked: false,
    dailyUnlock: 10,
    nextPackId: 'advanced1000',
    words: [
      { word: 'beautiful', translation: '美丽的', example: 'She is beautiful.' },
      { word: 'important', translation: '重要的', example: 'This is important.' },
      { word: 'different', translation: '不同的', example: 'We are different.' },
      { word: 'example', translation: '例子', example: 'For example...' },
      { word: 'problem', translation: '问题', example: 'No problem!' },
      { word: 'family', translation: '家庭', example: 'My family is big.' },
      { word: 'friend', translation: '朋友', example: 'He is my friend.' },
      { word: 'school', translation: '学校', example: 'I go to school.' },
      { word: 'work', translation: '工作', example: 'I work every day.' },
      { word: 'happy', translation: '高兴的', example: 'I am happy.' },
    ],
  },
  {
    id: 'advanced1000',
    name: '进阶1000词',
    description: '进阶阅读与表达',
    color: 'bg-purple-500',
    total: 1000,
    learned: 0,
    unlocked: false,
    dailyUnlock: 10,
    nextPackId: 'academic3000',
    words: [
      { word: 'achieve', translation: '实现', example: 'You can achieve your goals.' },
      { word: 'challenge', translation: '挑战', example: 'This is a big challenge.' },
      { word: 'creative', translation: '有创造力的', example: 'She is very creative.' },
      { word: 'develop', translation: '发展', example: 'We need to develop skills.' },
      { word: 'efficient', translation: '高效的', example: 'This method is efficient.' },
      { word: 'focus', translation: '专注', example: 'Focus on your study.' },
      { word: 'improve', translation: '提升', example: 'I want to improve my English.' },
      { word: 'opinion', translation: '观点', example: 'What is your opinion?' },
      { word: 'solution', translation: '解决方案', example: 'We found a solution.' },
      { word: 'support', translation: '支持', example: 'Thank you for your support.' },
    ],
  },
  {
    id: 'academic3000',
    name: '学术3000词',
    description: '学术与专业场景',
    color: 'bg-orange-500',
    total: 3000,
    learned: 0,
    unlocked: false,
    dailyUnlock: 10,
    nextPackId: 'native5000',
    words: [
      { word: 'analyze', translation: '分析', example: "Let's analyze the data."},
      { word: 'concept', translation: '概念', example: 'This is a new concept.' },
      { word: 'data', translation: '数据', example: 'The data is clear.' },
      { word: 'evidence', translation: '证据', example: 'We need more evidence.' },
      { word: 'hypothesis', translation: '假设', example: 'Test the hypothesis.' },
      { word: 'method', translation: '方法', example: 'This is a good method.' },
      { word: 'research', translation: '研究', example: 'She does research.' },
      { word: 'result', translation: '结果', example: 'The result is positive.' },
      { word: 'theory', translation: '理论', example: 'This theory is famous.' },
      { word: 'variable', translation: '变量', example: 'Change the variable.' },
    ],
  },
  {
    id: 'native5000',
    name: '母语5000词',
    description: '母语级词汇量挑战',
    color: 'bg-emerald-600',
    total: 5000,
    learned: 0,
    unlocked: false,
    dailyUnlock: 10,
    words: [
      { word: 'abundant', translation: '丰富的', example: 'The forest is abundant with life.' },
      { word: 'complicated', translation: '复杂的', example: 'This problem is complicated.' },
      { word: 'distinguish', translation: '区分', example: 'Can you distinguish them?' },
      { word: 'elaborate', translation: '详细说明', example: 'Please elaborate your idea.' },
      { word: 'fascinate', translation: '使着迷', example: 'The story fascinates me.' },
      { word: 'meticulous', translation: '一丝不苟的', example: 'He is meticulous in his work.' },
      { word: 'perceive', translation: '感知', example: 'How do you perceive this?' },
      { word: 'sophisticated', translation: '复杂精致的', example: 'A sophisticated device.' },
      { word: 'subtle', translation: '微妙的', example: 'A subtle difference.' },
      { word: 'versatile', translation: '多才多艺的', example: 'She is versatile.' },
    ],
  },
];

interface VocabularyProps {
  userLevel: string;
  packs: VocabPack[];
  setPacks: React.Dispatch<React.SetStateAction<VocabPack[]>>;
  selectedPackId: string;
  setSelectedPackId: React.Dispatch<React.SetStateAction<string>>;
}

export default function Vocabulary({ userLevel, packs, setPacks, selectedPackId, setSelectedPackId }: VocabularyProps) {
  const [currentWordIdx, setCurrentWordIdx] = React.useState(0);
  const [reviewMode, setReviewMode] = React.useState(false);

  const selectedPack = packs.find(p => p.id === selectedPackId)!;

  // 今日可学单词区间
  const start = selectedPack.learned;
  const end = Math.min(selectedPack.learned + selectedPack.dailyUnlock, selectedPack.total);
  const todayWords = selectedPack.words.slice(start, end);
  const currentWord = reviewMode
    ? selectedPack.words[currentWordIdx]
    : todayWords[currentWordIdx];

  // 学习下一个单词
  const handleNextWord = () => {
    if (!reviewMode && currentWordIdx < todayWords.length - 1) {
      setCurrentWordIdx(idx => idx + 1);
    } else if (!reviewMode && currentWordIdx === todayWords.length - 1) {
      // 今日新词学完，进度+1，自动进入复习模式
      setPacks(prev => prev.map(pack => {
        if (pack.id === selectedPackId) {
          const newLearned = Math.min(pack.learned + todayWords.length, pack.total);
          return { ...pack, learned: newLearned };
        }
        if (pack.id === selectedPack.nextPackId && selectedPack.learned + todayWords.length >= selectedPack.total) {
          return { ...pack, unlocked: true };
        }
        return pack;
      }));
      setCurrentWordIdx(0);
      setReviewMode(true);
    } else if (reviewMode && currentWordIdx < selectedPack.learned - 1) {
      setCurrentWordIdx(idx => idx + 1);
    }
  };

  // 复习区：上一个单词
  const handlePrevWord = () => {
    if (currentWordIdx > 0) setCurrentWordIdx(idx => idx - 1);
  };

  // 切换词包时，优先展示今日新词，若已学完则进入复习区
  const handleSelectPack = (packId: string) => {
    setSelectedPackId(packId);
    setCurrentWordIdx(0);
    const pack = packs.find(p => p.id === packId)!;
    const todayEnd = Math.min(pack.learned + pack.dailyUnlock, pack.total);
    if (pack.learned < pack.total && pack.learned < todayEnd) {
      setReviewMode(false);
    } else {
      setReviewMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">词汇宇宙</h2>
          <p className="text-lg text-gray-600">每天解锁新单词，学完后可随时复习已学内容</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {packs.map(pack => (
            <div
              key={pack.id}
              className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all cursor-pointer ${
                selectedPackId === pack.id
                  ? 'border-emerald-500 ring-2 ring-emerald-200'
                  : pack.unlocked
                  ? 'border-transparent hover:border-emerald-200'
                  : 'border-gray-200 opacity-60 cursor-not-allowed'
              }`}
              onClick={() => pack.unlocked && handleSelectPack(pack.id)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${pack.unlocked ? pack.color : 'bg-gray-400'} relative`}>
                  {pack.unlocked ? <Book className="h-6 w-6 text-white" /> : <Lock className="h-6 w-6 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold text-gray-900">{pack.name}</h3>
                    {!pack.unlocked && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                        未解锁
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{pack.description}</p>
                </div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">学习进度</span>
                  <span className="text-sm font-medium text-emerald-600">
                    {pack.learned}/{pack.total}
                  </span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(pack.learned / pack.total) * 100}%` }}
                  ></div>
                </div>
                {pack.unlocked && pack.learned === pack.total && (
                  <div className="text-xs text-emerald-600">已完成！下一个词包已解锁</div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* 单词卡片展示区 */}
        {selectedPack.unlocked && (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {(!reviewMode && todayWords.length > 0) ? (
              <>
                <div className="mb-4 text-lg text-gray-700 font-semibold">
                  今日新词 {currentWordIdx + 1} / {todayWords.length}
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">{currentWord.word}</div>
                  <div className="text-xl text-gray-600 mb-2">{currentWord.translation}</div>
                  <div className="text-gray-500 italic">{currentWord.example}</div>
                </div>
                <button
                  className="px-8 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all font-semibold mt-2"
                  onClick={handleNextWord}
                >
                  {currentWordIdx < todayWords.length - 1 ? '下一个' : '今日新词学完'}
                </button>
              </>
            ) : (
              <>
                <div className="mb-4 text-lg text-gray-700 font-semibold">
                  已学单词复习 {currentWordIdx + 1} / {selectedPack.learned}
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">{currentWord.word}</div>
                  <div className="text-xl text-gray-600 mb-2">{currentWord.translation}</div>
                  <div className="text-gray-500 italic">{currentWord.example}</div>
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200"
                    onClick={handlePrevWord}
                    disabled={currentWordIdx === 0}
                  >
                    <ChevronLeft className="inline-block w-5 h-5" /> 上一个
                  </button>
                  <button
                    className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-semibold"
                    onClick={handleNextWord}
                    disabled={currentWordIdx >= selectedPack.learned - 1}
                  >
                    下一个 <ChevronRight className="inline-block w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}