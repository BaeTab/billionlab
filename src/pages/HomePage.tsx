import CompoundCalculator from '../components/CompoundCalculator';
import GoalCalculator from '../components/GoalCalculator';
import Rule72Guide from '../components/Rule72Guide';
import WealthReports from '../components/WealthReports';

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 py-16">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6 animate-float">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                            과학적 자산 설계 연구소
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        당신의 첫 <span className="text-gradient">10억</span>을<br />설계하는 곳
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        정밀한 계산과 체계적인 전략으로<br />
                        재무 목표를 현실로 만들어보세요
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span>복리 계산</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>목표 달성 시뮬레이션</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span>72의 법칙</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Calculators Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <CompoundCalculator />
                    </div>
                    <div className="space-y-8">
                        <Rule72Guide />
                    </div>
                </div>

                {/* Goal Calculator */}
                <div className="mb-12">
                    <GoalCalculator />
                </div>

                {/* Educational Content */}
                <WealthReports />
            </section>
        </div>
    );
}
