import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Lock } from 'lucide-react';
import { formatKoreanCurrency, formatNumber, calculateCompoundInterest } from '../utils/financial';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import AdModal from './AdModal';

export default function CompoundCalculator() {
    const [principal, setPrincipal] = useState<number>(10000000);
    const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000000);
    const [annualRate, setAnnualRate] = useState<number>(7);
    const [years, setYears] = useState<number>(10);
    const [showAdModal, setShowAdModal] = useState(false);
    const [resultsUnlocked, setResultsUnlocked] = useState(false);

    const [result, setResult] = useState(
        calculateCompoundInterest(principal, monthlyDeposit, annualRate, years)
    );

    useEffect(() => {
        const newResult = calculateCompoundInterest(principal, monthlyDeposit, annualRate, years);
        setResult(newResult);
        // 입력값이 변경되면 결과를 다시 잠금
        setResultsUnlocked(false);
    }, [principal, monthlyDeposit, annualRate, years]);

    const handleUnlockResults = () => {
        setShowAdModal(true);
    };

    const handleAdViewed = () => {
        setResultsUnlocked(true);
    };

    return (
        <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">복리 계산기</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">월복리로 자산 증식 시뮬레이션</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* 초기 자본 */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        초기 자본
                    </label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="input-field"
                        placeholder="초기 자본을 입력하세요"
                    />
                    <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                        {formatKoreanCurrency(principal)}
                    </p>
                </div>

                {/* 월 저축액 */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        월 저축액
                    </label>
                    <input
                        type="number"
                        value={monthlyDeposit}
                        onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                        className="input-field"
                        placeholder="월 저축액을 입력하세요"
                    />
                    <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                        {formatKoreanCurrency(monthlyDeposit)}
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
                    <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                        연 {annualRate}%
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
                    <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                        {years}년
                    </p>
                </div>
            </div>

            {/* 결과 표시 */}
            <div className="relative">
                {!resultsUnlocked && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 dark:bg-navy-900/50 backdrop-blur-md rounded-2xl">
                        <button
                            onClick={handleUnlockResults}
                            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                        >
                            <Lock className="w-6 h-6" />
                            <span>결과 확인하기</span>
                        </button>
                    </div>
                )}

                <div className={`grid md:grid-cols-3 gap-4 mb-8 ${!resultsUnlocked ? 'blur-sm' : ''}`}>
                    <div className="stat-card bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                        <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">총 자산</div>
                        <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                            {formatNumber(result.totalAsset)}원
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            {formatKoreanCurrency(result.totalAsset)}
                        </div>
                    </div>

                    <div className="stat-card bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-700">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">총 원금</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {formatNumber(result.totalPrincipal)}원
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {formatKoreanCurrency(result.totalPrincipal)}
                        </div>
                    </div>

                    <div className="stat-card bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-700 animate-glow">
                        <div className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-1 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            총 이자
                        </div>
                        <div className="text-2xl font-bold text-primary-900 dark:text-primary-100">
                            {formatNumber(result.totalInterest)}원
                        </div>
                        <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                            {formatKoreanCurrency(result.totalInterest)}
                        </div>
                    </div>
                </div>
            </div>

            {/* 차트 */}
            <div className={`bg-white/50 dark:bg-navy-700/50 rounded-xl p-6 ${!resultsUnlocked ? 'blur-sm' : ''}`}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">자산 성장 추이</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={result.yearlyData}>
                        <defs>
                            <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6B7280" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#6B7280" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
                        <XAxis
                            dataKey="year"
                            stroke="#6B7280"
                            label={{ value: '년도', position: 'insideBottom', offset: -5 }}
                        />
                        <YAxis
                            stroke="#6B7280"
                            tickFormatter={(value) => `${(value / 10000).toFixed(0)}만`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                                border: '1px solid #374151',
                                borderRadius: '0.75rem',
                                color: '#fff',
                            }}
                            formatter={(value: number | undefined) => value !== undefined ? [formatKoreanCurrency(value), ''] : ['', '']}
                            labelFormatter={(label) => `${label}년차`}
                        />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="principal"
                            stackId="1"
                            stroke="#6B7280"
                            fill="url(#colorPrincipal)"
                            name="원금"
                        />
                        <Area
                            type="monotone"
                            dataKey="interest"
                            stackId="1"
                            stroke="#10B981"
                            fill="url(#colorInterest)"
                            name="이자 (복리 효과)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
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

