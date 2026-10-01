import React, { useState } from 'react';
import { X, Save, Eye, Edit3, Copy, Check, Download, Sparkles, BookOpen } from 'lucide-react';

export default function BlogCMSModal({ isOpen, onClose, onSavePost, initialPost = null }) {
  const [title, setTitle] = useState(initialPost ? initialPost.title : '');
  const [summary, setSummary] = useState(initialPost ? initialPost.summary : '');
  const [publication, setPublication] = useState(initialPost ? initialPost.publication : 'On-Site / Notes');
  const [tags, setTags] = useState(initialPost ? initialPost.tags.join(', ') : 'Compilers, Edge AI, Snapdragon');
  const [content, setContent] = useState(
    initialPost
      ? initialPost.content || ''
      : `## Introduction\n\nWriting technical notes directly from my compiler workstation. This article explores how on-device ML runtimes lower graph representations to physical silicon.\n\n### Key Concepts\n- Memory bandwidth vs Compute bounds\n- Ahead-of-time (AOT) context binary generation\n- Quantization aware training (QAT)\n\n\`\`\`python\nimport torch\n# Exporting model graph\nexported = torch.export.export(model, sample_args)\n\`\`\`\n\n### Summary\nDirect dispatch eliminates runtime overhead.`
  );
  const [activeTab, setActiveTab] = useState('write'); // 'write' or 'preview'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Calculate estimated read time
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 180));

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a blog post title');
      return;
    }

    const tagList = tags
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    const postData = {
      id: initialPost ? initialPost.id : `post-${Date.now()}`,
      title: title.trim(),
      summary: summary.trim() || title.trim(),
      publication: publication.trim() || 'On-Site / Notes',
      date: initialPost ? initialPost.date : new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      readTime: `${readTimeMinutes} min read`,
      tags: tagList.length > 0 ? tagList : ['Systems', 'DevRel'],
      content: content,
      isLocalDraft: true,
      url: '#', // Handled via Reader Modal
    };

    onSavePost(postData);
    onClose();
  };

  const insertMarkdown = (prefix, suffix = '') => {
    const textarea = document.getElementById('cms-content-editor');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end) || 'text';
    const replacement = `${prefix}${selected}${suffix}`;
    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);
  };

  const copyForMedium = () => {
    const fullArticle = `# ${title}\n\n*${summary}*\n\n**Published by Kartikey Rawat • ${publication} • ${readTimeMinutes} min read**\n\n---\n\n${content}`;
    navigator.clipboard.writeText(fullArticle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const fullArticle = `# ${title}\n\n*${summary}*\n\n**Published by Kartikey Rawat • ${publication}**\n\n---\n\n${content}`;
    const blob = new Blob([fullArticle], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'post'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#0f1118] border-2 border-gray-900 dark:border-gray-600 rounded-lg shadow-2xl p-5 sm:p-7 text-gray-900 dark:text-gray-100 font-hand animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
              <Edit3 className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-hand text-gray-900 dark:text-white leading-tight">
                {initialPost ? 'Edit Blog Post' : 'On-Site Blog Studio & CMS'}
              </h2>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-hand">
                &ldquo;write directly on your site or draft for Medium&rdquo;
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Form */}
        <form onSubmit={handleSave} className="space-y-4">
          
          {/* Post Title */}
          <div>
            <label className="block text-xs font-hand text-gray-700 dark:text-gray-300 font-bold mb-1">
              Blog Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Demystifying OpenXLA PJRT Plugin Lowering to Hexagon NPU"
              className="w-full px-3 py-2 text-base font-hand rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a26] text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Subtitle / Summary */}
          <div>
            <label className="block text-xs font-hand text-gray-700 dark:text-gray-300 font-bold mb-1">
              Subtitle &amp; Abstract
            </label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="e.g. Technical architectural trace of zero-copy buffer handoffs."
              className="w-full px-3 py-2 text-sm font-hand rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a26] text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Metadata Row: Publication & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-hand text-gray-700 dark:text-gray-300 font-bold mb-1">
                Publication Target
              </label>
              <select
                value={publication}
                onChange={(e) => setPublication(e.target.value)}
                className="w-full px-3 py-2 text-sm font-hand rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a26] text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
              >
                <option value="On-Site / Notes">On-Site / Notes (carrycooldude.github.io)</option>
                <option value="Medium (@carrycooldude)">Medium (@carrycooldude)</option>
                <option value="Google Developer Experts">Google Developer Experts</option>
                <option value="Qualcomm Developer Network">Qualcomm Developer Network</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-hand text-gray-700 dark:text-gray-300 font-bold mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="JAX, QNN, Compilers, Snapdragon"
                className="w-full px-3 py-2 text-sm font-hand rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a26] text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tabs: Write vs Preview */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pt-2 pb-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('write')}
                className={`px-3 py-1 text-sm font-hand rounded font-bold transition-colors ${
                  activeTab === 'write'
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Write (Markdown)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 text-sm font-hand rounded font-bold transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Whiteboard Preview
              </button>
            </div>

            <div className="text-xs font-mono text-gray-400">
              {wordCount} words &bull; ~{readTimeMinutes} min read
            </div>
          </div>

          {/* Quick Markdown Toolbar (When in write mode) */}
          {activeTab === 'write' && (
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-gray-50 dark:bg-[#161a26] border border-gray-200 dark:border-gray-800 rounded text-xs font-mono">
              <button
                type="button"
                onClick={() => insertMarkdown('## ')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold"
              >
                H2
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('### ')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold"
              >
                H3
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('**', '**')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold"
              >
                Bold
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('*', '*')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 italic"
              >
                Italic
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('`', '`')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                Code
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('```python\n', '\n```')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                Codeblock
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('> ')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('- ')}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                List
              </button>
            </div>
          )}

          {/* Editor Body or Preview Body */}
          {activeTab === 'write' ? (
            <textarea
              id="cms-content-editor"
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your article in Markdown..."
              className="w-full px-3 py-2.5 text-sm font-mono rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12151f] text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 leading-relaxed resize-y"
            />
          ) : (
            <div className="p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] max-h-96 overflow-y-auto font-hand text-sm space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                  {publication} &bull; {readTimeMinutes} min read
                </span>
                <h1 className="text-2xl font-bold font-hand text-gray-900 dark:text-white mt-1">
                  {title || 'Untitled Post'}
                </h1>
                {summary && (
                  <p className="text-sm font-hand text-gray-600 dark:text-gray-300 italic mt-1">
                    &ldquo;{summary}&rdquo;
                  </p>
                )}
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 font-hand whitespace-pre-wrap leading-relaxed">
                {content}
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyForMedium}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 text-xs font-hand text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors"
                title="Copy formatted Markdown ready for Medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied for Medium!' : 'Copy for Medium'}</span>
              </button>

              <button
                type="button"
                onClick={downloadMarkdown}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 text-xs font-hand text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors"
                title="Download article as .md file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export .md</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 rounded border border-gray-300 dark:border-gray-700 text-xs font-hand text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-blue-600 text-white font-hand font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Save className="w-4 h-4" />
                <span>Publish to Site</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
