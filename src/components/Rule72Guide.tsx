import { useState } from 'react';
import { Zap, Info } from 'lucide-react';
import { calculateRule72 } from '../utils/financial';

export default function Rule72Guide() {
    const [rate, setRate] = useState<number>(7);
    const years = calculateRule72(rate);

    return (
        <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">72의 법칙</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">자산 2배 달성 시간</p>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    연 수익률 (%)
                </label>
                <input
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="input-field"
                    placeholder="수익률을 입력하세요"
                />
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4 mb-4">
                <div className="text-center">
                    <div className="text-sm text-amber-700 dark:text-amber-300 mb-1">자산이 2배가 되는 시간</div>
                    <div className="text-3xl font-bold text-gradient">
                        {years === Infinity ? '∞' : years}년
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
                <div className="flex gap-2 mb-2">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                        <p className="font-semibold mb-1">72의 법칙이란?</p>
                        <p className="text-xs leading-relaxed">
                            복리 투자에서 원금이 2배가 되는 데 걸리는 시간을 간단히 계산하는 공식입니다.
                            <br />
                            <span className="font-mono font-bold">기간 = 72 ÷ 수익률</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                {[
                    { rate: 3, years: 24 },
                    { rate: 6, years: 12 },
                    { rate: 9, years: 8 },
                ].map((item) => (
                    <button
                        key={item.rate}
                        onClick={() => setRate(item.rate)}
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
                    >
                        <div className="font-bold text-gray-900 dark:text-white">{item.rate}%</div>
                        <div className="text-gray-600 dark:text-gray-400">{item.years}년</div>
                    </button>
                ))}
            </div>
        </div>
    );
}
