import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { GithubIcon } from '../common/Icons';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Robotics', 'IoT', 'AI/ML', 'Power & Energy'];

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const companionProjects = projects.filter((p) => !p.featured);

  if (!featuredProject) {
    return null;
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span>// ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Featured Technical Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 sm:text-base">
            Hardware prototypes, autonomous robotics systems, and edge algorithms built from scratch
            by IEEE GBPIET students.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* If 'All' is selected, show Asymmetric Featured Hero Card + Grid */}
        {selectedCategory === 'All' ? (
          <div className="space-y-8">
            {/* LARGE FEATURED PROJECT CARD */}
            <div className="bg-navy-950 overflow-hidden rounded-3xl border border-white/10 text-white shadow-2xl transition-all duration-300 hover:border-cyan-400/40">
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                {/* Visual Half */}
                <div className="group relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:col-span-7">
                  <img
                    src={featuredProject.imageUrl}
                    alt={featuredProject.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="from-navy-950/90 lg:to-navy-950 absolute inset-0 bg-gradient-to-t via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent"></div>

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 font-mono text-xs font-bold text-cyan-300 backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
                    <span>FLAGSHIP PROTOTYPE</span>
                  </div>
                </div>

                {/* Content Half */}
                <div className="bg-navy-950 flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded bg-primary/30 px-2.5 py-0.5 font-mono text-xs font-semibold text-cyan-300">
                        {featuredProject.category}
                      </span>
                      <span className="font-mono text-xs font-medium text-emerald-400">
                        ● {featuredProject.status}
                      </span>
                    </div>

                    <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {featuredProject.title}
                    </h3>

                    {featuredProject.subtitle && (
                      <p className="mb-4 font-mono text-xs text-cyan-400">
                        {featuredProject.subtitle}
                      </p>
                    )}

                    <p className="mb-6 text-sm leading-relaxed text-slate-300">
                      {featuredProject.description}
                    </p>

                    {/* Hardware Specs Grid */}
                    {featuredProject.specs && (
                      <div className="mb-6 grid grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                        {featuredProject.specs.map((spec) => (
                          <div key={spec.label}>
                            <div className="font-mono text-[10px] uppercase text-slate-400">
                              {spec.label}
                            </div>
                            <div className="mt-0.5 text-xs font-bold text-white">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technology Pills */}
                    <div className="mb-8 flex flex-wrap gap-1.5">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1 font-mono text-[11px] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <a
                      href="/projects"
                      className="text-navy-950 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold transition-all hover:bg-cyan-400"
                    >
                      <span>Explore Rover Architecture</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    {featuredProject.repoUrl && (
                      <a
                        href={featuredProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/15 bg-white/5 p-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="View Project Source on GitHub"
                      >
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* COMPANION PROJECTS GRID */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {companionProjects.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-navy-950/80 absolute left-3 top-3 rounded-md border border-white/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="mb-1 font-mono text-xs font-semibold text-primary">
                        ● {project.status}
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">
                        {project.title}
                      </h4>
                      <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <a
                        href="/projects"
                        className="group-hover:text-primary-dark inline-flex items-center gap-1.5 text-xs font-bold text-primary"
                      >
                        <span>View Project</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-700"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Filtered Grid */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="bg-navy-950/80 absolute left-3 top-3 rounded-md border border-white/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">
                      {project.title}
                    </h4>
                    <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <a
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary"
                    >
                      <span>View Project</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
