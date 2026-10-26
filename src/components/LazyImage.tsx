import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  isPriority?: boolean;
  onClick?: () => void;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  containerClassName = "",
  isPriority = false,
  onClick,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(isPriority);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-stone-200/70 dark:bg-stone-800/70 ${containerClassName}`}
    >
      {/* Animated Shimmer Skeleton placeholder for below-the-fold/lazy images */}
      {!isLoaded && !isPriority && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer z-10 pointer-events-none" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={isPriority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={isPriority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${
          isPriority
            ? "opacity-100 scale-100 filter-none"
            : `transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-[1.02] blur-sm"
              }`
        }`}
      />
    </div>
  );
}
