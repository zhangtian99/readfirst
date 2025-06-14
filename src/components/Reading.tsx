import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ReadingProps {
  userLevel: string;
  learnedWords?: string[];
  currentPackId?: string;
  todayNewWords?: string[];
}

// 句子库
const sentenceBank = [
  { id: 1, text: 'Hello! How are you?', translation: '你好！你好吗？', requiredWords: ['hello'], requiredLearned: 1 },
  { id: 2, text: 'Thank you for your help.', translation: '谢谢你的帮助。', requiredWords: ['thank', 'help'], requiredLearned: 2 },
  { id: 3, text: 'I need some water.', translation: '我需要一些水。', requiredWords: ['need', 'water'], requiredLearned: 3 },
  { id: 4, text: 'This food is delicious.', translation: '这食物很好吃。', requiredWords: ['food'], requiredLearned: 4 },
  { id: 5, text: 'Can you help me?', translation: '你能帮我吗？', requiredWords: ['help'], requiredLearned: 5 },
  { id: 6, text: 'My name is Tom.', translation: '我叫Tom。', requiredWords: ['name'], requiredLearned: 6 },
  { id: 7, text: 'I go to school.', translation: '我去上学。', requiredWords: ['school'], requiredLearned: 7 },
  { id: 8, text: 'She is my friend.', translation: '她是我的朋友。', requiredWords: ['friend'], requiredLearned: 8 },
  { id: 9, text: 'I am happy.', translation: '我很高兴。', requiredWords: ['happy'], requiredLearned: 9 },
  { id: 10, text: 'Please help me.', translation: '请帮帮我。', requiredWords: ['please', 'help'], requiredLearned: 10 },
];

// 短文库
const articleBank = [
  { id: 1, title: '打招呼的一天', content: 'Hello! Thank you for your help. I need some water and food.', translation: '你好！谢谢你的帮助。我需要一些水和食物。', requiredWords: ['hello', 'thank', 'help', 'water', 'food'], requiredLearned: 5 },
  { id: 2, title: '在学校', content: 'Good morning! My name is Tom. I go to school. My teacher is nice.', translation: '早上好！我叫Tom。我去学校。我的老师很友好。', requiredWords: ['good', 'morning', 'name', 'school', 'teacher', 'nice'], requiredLearned: 7 },
  { id: 3, title: '我的朋友', content: 'I have a friend. She is beautiful and happy. We play together.', translation: '我有一个朋友。她很漂亮也很开心。我们一起玩。', requiredWords: ['friend', 'beautiful', 'happy', 'play', 'together'], requiredLearned: 10 },
  { id: 4, title: '我的第一天', content: 'Today is my first day at school. I am excited and happy.', translation: '今天是我在学校的第一天。我很激动也很开心。', requiredWords: ['today', 'first', 'day', 'school', 'happy'], requiredLearned: 12 },
  { id: 5, title: '家庭生活', content: 'My family is big. We eat breakfast together every day.', translation: '我的家庭很大。我们每天一起吃早餐。', requiredWords: ['family', 'breakfast', 'together', 'day'], requiredLearned: 15 },
];

