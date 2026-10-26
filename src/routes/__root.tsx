import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  HeadContent,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { WelcomeSplash } from "../components/WelcomeSplash";
import { CustomCursor } from "../components/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <CustomCursor />
      <WelcomeSplash />
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919890813587?text=Hello%20Nakshikar's%20Studio!%20I%20would%20like%20to%20inquire%20about%20your%20art%20and%20interior%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 hover:shadow-emerald-500/30 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping group-hover:animate-none -z-10" />
        
        {/* Tooltip message */}
        <span className="absolute right-16 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
          Chat with us
        </span>
        
        {/* WhatsApp SVG Icon */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.748.002-2.602-1.01-5.05-2.85-6.892-1.837-1.84-4.285-2.855-6.885-2.855-5.442 0-9.866 4.372-9.87 9.752 0 1.74.476 3.439 1.382 4.966l-.952 3.475 3.565-.928zm11.367-6.851c-.29-.144-1.711-.832-1.976-.927-.264-.096-.456-.144-.648.144-.192.288-.744.927-.912 1.12-.168.192-.336.216-.624.072-.288-.144-1.217-.441-2.318-1.413-.856-.753-1.434-1.684-1.602-1.972-.168-.288-.018-.444.126-.586.13-.128.29-.336.434-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.136-.233-.564-.47-.488-.648-.497-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.399 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.06 4.921 4.296.687.293 1.224.468 1.643.6.69.219 1.319.188 1.817.113.553-.083 1.711-.69 1.951-1.356.24-.666.24-1.238.168-1.356-.072-.119-.264-.192-.552-.337z" />
        </svg>
      </a>
    </QueryClientProvider>
  );
}
