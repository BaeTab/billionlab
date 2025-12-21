import { BookOpen, TrendingUp, DollarSign, Lightbulb } from 'lucide-react';

const articles = [
    {
        id: 1,
        icon: TrendingUp,
        title: '복리의 마법',
        description: '아인슈타인이 "세상에서 가장 강력한 힘"이라고 말한 복리의 원리를 이해하고 활용하세요.',
        content: `복리는 원금뿐만 아니라 이자에도 이자가 붙는 효과를 말합니다. 
    
시간이 지날수록 복리 효과는 기하급수적으로 증가하며, 이것이 바로 "눈덩이 효과"입니다.

예를 들어, 1,000만 원을 연 7%의 수익률로 30년간 투자하면:
- 단리: 약 3,100만 원
- 복리: 약 7,612만 원

복리의 핵심은 "시간"입니다. 일찍 시작할수록 더 큰 효과를 볼 수 있습니다.`,
        color: 'from-blue-500 to-blue-600',
        bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    },
    {
        id: 2,
        icon: DollarSign,
        title: '72의 법칙',
        description: '당신의 돈이 2배가 되는 시간을 단 1초 만에 계산하는 방법을 배워보세요.',
        content: `72의 법칙은 투자금이 2배가 되는 데 걸리는 시간을 빠르게 계산하는 공식입니다.

공식: 기간(년) = 72 ÷ 연 수익률(%)

실전 예시:
- 연 6% 수익률 → 72 ÷ 6 = 12년
- 연 9% 수익률 → 72 ÷ 9 = 8년
- 연 12% 수익률 → 72 ÷ 12 = 6년

이 법칙을 활용하면 투자 목표를 세울 때 현실적인 기간을 설정할 수 있습니다.

주의: 이 법칙은 복리 투자에만 적용되며, 수익률이 너무 높거나 낮으면 정확도가 떨어집니다.`,
        color: 'from-amber-500 to-orange-600',
        bgColor: 'from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-800/20',
    },
    {
        id: 3,
        icon: Lightbulb,
        title: '인플레이션 vs 투자',
        description: '물가 상승률을 이기는 투자 전략으로 실질 자산을 지키는 방법을 알아보세요.',
        content: `인플레이션은 화폐 가치를 지속적으로 하락시킵니다. 

한국의 평균 인플레이션율: 약 2-3%

만약 예금 금리가 2%인데 인플레이션이 3%라면?
→ 실질 수익률 = 2% - 3% = -1% (자산 가치 하락)

인플레이션을 이기는 전략:
1. 주식, ETF 등 장기 투자 (역사적 평균 수익률 7-10%)
2. 부동산 투자
3. 금, 원자재 등 실물 자산
4. 물가연동채권

핵심: 돈을 그냥 쌓아두면 가치가 떨어집니다. 
인플레이션을 이기는 투자가 필수입니다.`,
        color: 'from-primary-500 to-primary-600',
        bgColor: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
    },
];

export default function WealthReports() {
    return (
        <div className="mt-12">
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                        Wealth Lab Reports
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    자산 증식 연구소
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    과학적이고 체계적인 자산 관리 지식을 제공합니다
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {articles.map((article) => {
                    const Icon = article.icon;
                    return (
                        <div
                            key={article.id}
                            className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`inline-flex p-3 bg-gradient-to-br ${article.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {article.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {article.description}
                            </p>

                            <div className={`bg-gradient-to-br ${article.bgColor} border border-gray-200 dark:border-gray-700 rounded-xl p-4`}>
                                <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                                    {article.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
