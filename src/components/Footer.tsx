import { Heart, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-navy-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">빌리언랩</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            과학적이고 체계적인 자산 설계 도구를 제공하여
                            누구나 재무 목표를 달성할 수 있도록 돕습니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">바로가기</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    블로그
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    자주 묻는 질문
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    개인정보처리방침
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    이용약관
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Core Values */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">핵심 가치</h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                정밀함 (Precision)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                실험 (Experiment)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                성장 (Growth)
                            </li>
                        </ul>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">면책 조항</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            본 계산기는 교육 및 참고 목적으로 제공됩니다.
                            실제 투자 결과는 시장 상황에 따라 달라질 수 있으며,
                            투자 결정은 본인의 책임 하에 이루어져야 합니다.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Billion Lab Team
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        © {new Date().getFullYear()} Billion Lab. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
