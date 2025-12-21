import { useState, useEffect } from 'react';
import { Target, Sparkles, Lock } from 'lucide-react';
import { formatKoreanCurrency, formatNumber, calculateRequiredMonthlySavings } from '../utils/financial';
import AdModal from './AdModal';

export default function GoalCalculator() {
    const [targetAmount, setTargetAmount] = useState<number>(1000000000); // 10억
    const [initialAmount, setInitialAmount] = useState<number>(10000000);
    const [years, setYears] = useState<number>(10);
    const [annualRate, setAnnualRate] = useState<number>(7);

    const [requiredMonthly, setRequiredMonthly] = useState<number>(0);
    const [showAdModal, setShowAdModal] = useState(false);
    const [resultsUnlocked, setResultsUnlocked] = useState(false);

    useEffect(() => {
        const result = calculateRequiredMonthlySavings(targetAmount, initialAmount, years, annualRate);
        setRequiredMonthly(result);
        setResultsUnlocked(false);
    }, [targetAmount, initialAmount, years, annualRate]);

    const handleUnlockResults = () => {
        setShowAdModal(true);
    };

    const handleAdViewed = () => {
        setResultsUnlocked(true);
    };

    return (
        <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">목표 달성 계산기</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">10억 만들기 시뮬레이션</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* 목표 금액 */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        목표 금액
                    </label>
                    <input
                        type="number"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(Number(e.target.value))}
                        className="input-field"
                        placeholder="목표 금액을 입력하세요"
                    />
                    <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {formatKoreanCurrency(targetAmount)}
                    </p>
                </div>

                {/* 초기 자본 */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        초기 자본
                    </label>
                    <input
                        type="number"
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(Number(e.target.value))}
                        className="input-field"
                        placeholder="초기 자본을 입력하세요"
                    />
                    <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {formatKoreanCurrency(initialAmount)}
                    </p>
                </div>

                {/* 투자 기간 */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        투자 기간 (년)
                    </label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="input-field"
                        placeholder="투자 기간을 입력하세요"
                    />
                    <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {years}년
                    </p>
                </div>

                {/* 연 이율 */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        연 이율 (%)
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        value={annualRate}
                        onChange={(e) => setAnnualRate(Number(e.target.value))}
                        className="input-field"
                        placeholder="연 이율을 입력하세요"
                    />
                    <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        연 {annualRate}%
                    </p>
                </div>
            </div>

            {/* 결과 표시 */}
            <div className="relative overflow-hidden">
                {!resultsUnlocked && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 dark:bg-navy-900/50 backdrop-blur-md rounded-2xl">
                        <button
                            onClick={handleUnlockResults}
                            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                        >
                            <Lock className="w-6 h-6" />
                            <span>결과 확인하기</span>
                        </button>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
                <div className={`relative stat-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-700 ${!resultsUnlocked ? 'blur-sm' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-purple-700 dark:text-purple-300 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            필요한 월 저축액
                        </div>
                        <div className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                            목표 달성 전략
                        </div>
                    </div>

                    <div className="text-4xl font-bold text-gradient mb-2">
                        {formatNumber(requiredMonthly)}원
                    </div>

                    <div className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-4">
                        {formatKoreanCurrency(requiredMonthly)}
                    </div>

                    <div className="pt-4 border-t border-purple-200 dark:border-purple-700">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <div className="text-gray-600 dark:text-gray-400 mb-1">총 투자 원금</div>
                                <div className="font-bold text-gray-900 dark:text-white">
                                    {formatKoreanCurrency(initialAmount + requiredMonthly * years * 12)}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-600 dark:text-gray-400 mb-1">예상 수익</div>
                                <div className="font-bold text-primary-600 dark:text-primary-400">
                                    {formatKoreanCurrency(targetAmount - (initialAmount + requiredMonthly * years * 12))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {requiredMonthly < 0 && (
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl">
                            <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                                🎉 축하합니다! 초기 자본만으로도 목표 달성이 가능합니다.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Ad Modal */}
            <AdModal
                isOpen={showAdModal}
                onClose={() => setShowAdModal(false)}
                onAdViewed={handleAdViewed}
            />
        </div>
    );
}
