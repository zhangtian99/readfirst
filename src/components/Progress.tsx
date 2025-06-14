import React from 'react';
import { TrendingUp, Award, Book, Target, Calendar, Flame } from 'lucide-react';

interface ProgressProps {
  userLevel: string;
}

export default function Progress({ userLevel }: ProgressProps) {
  const progressData = {
    vocabularyCount: 156,
    readingSpeed: 45, // words per minute
    articlesRead: 12,
    studyStreak: 7,
    currentLevel: 'L2',
    nextLevelProgress: 68
  };

  const achievements = [
    {
      id: 1,
      title: '初学者',
      description: '完成第一次能力测试',
      icon: Target,
      color: 'bg-green-500',
      earned: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: '词汇学习者',
      description: '掌握100个单词',
      icon: Book,
      color: 'bg-blue-500',
      earned: true,
      date: '2024-01-20'
    },
    {
      id: 3,
      title: '阅读新手',
      description: '完成10篇文章阅读',
      icon: Book,
      color: 'bg-purple-500',
      earned: true,
      date: '2024-01-25'
    },
    {
      id: 4,
      title: '坚持者',
      description: '连续学习7天',
      icon: Flame,
      color: 'bg-orange-500',
      earned: true,
      date: '2024-01-28'
    },
    {
      id: 5,
      title: '词汇大师',
      description: '掌握500个单词',
      icon: Award,
      color: 'bg-yellow-500',
      earned: false,
      progress: 31 // 156/500 * 100
    },
    {
      id: 6,
      title: '阅读达人',
      description: '完成50篇文章阅读',
      icon: TrendingUp,
      color: 'bg-indigo-500',
      earned: false,
      progress: 24 // 12/50 * 100
    }
  ];

  const weeklyData = [
    { day: '周一', vocabulary: 8, reading: 2 },
    { day: '周二', vocabulary: 12, reading: 1 },
    { day: '周三', vocabulary: 15, reading: 3 },
    { day: '周四', vocabulary: 10, reading: 2 },
    { day: '周五', vocabulary: 20, reading: 2 },
    { day: '周六', vocabulary: 18, reading: 1 },
    { day: '周日', vocabulary: 14, reading: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">学习仪表盘</h2>
          <p className="text-lg text-gray-600">追踪你的学习进度，见证成长轨迹</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">{progressData.vocabularyCount}</div>
            <div className="text-sm text-gray-600">已掌握词汇</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{progressData.readingSpeed}</div>
            <div className="text-sm text-gray-600">阅读速度 (词/分)</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{progressData.articlesRead}</div>
            <div className="text-sm text-gray-600">完成文章</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{progressData.studyStreak}</div>
            <div className="text-sm text-gray-600">连续学习天数</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Level Progress */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">等级进度</h3>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{progressData.currentLevel}</div>
              <div className="text-sm text-gray-600">当前等级</div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>升级到 L3</span>
                <span>{progressData.nextLevelProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-emerald-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressData.nextLevelProgress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 text-center">
              还需掌握 160 个词汇和完成 8 篇阅读
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">本周学习活动</h3>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-12">{day.day}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${Math.min(day.vocabulary * 5, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.min(day.reading * 50, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 flex space-x-4">
                    <span className="text-emerald-600">{day.vocabulary}词</span>
                    <span className="text-blue-600">{day.reading}篇</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600">词汇学习</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">阅读练习</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">成就系统</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`relative p-6 rounded-xl border-2 ${
                achievement.earned 
                  ? 'border-emerald-200 bg-emerald-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                {achievement.earned && (
                  <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1">
                    <Award className="h-4 w-4" />
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${achievement.color}`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>

                {achievement.earned ? (
                  <div className="text-sm text-emerald-600 font-medium">
                    获得于 {achievement.date}
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>进度</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}