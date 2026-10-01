import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import {
  Navbar,
  Hero,
  HandwrittenSketch,
  BlogsSection,
  PackagesSection,
  ProjectsSection,
  TalksSection,
  PodcastsSection,
  ExperienceSection,
  ContactSection,
  Footer,
  KernelMarginalia
} from "./components";
import SubWebsiteView from "./components/SubWebsiteView";
import AuthModal from "./components/AuthModal";

function getActiveView() {
  if (typeof window === "undefined") return "all";
  
  // Check ?view= parameter
  const searchParams = new URLSearchParams(window.location.search);
  const viewParam = searchParams.get("view");
  if (viewParam && ["writing", "packages", "projects", "talks", "podcasts", "studio"].includes(viewParam.toLowerCase())) {
    return viewParam.toLowerCase();
  }

  // Check #hash parameter
  const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  if (["writing", "packages", "projects", "talks", "podcasts", "studio"].includes(hash)) {
    return hash;
  }

  return "all";
}

const PortfolioContent = () => {
  const [currentView, setCurrentView] = useState(getActiveView);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentView(getActiveView());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigateHome = () => {
    window.history.pushState({}, "", window.location.pathname);
    setCurrentView("all");
  };

  // If a specific sub-website is requested (via ?view=writing, ?view=packages, etc.), render that isolated view!
  if (currentView !== "all") {
    return (
      <>
        <SubWebsiteView view={currentView} onNavigateHome={navigateHome} />
        <AuthModal />
      </>
    );
  }

  // Otherwise render full master portfolio
  return (
    <div className="min-h-screen bg-white text-[#18181b] dark:bg-[#0c0e14] dark:text-[#f1f5f9] font-hand selection:bg-red-100 selection:text-red-900 dark:selection:bg-blue-900 dark:selection:text-white transition-colors duration-200 relative">
      <Navbar />
      <KernelMarginalia />
      <main>
        <Hero />
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <HandwrittenSketch />
        </div>
        <BlogsSection />
        <PackagesSection />
        <ProjectsSection />
        <TalksSection />
        <PodcastsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <AuthModal />
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white dark:bg-[#0c0e14] text-[#18181b] dark:text-white font-hand">
          <div className="p-6 rounded border-2 border-red-500 max-w-lg text-center space-y-3">
            <h2 className="text-2xl font-bold text-red-600">whiteboard note reload</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A temporary rendering glitch occurred: {this.state.error?.message}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = window.location.pathname;
              }}
              className="px-4 py-2 rounded bg-blue-600 text-white font-bold text-sm hover:bg-blue-700"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <PortfolioContent />
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;