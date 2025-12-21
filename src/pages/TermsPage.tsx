import { FileText } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                이용약관
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                최종 수정일: 2025년 1월 15일
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제1조 (목적)
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                본 약관은 빌리언랩(이하 "회사")이 제공하는 재무 계산 서비스(이하 "서비스")의 이용과 관련하여
                                회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제2조 (용어의 정의)
                            </h2>
                            <ul className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>
                                    <strong>"서비스"</strong>란 회사가 제공하는 복리 계산기, 목표 달성 계산기 등
                                    모든 재무 관련 계산 도구 및 관련 콘텐츠를 의미합니다.
                                </li>
                                <li>
                                    <strong>"이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.
                                </li>
                                <li>
                                    <strong>"콘텐츠"</strong>란 서비스 내에서 제공되는 모든 정보, 텍스트, 그래픽,
                                    이미지 등을 의미합니다.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제3조 (약관의 효력 및 변경)
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
                                <li>
                                    회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며,
                                    약관이 변경되는 경우 변경사항을 시행일자 7일 전부터 공지합니다.
                                </li>
                                <li>
                                    이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.
                                </li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제4조 (서비스의 제공)
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>회사는 다음과 같은 서비스를 제공합니다:
                                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                        <li>복리 계산 서비스</li>
                                        <li>목표 달성 계산 서비스</li>
                                        <li>72의 법칙 계산 서비스</li>
                                        <li>재테크 관련 교육 콘텐츠</li>
                                        <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 제공하는 서비스</li>
                                    </ul>
                                </li>
                                <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
                                <li>
                                    회사는 시스템 점검, 보수, 교체 등의 사유로 서비스 제공을 일시적으로 중단할 수 있으며,
                                    이 경우 사전에 공지합니다.
                                </li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제5조 (서비스의 이용)
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>이용자는 본 약관에 동의함으로써 서비스를 이용할 수 있습니다.</li>
                                <li>이용자는 서비스를 이용함에 있어 다음 각 호의 행위를 하여서는 안 됩니다:
                                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                        <li>타인의 정보 도용</li>
                                        <li>회사가 게시한 정보의 변경</li>
                                        <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                                        <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                                        <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                                        <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제6조 (저작권 및 지적재산권)
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>
                                    서비스 내 모든 콘텐츠에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.
                                </li>
                                <li>
                                    이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포,
                                    방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                                </li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제7조 (면책조항)
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>
                                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는
                                    서비스 제공에 관한 책임이 면제됩니다.
                                </li>
                                <li>
                                    회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
                                </li>
                                <li>
                                    <strong className="text-primary-600 dark:text-primary-400">
                                        본 서비스는 교육 및 참고 목적으로 제공되며, 실제 투자 결과는 시장 상황에 따라 달라질 수 있습니다.
                                        회사는 서비스를 통해 제공되는 계산 결과나 정보의 정확성, 신뢰성에 대해 보증하지 않으며,
                                        이용자의 투자 결정에 대한 책임을 지지 않습니다.
                                    </strong>
                                </li>
                                <li>
                                    회사는 이용자 간 또는 이용자와 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는
                                    책임이 면제됩니다.
                                </li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                제8조 (분쟁의 해결)
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                <li>
                                    회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여
                                    필요한 모든 노력을 하여야 합니다.
                                </li>
                                <li>
                                    본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.
                                </li>
                                <li>
                                    서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우
                                    회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
                                </li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                부칙
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                본 약관은 2025년 1월 15일부터 시행됩니다.
                            </p>
                        </section>

                        <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>⚠️ 중요 안내:</strong> 본 서비스의 모든 계산 결과는 참고용이며,
                                실제 투자 결정은 전문가와 상담 후 본인의 판단과 책임 하에 이루어져야 합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
