import React from 'react';
import { ArrowRight, BookOpen, Target, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const features = [
    {
      icon: Target,
      title: '智能起点测试',
      description: '5分钟快速定位你的英语水平',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: '游戏化词汇学习',
      description: '像玩游戏一样记单词',
      color: 'bg-emerald-500'
    },
    {
      icon: BookOpen,
      title: '分级阅读材料',
      description: '从简单句子到新闻文章',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: '可视化成长',
      description: '看得见的进步轨迹',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-16 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              从零基础到
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                自主阅读
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              专为中文母语者设计的英语学习平台
              <br />
              <span className="text-emerald-600 font-semibold">阅读先行，以读带学</span>
            </p>
            
            {/* CTA Button */}
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              开始学习之旅
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}