export default function Reading({ userLevel, learnedWords = [], currentPackId = '', todayNewWords = [] }: ReadingProps) {
  const [selectedArticle, setSelectedArticle] = React.useState<number | null>(null);
  const [showTranslation, setShowTranslation] = React.useState(true);

  // 健壮性判断
  const safeLearnedWords = Array.isArray(learnedWords) ? learnedWords : [];
  const learnedCount = safeLearnedWords.length;
  // 今日新词，优先用 props，否则用 learnedWords 末尾10个
  const todayWords = todayNewWords.length > 0 ? todayNewWords : safeLearnedWords.slice(-10);

  // 推荐逻辑：今日推荐句子必须包含今日所有新学单词
  const todaySentences = sentenceBank
    .filter(s => todayWords.every(w => s.requiredWords.includes(w)) && s.requiredWords.every(w => safeLearnedWords.includes(w)) && learnedCount >= s.requiredLearned)
    .slice(0, 5);
  const todayArticles = articleBank
    .filter(a => a.requiredWords.some(w => todayWords.includes(w)) && a.requiredWords.every(w => safeLearnedWords.includes(w)) && learnedCount >= a.requiredLearned)
    .slice(0, 3);

  // 已解锁内容
  const unlockedSentences = sentenceBank.filter(s => learnedCount >= s.requiredLearned);
  const unlockedArticles = articleBank.filter(a => learnedCount >= a.requiredLearned);
  // 未解锁内容
  const lockedSentences = sentenceBank.filter(s => learnedCount < s.requiredLearned);
  const lockedArticles = articleBank.filter(a => learnedCount < a.requiredLearned);

  // 判断是否在基础500词内
  const isBasicPack = currentPackId === 'survival100' || currentPackId === 'basic500';

  // 文章详情弹窗
  if (selectedArticle !== null) {
    const article = articleBank.find(a => a.id === selectedArticle);
    if (!article) return null;
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-4"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            <span>返回列表</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none text-gray-800 mb-4">{article.content}</div>
            {isBasicPack || showTranslation ? (
              <div className="bg-emerald-50 p-4 rounded-lg text-gray-700">
                <span className="font-semibold">中文翻译：</span>{article.translation}
              </div>
            ) : (
              <button
                className="mt-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"
                onClick={() => setShowTranslation(t => !t)}
              >
                {showTranslation ? '隐藏翻译' : '显示翻译'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">分级阅读舱</h2>
          <p className="text-lg text-gray-600">每天推送新句子和短文，基础500词内自动显示翻译，内容优先包含今日新词</p>
        </div>
        {/* 今日推荐 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">今日推荐句子</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todaySentences.map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow p-4 text-lg text-gray-800">
                <div>{s.text}</div>
                {isBasicPack && <div className="text-gray-500 text-base mt-2">{s.translation}</div>}
              </div>
            ))}
            {todaySentences.length === 0 && <div className="text-gray-400 col-span-full">暂无可推荐句子</div>}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">今日推荐短文</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todayArticles.map(a => (
              <div key={a.id} className="bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-emerald-50" onClick={() => setSelectedArticle(a.id)}>
                <div className="font-bold text-lg mb-2">{a.title}</div>
                <div className="text-gray-700 line-clamp-3">{a.content}</div>
                {isBasicPack && <div className="text-gray-500 text-base mt-2">{a.translation}</div>}
              </div>
            ))}
            {todayArticles.length === 0 && <div className="text-gray-400 col-span-full">暂无可推荐短文</div>}
          </div>
        </div>
        {/* 已解锁内容 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">已解锁句子</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unlockedSentences.map(s => (
              <div key={s.id} className="bg-emerald-50 rounded-xl shadow p-4 text-lg text-gray-800">
                <div>{s.text}</div>
                {isBasicPack && <div className="text-gray-500 text-base mt-2">{s.translation}</div>}
              </div>
            ))}
            {unlockedSentences.length === 0 && <div className="text-gray-400 col-span-full">暂无已解锁句子</div>}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">已解锁短文</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unlockedArticles.map(a => (
              <div key={a.id} className="bg-emerald-50 rounded-xl shadow p-4 cursor-pointer hover:bg-emerald-100" onClick={() => setSelectedArticle(a.id)}>
                <div className="font-bold text-lg mb-2">{a.title}</div>
                <div className="text-gray-700 line-clamp-3">{a.content}</div>
                {isBasicPack && <div className="text-gray-500 text-base mt-2">{a.translation}</div>}
              </div>
            ))}
            {unlockedArticles.length === 0 && <div className="text-gray-400 col-span-full">暂无已解锁短文</div>}
          </div>
        </div>
        {/* 未解锁内容 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-400 mb-4">未解锁内容</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedSentences.map(s => (
              <div key={s.id} className="bg-gray-100 rounded-xl shadow p-4 text-lg text-gray-400">
                {s.text} <span className="block text-xs">解锁条件：已学{ s.requiredLearned }词</span>
              </div>
            ))}
            {lockedArticles.map(a => (
              <div key={a.id} className="bg-gray-100 rounded-xl shadow p-4 text-gray-400 cursor-not-allowed">
                <div className="font-bold text-lg mb-2">{a.title}</div>
                <div className="line-clamp-3">{a.content}</div>
                <div className="text-xs">解锁条件：已学{ a.requiredLearned }词</div>
              </div>
            ))}
            {lockedSentences.length === 0 && lockedArticles.length === 0 && <div className="text-gray-300 col-span-full">暂无未解锁内容</div>}
          </div>
        </div>
      </div>
    </div>
  );
}