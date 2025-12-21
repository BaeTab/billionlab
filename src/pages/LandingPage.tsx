import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, TrendingUp, Target, Calculator, ArrowRight, Clock } from 'lucide-react';

export default function LandingPage() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [adViewed, setAdViewed] = useState(false);

    // 광고 링크 (랜덤 선택)
    const adLinks = [
        'https://deg.kr/2a1deeb',
        'https://deg.kr/799c1ba'
    ];
    const [adLink] = useState(() => adLinks[Math.floor(Math.random() * adLinks.length)]);

    useEffect(() => {
        if (countdown > 0 && !adViewed) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown, adViewed]);

    const handleAdClick = () => {
        window.open(adLink, '_blank');
        setAdViewed(true);
    };

    const handleEnter = () => {
        if (adViewed) {
            navigate('/home');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full">
                {/* Hero Section */}
                <div className="text-center mb-12 animate-float">
                    {/* Logo */}
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                            <div className="relative p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl">
                                <Sparkles className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        당신의 첫 <span className="text-gradient">10억</span>을<br />
                        설계하는 곳
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                        과학적이고 체계적인 자산 설계 도구
                    </p>

                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
                        복리의 마법으로 재무 목표를 현실로 만들어보세요
                    </p>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                        <div className="glass-card p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4">
                                <Calculator className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                복리 계산기
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                월복리 효과를 시각화하여 자산 증식 계획 수립
                            </p>
                        </div>

                        <div className="glass-card p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="inline-flex p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                목표 달성 계산기
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                10억 목표를 위한 필요 저축액 계산
                            </p>
                        </div>

                        <div className="glass-card p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="inline-flex p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                72의 법칙
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                자산이 2배가 되는 시간 빠른 계산
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ad Section */}
                <div className="max-w-md mx-auto">
                    <div className="glass-card p-8 text-center">
                        <div className="mb-6">
                            <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                무료 서비스 이용하기
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                광고 시청으로 무료 서비스를 지원해주세요
                            </p>
                        </div>

                        {/* Ad Button */}
                        <button
                            onClick={handleAdClick}
                            disabled={countdown > 0}
                            className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 mb-4 ${countdown > 0
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                }`}
                        >
                            {countdown > 0 ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="text-2xl font-bold">{countdown}</span>
                                    <span>초 후 광고 보기</span>
                                </span>
                            ) : adViewed ? (
                                '광고 시청 완료! ✓'
                            ) : (
                                '광고 보기'
                            )}
                        </button>

                        {/* Enter Button */}
                        {adViewed && (
                            <button
                                onClick={handleEnter}
                                className="w-full py-4 px-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-pulse"
                            >
                                <span>빌리언랩 시작하기</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        )}

                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                            광고 시청은 무료 서비스 제공에 도움이 됩니다 🙏
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                            100%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            무료
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                            3개
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            계산 도구
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                            PWA
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            앱 설치 가능
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
