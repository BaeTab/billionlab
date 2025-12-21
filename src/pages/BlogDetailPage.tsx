import { useParams, Link } from 'react-router-dom';
import { getBlogPost } from '../data/blogPosts';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPost(slug) : undefined;

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        포스트를 찾을 수 없습니다
                    </h1>
                    <Link to="/blog" className="text-primary-600 hover:text-primary-700">
                        블로그 목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Category Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-full mb-6">
                    {post.category}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map(tag => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                            <Tag className="w-4 h-4" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="glass-card p-8">
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => (
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children }) => (
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                                        {children}
                                    </ol>
                                ),
                                strong: ({ children }) => (
                                    <strong className="font-bold text-primary-600 dark:text-primary-400">
                                        {children}
                                    </strong>
                                ),
                                code: ({ children }) => (
                                    <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
                                        {children}
                                    </code>
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        지금 바로 계산해보세요!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        빌리언랩의 계산기로 당신만의 재무 계획을 세워보세요
                    </p>
                    <Link
                        to="/home"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        계산기 사용하기
                    </Link>
                </div>
            </article>
        </div>
    );
}
