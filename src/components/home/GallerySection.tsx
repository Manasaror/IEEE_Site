import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { galleryItems, type GalleryItem } from '../../data/gallery';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Projects', 'Workshops', 'Hackathons'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span>// VISUAL ARCHIVE</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Life Inside the Branch
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-900 text-left shadow-md transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
              />

              {/* Gradient Overlay */}
              <div className="from-navy-950 via-navy-950/40 absolute inset-0 bg-gradient-to-t to-transparent opacity-75 transition-opacity group-hover:opacity-90"></div>

              {/* Tag Callout */}
              <div className="absolute left-4 top-4">
                <span className="rounded-md border border-white/20 bg-white/20 px-2.5 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Zoom Icon on Hover */}
              <div className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </div>

              {/* Caption & Title */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
                  {item.title}
                </h3>
                <p className="line-clamp-2 text-xs leading-relaxed text-slate-300">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
          >
            <button
              type="button"
              className="fixed inset-0 -z-10 h-full w-full cursor-default bg-transparent"
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal overlay"
            />
            <div className="bg-navy-950 animate-in zoom-in-95 relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl duration-200">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-[70vh] w-full object-cover object-center"
              />

              <div className="bg-navy-950 p-6 text-white sm:p-8">
                <div className="mb-2 inline-block rounded bg-primary px-2.5 py-0.5 font-mono text-xs font-bold text-white">
                  {selectedItem.category} // {selectedItem.tag}
                </div>
                <h3 className="mb-2 text-2xl font-extrabold text-white">{selectedItem.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{selectedItem.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
