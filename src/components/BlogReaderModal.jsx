import React from 'react';
import { X, ExternalLink, Copy, Check, Edit2, Trash2 } from 'lucide-react';

export default function BlogReaderModal({ post, isOpen, onClose, onEdit, onDelete }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !post) return null;

  const copyContent = () => {
    navigator.clipboard.writeText(post.content || post.summary || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openInNewWindow = () => {
    const newWindow = window.open('', '_blank');
    if (!newWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${post.title} — Kartikey Rawat</title>
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Kalam', cursive, sans-serif;
            background-color: #ffffff;
            color: #18181b;
            max-width: 720px;
            margin: 40px auto;
            padding: 0 20px;
            line-height: 1.7;
          }
          h1 { font-size: 2.2rem; margin-bottom: 0.5rem; line-height: 1.2; }
          .subtitle { color: #2563eb; font-size: 1.15rem; margin-bottom: 1.5rem; font-style: italic; }
          .meta { color: #71717a; font-size: 0.85rem; font-family: 'JetBrains Mono', monospace; border-bottom: 1px solid #e4e4e7; padding-bottom: 1rem; margin-bottom: 2rem; }
          .tag { background: #f4f4f5; border: 1px solid #e4e4e7; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 6px; }
          pre { background: #18181b; color: #f4f4f5; padding: 16px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; overflow-x: auto; }
          code { font-family: 'JetBrains Mono', monospace; background: #f4f4f5; padding: 2px 5px; border-radius: 3px; font-size: 0.85em; }
          pre code { background: transparent; padding: 0; }
          blockquote { border-left: 3px solid #2563eb; padding-left: 1rem; color: #52525b; font-style: italic; margin: 1.5rem 0; }
          .footer { margin-top: 3rem; border-top: 1px solid #e4e4e7; padding-top: 1.5rem; color: #71717a; font-size: 0.9rem; }
          a { color: #2563eb; text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="meta">
          <span>${post.publication}</span> &bull; 
          <span>${post.date}</span> &bull; 
          <span>${post.readTime}</span> &bull; 
          <span>By Kartikey Rawat</span>
        </div>
        <h1>${post.title}</h1>
        ${post.summary ? `<div class="subtitle">&ldquo;${post.summary}&rdquo;</div>` : ''}
        
        <div style="margin-bottom: 2rem;">
          ${(post.tags || []).map(t => `<span class="tag">#${t}</span>`).join('')}
        </div>

        <div style="white-space: pre-wrap; font-size: 1.05rem;">${post.content || post.summary}</div>

        <div class="footer">
          <p>Written by <strong>Kartikey Rawat</strong> — Developer Relations Engineer at Qualcomm.</p>
          <p><a href="https://topmate.io/carrycooldude" target="_blank">Book 1:1 Mentorship on Topmate</a> &bull; <a href="https://medium.com/@carrycooldude" target="_blank">Read more on Medium</a></p>
        </div>
      </body>
      </html>
    `;

    newWindow.document.write(htmlContent);
    newWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#0f1118] border-2 border-gray-900 dark:border-gray-600 rounded-lg shadow-2xl p-6 sm:p-8 text-gray-900 dark:text-gray-100 font-hand animate-in fade-in zoom-in-95 duration-150">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              {post.publication}
            </span>
            <span className="font-mono text-xs text-gray-400">
              {post.date} &bull; {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={openInNewWindow}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-hand rounded border border-gray-300 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
              title="Open full article in a brand new browser window"
            >
              <span>New Window</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={copyContent}
              className="p-1.5 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="Copy markdown text"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>

            {post.isLocalDraft && onEdit && (
              <button
                onClick={() => onEdit(post)}
                className="p-1.5 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Edit this post"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            )}

            {post.isLocalDraft && onDelete && (
              <button
                onClick={() => {
                  if (confirm('Delete this post from your site?')) {
                    onDelete(post.id);
                    onClose();
                  }
                }}
                className="p-1.5 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                title="Delete this post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title and Marginalia */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white leading-tight mb-2">
            {post.title}
          </h1>
          {post.summary && (
            <p className="font-hand text-base text-blue-600 dark:text-blue-400 italic">
              &ldquo;{post.summary}&rdquo;
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mt-3">
            {(post.tags || []).map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-5 pb-6 text-gray-800 dark:text-gray-200 font-hand text-base sm:text-lg leading-relaxed whitespace-pre-wrap max-h-[60vh] overflow-y-auto pr-2">
          {post.content || post.summary}
        </div>

        {/* Footer Note */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-hand text-gray-500 gap-2">
          <span className="text-green-700 dark:text-green-400">
            Author: Kartikey Rawat &bull; DevRel at Qualcomm
          </span>
          <button
            onClick={openInNewWindow}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-bold"
          >
            <span>Open in dedicated browser window</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
