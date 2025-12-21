import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export default function BlogListPage() {
    const categories = Array.from(new Set(blogPosts.map(post => post.category)));

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        재테크 블로그
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        전문가가 알려주는 자산 관리 노하우
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="glass-card p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            {/* Category Badge */}
                            <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold rounded-full mb-4">
                                {post.category}
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map(tag => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read More */}
                            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all">
                                <span>자세히 보기</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
