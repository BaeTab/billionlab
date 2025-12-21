import { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }

        // PWA install prompt 이벤트 리스너
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setShowInstallButton(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // 개발 모드에서도 버튼 표시 (테스트용)
        if (import.meta.env.DEV) {
            setShowInstallButton(true);
        }

        // 이미 설치되었는지 확인
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setShowInstallButton(false);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', String(newMode));

        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('PWA 설치 완료');
        }

        setDeferredPrompt(null);
        setShowInstallButton(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-navy-900/80 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                            <div className="relative p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gradient">빌리언랩</h1>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Billion Lab</p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            to="/home"
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive('/home')
                                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            홈
                        </Link>
                        <Link
                            to="/blog"
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname.startsWith('/blog')
                                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            블로그
                        </Link>
                        <Link
                            to="/faq"
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive('/faq')
                                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            FAQ
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {/* PWA Install Button */}
                        {showInstallButton && (
                            <button
                                onClick={handleInstallClick}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                aria-label="앱 다운로드"
                            >
                                <Download className="w-4 h-4" />
                                <span className="hidden sm:inline">앱 설치</span>
                            </button>
                        )}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

