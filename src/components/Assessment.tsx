import React from 'react';
import { CheckCircle, ArrowRight, Clock, BookOpen, Target, Brain } from 'lucide-react';

interface AssessmentProps {
  onComplete: () => void;
}

export default function Assessment({ onComplete }: AssessmentProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [showResults, setShowResults] = React.useState(false);

  const questions = [
    {
      type: 'alphabet',
      question: '请选择正确的字母顺序：',
      options: ['A, B, C, D', 'B, A, D, C', 'C, B, A, D', 'D, C, B, A'],
      correct: 0
    },
    {
      type: 'vocabulary',
      question: '"Apple" 的中文意思是：',
      options: ['香蕉', '苹果', '橙子', '葡萄'],
      correct: 1
    },
    {
      type: 'vocabulary',
      question: '"Hello" 的中文意思是：',
      options: ['再见', '谢谢', '你好', '对不起'],
      correct: 2
    },
    {
      type: 'grammar',
      question: '选择正确的句子：',
      options: ['I am student', 'I am a student', 'I student am', 'Am I student'],
      correct: 1
    },
    {
      type: 'reading',
      question: '阅读：\"The cat is on the table.\" 这句话的意思是：',
      options: ['猫在桌子下面', '猫在桌子上面', '猫在桌子旁边', '猫在桌子里面'],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex.toString()];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Assessment complete
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const calculateResults = () => {
    const correctAnswers = answers.filter((answer, index) => 
      parseInt(answer) === questions[index].correct
    ).length;
    
    const percentage = (correctAnswers / questions.length) * 100;
    
    if (percentage >= 80) return { level: 'L3', words: '500+', description: '基础扎实' };
    if (percentage >= 60) return { level: 'L2', words: '200-500', description: '有一定基础' };
    return { level: 'L1', words: '0-200', description: '刚刚起步' };
  };

  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">测试完成！</h2>
              <p className="text-lg text-gray-600">您的英语水平评估结果</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">{results.level}</div>
                <div className="text-sm text-gray-600">推荐等级</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{results.words}</div>
                <div className="text-sm text-gray-600">词汇量估计</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">{results.description}</div>
                <div className="text-sm text-gray-600">学习状态</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">为您推荐的学习路径：</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">从生存100词开始词汇积累</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">配合{results.level}级别的阅读材料</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">每天15分钟，坚持21天形成习惯</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onComplete}
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                开始学习
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">英语水平测试</h2>
            <p className="text-lg text-gray-600">5分钟快速评估，制定个性化学习计划</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">进度</span>
              <span className="text-sm text-gray-600">{currentStep + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentStep].question}
            </h3>
            
            <div className="grid gap-4">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>约需 2-3 分钟</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>测试结果仅供参考</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}