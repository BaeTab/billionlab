import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface AdModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdViewed: () => void;
}

const AD_LINKS = [
    'https://deg.kr/799c1ba'
];

export default function AdModal({ isOpen, onClose, onAdViewed }: AdModalProps) {
    const [countdown, setCountdown] = useState(5);
    const [adLink] = useState(() => AD_LINKS[Math.floor(Math.random() * AD_LINKS.length)]);
    const [adViewed, setAdViewed] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setCountdown(5);
            setAdViewed(false);
            return;
        }

        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, countdown]);

    const handleAdClick = () => {
        window.open(adLink, '_blank');
        setAdViewed(true);
    };

    const handleClose = () => {
        if (adViewed) {
            onAdViewed();
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md glass-card p-6 animate-float">
                {/* Close Button */}
                {adViewed && (
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="닫기"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}

                {/* Content */}
                <div className="text-center">
                    <div className="mb-4">
                        <div className="inline-flex p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                            <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            결과를 확인하려면
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            광고를 시청해주세요
                        </p>
                    </div>

                    {/* Ad Button */}
                    <button
                        onClick={handleAdClick}
                        disabled={countdown > 0}
                        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${countdown > 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            }`}
                    >
                        {countdown > 0 ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="text-2xl font-bold">{countdown}</span>
                                <span>초 후 광고 보기</span>
                            </span>
                        ) : adViewed ? (
                            '광고 시청 완료! ✓'
                        ) : (
                            '광고 보기'
                        )}
                    </button>

                    {adViewed && (
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl">
                            <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                                ✓ 광고 시청이 완료되었습니다!
                                <br />
                                <span className="text-xs">닫기 버튼을 눌러 결과를 확인하세요.</span>
                            </p>
                        </div>
                    )}

                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                        광고 시청은 무료 서비스 제공에 도움이 됩니다 🙏
                    </p>
                </div>
            </div>
        </div>
    );
}
