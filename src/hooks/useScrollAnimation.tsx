import { useEffect, useRef } from 'react';

export const useScrollAnimation = (animationClass = 'animate-fade-in-up', triggerOnce = true) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          if (triggerOnce) observer.unobserve(entry.target);
        } else if (!triggerOnce) {
          entry.target.classList.remove(animationClass);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animationClass, triggerOnce]);

  return ref;
};


export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const handleScroll = () => {
      ref.current!.style.transform = `translateY(${window.scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};


export const useStaggerAnimation = (items: unknown[], animationClass = 'animate-fade-in-up', delay = 100) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach((child, i) => {
          setTimeout(() => child.classList.add(animationClass), i * delay);
        });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animationClass, delay]);

  return containerRef;
};
