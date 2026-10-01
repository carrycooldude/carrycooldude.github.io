import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Edit3, BookOpen, Sparkles, Plus } from 'lucide-react';
import { articles as initialArticles, personalInfo } from '../data/portfolioData';
import { useAuth } from '../context/AuthContext';
import BlogCMSModal from './BlogCMSModal';
import BlogReaderModal from './BlogReaderModal';

const LOCAL_STORAGE_KEY = 'carrycooldude_custom_blogs';

export default function BlogsSection() {
  const { isAuthenticated, openAuthModal } = useAuth();
  const [customPosts, setCustomPosts] = useState([]);
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [readingPost, setReadingPost] = useState(null);

  // Load custom blogs from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setCustomPosts(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load custom posts', e);
    }
  }, []);

  const handleSavePost = (newPost) => {
    let updated;
    const exists = customPosts.some((p) => p.id === newPost.id);
    if (exists) {
      updated = customPosts.map((p) => (p.id === newPost.id ? newPost : p));
    } else {
      updated = [newPost, ...customPosts];
    }
    setCustomPosts(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeletePost = (id) => {
    const updated = customPosts.filter((p) => p.id !== id);
    setCustomPosts(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to delete from localStorage', e);
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setReadingPost(null);
    setIsCMSOpen(true);
  };

  // Combine custom posts (at the top) with curated Medium & GDE posts
  const allPosts = [...customPosts, ...initialArticles];

  return (
    <section id="writing" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Handwritten Styling & CMS Action */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8 border-b border-gray-100 dark:border-gray-800/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Writing &amp; Technical Notes
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;compiler architecture traces, NPU benchmarks &amp; on-device AI essays&rdquo;
            </p>
          </div>

          {/* "+ Write Blog / CMS Studio" Button - ONLY visible to authenticated owner */}
          {isAuthenticated && (
            <button
              onClick={() => {
                setEditingPost(null);
                setIsCMSOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border-2 border-green-600 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 font-hand font-bold text-sm hover:scale-105 transition-all shadow-sm shrink-0"
              title="Write new blog post through on-site CMS"
            >
              <Plus className="w-4 h-4" />
              <span>+ Write Post (CMS)</span>
            </button>
          )}
        </div>

        {/* Articles List Styled with Handwritten Felt-Tip Notebook Aesthetic */}
        <div className="space-y-6">
          {allPosts.map((art, idx) => {
            const isCustom = !!art.isLocalDraft;

            return (
              <article
                key={art.id || idx}
                className="group p-4 sm:p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm hover:border-gray-400 dark:hover:border-gray-700 transition-all select-none"
              >
                {/* Meta Marginalia */}
                <div className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-1.5 flex flex-wrap items-center gap-2">
                  <span>{art.date}</span>
                  <span>&bull;</span>
                  <span>{art.readTime}</span>
                  <span>&bull;</span>
                  <span className={`font-semibold ${isCustom ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {isCustom ? `[On-Site / CMS Studio]` : art.publication}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-hand font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
                  {isCustom ? (
                    <button
                      onClick={() => setReadingPost(art)}
                      className="text-left inline-flex items-baseline gap-1"
                    >
                      <span>{art.title}</span>
                      <BookOpen className="w-4 h-4 text-green-600 opacity-60 group-hover:opacity-100 transition-opacity translate-y-0.5" />
                    </button>
                  ) : (
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-1"
                      title="Open article on Medium / GDE in new window"
                    >
                      <span>{art.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity translate-y-0.5" />
                    </a>
                  )}
                </h3>

                {/* Article Summary */}
                <p className="text-sm font-hand text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {art.summary}
                </p>

                {/* Tags and Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {art.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/80 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 font-hand text-xs">
                    {isCustom ? (
                      <>
                        <button
                          onClick={() => setReadingPost(art)}
                          className="text-blue-600 dark:text-blue-400 hover:underline font-bold inline-flex items-center gap-1"
                        >
                          <span>Read Full Note ↗</span>
                        </button>
                        {isAuthenticated && (
                          <button
                            onClick={() => handleEditPost(art)}
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            Edit
                          </button>
                        )}
                      </>
                    ) : (
                      <a
                        href={art.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-bold inline-flex items-center gap-0.5"
                      >
                        <span>Open on {art.publication.split(' ')[0]}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Writing on Medium */}
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center justify-between text-sm font-hand">
          <a
            href={personalInfo.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
          >
            <span>All 20+ articles on Medium (@{personalInfo.handle})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <span className="text-xs text-gray-500">
            // opens in new window
          </span>
        </div>

      </div>

      {/* CMS Modal */}
      <BlogCMSModal
        isOpen={isCMSOpen}
        onClose={() => {
          setIsCMSOpen(false);
          setEditingPost(null);
        }}
        onSavePost={handleSavePost}
        initialPost={editingPost}
      />

      {/* Reader Modal */}
      <BlogReaderModal
        isOpen={!!readingPost}
        post={readingPost}
        onClose={() => setReadingPost(null)}
        onEdit={handleEditPost}
        onDelete={handleDeletePost}
      />
    </section>
  );
}
