import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        category: '서비스 이용',
        question: '빌리언랩은 무료인가요?',
        answer: '네, 빌리언랩의 모든 계산 도구와 콘텐츠는 완전 무료로 제공됩니다. 회원가입 없이도 모든 기능을 사용하실 수 있습니다.'
    },
    {
        id: 2,
        category: '서비스 이용',
        question: '계산 결과를 저장할 수 있나요?',
        answer: '현재는 브라우저의 로컬 스토리지에 임시 저장됩니다. 향후 회원 기능을 통해 계산 히스토리를 저장하는 기능을 추가할 예정입니다.'
    },
    {
        id: 3,
        category: '복리 계산기',
        question: '복리 계산기는 어떻게 사용하나요?',
        answer: '초기 자본, 월 저축액, 연 이율, 투자 기간을 입력하면 자동으로 총 자산, 총 원금, 총 이자가 계산됩니다. 차트를 통해 연도별 자산 증가 추이도 확인할 수 있습니다.'
    },
    {
        id: 4,
        category: '복리 계산기',
        question: '월복리와 연복리의 차이는 무엇인가요?',
        answer: '월복리는 매월 이자가 원금에 더해져 다음 달 이자 계산에 포함되는 방식입니다. 연복리보다 복리 효과가 더 크며, 빌리언랩은 월복리 방식을 사용합니다.'
    },
    {
        id: 5,
        category: '복리 계산기',
        question: '적절한 연 이율은 얼마인가요?',
        answer: '투자 상품에 따라 다릅니다. 예금/적금은 2-4%, 채권형 펀드는 3-5%, 주식형 펀드는 7-10% 정도를 기대할 수 있습니다. 보수적으로는 5-7%를 권장합니다.'
    },
    {
        id: 6,
        category: '목표 달성 계산기',
        question: '목표 달성 계산기는 어떻게 사용하나요?',
        answer: '목표 금액, 초기 자본, 투자 기간, 예상 수익률을 입력하면 목표 달성에 필요한 월 저축액이 자동으로 계산됩니다.'
    },
    {
        id: 7,
        category: '목표 달성 계산기',
        question: '10억을 만들려면 얼마나 저축해야 하나요?',
        answer: '초기 자본과 투자 기간, 수익률에 따라 다릅니다. 예를 들어 초기 자본 1,000만원, 연 7% 수익률로 20년 투자 시 월 약 200만원이 필요합니다.'
    },
    {
        id: 8,
        category: '72의 법칙',
        question: '72의 법칙이란 무엇인가요?',
        answer: '72의 법칙은 투자금이 2배가 되는 데 걸리는 시간을 간단히 계산하는 공식입니다. "기간(년) = 72 ÷ 연 수익률(%)"로 계산합니다.'
    },
    {
        id: 9,
        category: '72의 법칙',
        question: '72의 법칙은 정확한가요?',
        answer: '수익률이 6-10% 범위에서는 매우 정확합니다. 수익률이 너무 높거나 낮으면 오차가 발생할 수 있지만, 빠른 추정에는 충분히 유용합니다.'
    },
    {
        id: 10,
        category: '투자 전략',
        question: '초보자에게 추천하는 투자 방법은?',
        answer: '적립식 펀드나 ETF 투자를 추천합니다. 매월 일정 금액을 투자하면 평균 매수 단가를 낮출 수 있고, 시장 타이밍을 고민할 필요가 없습니다.'
    },
    {
        id: 11,
        category: '투자 전략',
        question: '월급의 몇 %를 투자해야 하나요?',
        answer: '일반적으로 월급의 20-30%를 저축 및 투자에 할당하는 것을 권장합니다. 50-30-20 법칙(생활비 50%, 저축/투자 30%, 자기계발 20%)을 참고하세요.'
    },
    {
        id: 12,
        category: '투자 전략',
        question: '인플레이션을 고려해야 하나요?',
        answer: '네, 반드시 고려해야 합니다. 한국의 평균 인플레이션율은 2-3%입니다. 실질 수익률 = 명목 수익률 - 인플레이션율로 계산됩니다.'
    },
    {
        id: 13,
        category: '세금 및 수수료',
        question: '투자 수익에 세금이 있나요?',
        answer: '네, 이자소득세와 배당소득세가 15.4% 부과됩니다. ISA 계좌를 활용하면 연 200만원까지 비과세 혜택을 받을 수 있습니다.'
    },
    {
        id: 14,
        category: '세금 및 수수료',
        question: 'ISA 계좌란 무엇인가요?',
        answer: 'Individual Savings Account의 약자로, 하나의 계좌에서 예금, 펀드, 주식 등을 자유롭게 운용하고 세금 혜택을 받을 수 있는 통합 계좌입니다.'
    },
    {
        id: 15,
        category: '위험 관리',
        question: '원금 손실이 걱정됩니다.',
        answer: '원금 보장이 필요하다면 예금이나 적금을 선택하세요. 투자는 항상 위험이 따르므로, 비상금을 충분히 확보한 후 여유 자금으로 투자하는 것이 중요합니다.'
    },
    {
        id: 16,
        category: '위험 관리',
        question: '분산 투자가 중요한가요?',
        answer: '매우 중요합니다. "계란을 한 바구니에 담지 마라"는 격언처럼, 여러 자산에 분산 투자하면 위험을 줄일 수 있습니다.'
    },
    {
        id: 17,
        category: '기타',
        question: '계산 결과가 정확한가요?',
        answer: '수학적 계산은 정확하지만, 실제 투자 결과는 시장 상황, 수수료, 세금 등에 따라 달라질 수 있습니다. 참고용으로만 활용하시고, 실제 투자는 전문가와 상담 후 결정하세요.'
    },
    {
        id: 18,
        category: '기타',
        question: '모바일에서도 사용할 수 있나요?',
        answer: '네, 빌리언랩은 반응형 디자인으로 제작되어 PC, 태블릿, 모바일 모든 기기에서 최적화된 환경으로 이용하실 수 있습니다.'
    },
    {
        id: 19,
        category: '기타',
        question: '앱으로 설치할 수 있나요?',
        answer: '네, PWA(Progressive Web App) 기술을 적용하여 모바일 기기에 앱처럼 설치할 수 있습니다. 브라우저 메뉴에서 "홈 화면에 추가"를 선택하세요.'
    },
    {
        id: 20,
        category: '기타',
        question: '문의사항은 어디로 하나요?',
        answer: 'b_h_woo@naver.com으로 이메일을 보내주시면 빠르게 답변드리겠습니다.'
    }
];

export default function FAQPage() {
    const [openId, setOpenId] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('전체');

    const categories = ['전체', ...Array.from(new Set(faqData.map(faq => faq.category)))];

    const filteredFAQs = selectedCategory === '전체'
        ? faqData
        : faqData.filter(faq => faq.category === selectedCategory);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
                        <HelpCircle className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        자주 묻는 질문
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        빌리언랩 사용에 대한 궁금증을 해결해드립니다
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {filteredFAQs.map(faq => (
                        <div
                            key={faq.id}
                            className="glass-card overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <div className="flex-1">
                                    <div className="text-xs text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                        {faq.category}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </h3>
                                </div>
                                <div className="ml-4">
                                    {openId === faq.id ? (
                                        <ChevronUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            {openId === faq.id && (
                                <div className="px-6 pb-6 pt-2">
                                    <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        찾으시는 답변이 없나요?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        언제든지 문의해주세요. 빠르게 답변드리겠습니다.
                    </p>
                    <a
                        href="mailto:b_h_woo@naver.com"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        이메일 문의하기
                    </a>
                </div>
            </div>
        </div>
    );
}
