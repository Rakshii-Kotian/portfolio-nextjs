import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  Layers,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  FileDown,
} from "lucide-react";

// Inline Custom Icons to bypass Lucide brand export removals
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Rakshith K M
          </span>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            
            {/* Added Navbar Download Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/30 hover:bg-teal-500 hover:text-slate-950 transition-all text-xs font-semibold"
            >
              <FileDown className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for Opportunities
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
          Full Stack Developer specializing in <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            scalable web applications & APIs.
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          2.8+ years of experience architecting secure, high-performance web applications using Laravel, PHP, Python, React.js, and Angular. Proven track record in API development, Razorpay integrations, and database optimization.
        </p>

        {/* Added Resume, LinkedIn, and GitHub Button Row */}
        <div className="flex flex-wrap gap-4 my-2">
          <a 
            href="/resume.pdf" 
            download="Rakshith_KM_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-400 text-slate-950 font-semibold hover:bg-teal-300 transition-all text-sm shadow-lg shadow-teal-500/10"
          >
            <FileDown className="w-4 h-4" /> Download Resume
          </a>
          <a 
            href="https://linkedin.com/in/rakshith-k-m-51a475258" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all text-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-teal-400" /> LinkedIn
          </a>
          <a 
            href="https://github.com/Rakshii-Kotian" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all text-sm"
          >
            <GithubIcon className="w-4 h-4 text-teal-400" /> GitHub
          </a>
        </div>

        {/* Contact Information Links */}
        <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-400 border-t border-slate-900 w-full">
          <a href="mailto:rakshithkm0904@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
            <Mail className="w-4 h-4 text-teal-400" /> rakshithkm0904@gmail.com
          </a>
          <a href="tel:+919148732620" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
            <Phone className="w-4 h-4 text-teal-400" /> +91 9148732620
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-400" /> Shivamogga, Karnataka
          </span>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <Code2 className="text-teal-400" /> Technical Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-lg text-teal-400 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> Backend & APIs
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• PHP / Laravel</li>
              <li>• Python / Django / DRF</li>
              <li>• RESTful API Architecture</li>
              <li>• JWT Authentication</li>
              <li>• MVC Architecture & ORM</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-lg text-teal-400 mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5" /> Frontend & UI
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• React.js / Next.js</li>
              <li>• Angular & TypeScript</li>
              <li>• JavaScript (ES6+) / jQuery</li>
              <li>• HTML5 / CSS3 / Bootstrap 5</li>
              <li>• Responsive Design & AG Grid</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-lg text-teal-400 mb-4 flex items-center gap-2">
              <Database className="w-5 h-5" /> Databases & DevOps
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• MySQL / PostgreSQL / MS SQL</li>
              <li>• Razorpay Payment Integration</li>
              <li>• Magento API Integrations</li>
              <li>• Azure DevOps / Git / Jira</li>
              <li>• Postman / WinSCP</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <Briefcase className="text-teal-400" /> Work Experience
        </h2>

        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100">Full Stack Developer</h3>
              <p className="text-teal-400 font-medium">Step In Technologies • Shivamogga, Karnataka</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 w-fit mt-2 md:mt-0">
              Oct 2023 – Present (2.8+ Years)
            </span>
          </div>

          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              Collaborated in a cross-functional team of 5–6 engineers to architect and ship 4+ production applications across ERP, finance, and inventory domains.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              Designed RESTful APIs and integrated Razorpay payment gateway to support secure transactions across multiple client platforms.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              Architected and optimized MySQL schemas, significantly improving query execution speeds and overall data integrity.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              Integrated Magento API for seed inventory synchronization and managed releases using Azure DevOps CI/CD pipelines.
            </li>
          </ul>
        </div>
      </section>

      {/* Key Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <Layers className="text-teal-400" /> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Education ERP Solutions</h3>
              <p className="text-slate-400 text-sm mb-4">
                Automated attendance, section allocation, staff leave management, and built an automated result generation engine reducing manual academic efforts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300 pt-4 border-t border-slate-800/80">
              <span>PHP</span> • <span>Laravel</span> • <span>MySQL</span> • <span>Bootstrap</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Finance Management System</h3>
              <p className="text-slate-400 text-sm mb-4">
                Loan management platform with interest calculation modules. Coupled a React.js frontend with Laravel REST APIs for real-time financial tracking.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300 pt-4 border-t border-slate-800/80">
              <span>React.js</span> • <span>Laravel</span> • <span>REST APIs</span> • <span>MySQL</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Inventory Management System</h3>
              <p className="text-slate-400 text-sm mb-4">
                End-to-end inventory platform featuring Lot-tracking modules and integrated Magento open-source API for seamless product synchronization.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300 pt-4 border-t border-slate-800/80">
              <span>PHP</span> • <span>Laravel</span> • <span>Magento API</span> • <span>MSSQL</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Warehouse Management System (WMS)</h3>
              <p className="text-slate-400 text-sm mb-4">
                Full-stack personal project with Angular & Django REST Framework. Features JWT-authenticated endpoints and AG Grid tracking.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-teal-300 pt-4 border-t border-slate-800/80">
              <span>Angular</span> • <span>Django REST</span> • <span>PostgreSQL</span> • <span>AG Grid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <GraduationCap className="text-teal-400" /> Education
        </h2>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-slate-400 text-sm">Kuvempu University, Shankaraghatta</p>
          </div>
          <div className="text-right">
            <span className="text-teal-400 font-bold text-lg">73.5%</span>
            <p className="text-slate-500 text-xs">Graduated 2021</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col gap-3 items-center">
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/rakshith-k-m-51a475258" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-1">
            <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
          </a>
          •
          <a href="https://github.com/Rakshii-Kotian" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-1">
            <GithubIcon className="w-3.5 h-3.5" /> GitHub
          </a>
          •
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-1">
            <FileDown className="w-3.5 h-3.5" /> Resume
          </a>
        </div>
        <p>© {new Date().getFullYear()} Rakshith K M. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}