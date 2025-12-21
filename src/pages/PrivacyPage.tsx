import { Shield } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                개인정보처리방침
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
                                1. 개인정보의 수집 및 이용 목적
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                빌리언랩('https://billionlab.app' 이하 '빌리언랩')은 다음의 목적을 위하여 개인정보를 처리합니다.
                                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                                이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>서비스 제공 및 계산 기능 제공</li>
                                <li>사용자 문의 및 고객 지원</li>
                                <li>서비스 개선 및 통계 분석</li>
                                <li>마케팅 및 광고 활용 (선택적 동의 시)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                2. 수집하는 개인정보 항목
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                빌리언랩은 다음과 같은 개인정보를 수집하고 있습니다:
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                                2.1 자동 수집 정보
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                                <li>IP 주소</li>
                                <li>쿠키</li>
                                <li>방문 일시</li>
                                <li>서비스 이용 기록</li>
                                <li>기기 정보 (OS, 브라우저 종류)</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                                2.2 Google Analytics
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                본 서비스는 Google Analytics를 사용하여 사용자의 서비스 이용 패턴을 분석합니다.
                                Google Analytics는 쿠키를 사용하여 익명의 트래픽 데이터를 수집합니다.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                3. 개인정보의 보유 및 이용 기간
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                빌리언랩은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
                                동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>서비스 이용 기록: 3개월</li>
                                <li>쿠키: 브라우저 종료 시 또는 1년</li>
                                <li>Google Analytics 데이터: 26개월</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                4. 개인정보의 제3자 제공
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                빌리언랩은 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                                다만, 다음의 경우에는 예외로 합니다:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                                <li>이용자가 사전에 동의한 경우</li>
                                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                5. 개인정보의 파기 절차 및 방법
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                빌리언랩은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
                                지체없이 해당 개인정보를 파기합니다.
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                                파기 방법
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 삭제</li>
                                <li>기록물, 인쇄물 등: 분쇄 또는 소각</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                6. 정보주체의 권리·의무 및 행사방법
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                정보주체는 빌리언랩에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>개인정보 열람 요구</li>
                                <li>오류 등이 있을 경우 정정 요구</li>
                                <li>삭제 요구</li>
                                <li>처리정지 요구</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                7. 쿠키의 운용
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                빌리언랩은 사용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고
                                수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                                쿠키 거부 방법
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                사용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
                                웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나,
                                쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                8. 개인정보 보호책임자
                            </h2>
                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    <strong>책임자:</strong> 빌리언랩 운영팀
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>이메일:</strong> b_h_woo@naver.com
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                9. 개인정보처리방침의 변경
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                이 개인정보처리방침은 2025년 1월 15일부터 적용됩니다.
                                법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는
                                변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
