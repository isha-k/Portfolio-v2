"use client"
import React, { useEffect, useRef } from 'react';

interface SnowflakeCursorOptions {
  element?: HTMLElement;
}

const SnowflakeCursor: React.FC<SnowflakeCursorOptions> = ({ element }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const canvImages = useRef<HTMLCanvasElement[]>([]); 
  const animationFrame = useRef<number | null>(null);
  const prefersReducedMotion = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    // Check if window is defined (to ensure code runs on client-side)
    if (typeof window === 'undefined') return;

    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    const targetElement = element || document.body;

    canvas.style.position = element ? 'absolute' : 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';

    targetElement.appendChild(canvas);
    canvasRef.current = canvas;

    const setCanvasSize = () => {
      canvas.width = element ? targetElement.clientWidth : window.innerWidth;
      canvas.height = element ? targetElement.clientHeight : window.innerHeight;
    };

    const createDustImages = () => {
      const img = new Image();
      img.src = '/images/sparkle.png'; // Path to your image

      img.onload = () => {
        // Create a new canvas for the image
        const bgCanvas = document.createElement('canvas');
        const bgContext = bgCanvas.getContext('2d');
        if (!bgContext) return;

        // Set the canvas size to the image size
        bgCanvas.width = img.width;
        bgCanvas.height = img.height;

        // Draw the image on the canvas
        bgContext.drawImage(img, 0, 0);

        // Push the canvas to the canvImages array
        canvImages.current.push(bgCanvas);
      };
    };

    const addParticle = (x: number, y: number) => {
      const randomImage =
        canvImages.current[ Math.floor(Math.random() * canvImages.current.length) ];
      particles.current.push(new Particle(x, y, randomImage));
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = element
        ? e.clientX - targetElement.getBoundingClientRect().left
        : e.clientX;
      const y = element
        ? e.clientY - targetElement.getBoundingClientRect().top
        : e.clientY;
      addParticle(x, y);
    };

    const updateParticles = () => {
      if (!context || !canvas) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        particle.update(context);
        if (particle.lifeSpan < 0) {
          particles.current.splice(index, 1);
        }
      });
    };

    const animationLoop = () => {
      updateParticles();
      animationFrame.current = requestAnimationFrame(animationLoop);
    };

    const init = () => {
      if (prefersReducedMotion.current?.matches) return;

      setCanvasSize();
      createDustImages();

      targetElement.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', setCanvasSize);

      animationLoop();
    };

    const destroy = () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      targetElement.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', setCanvasSize);
    };

    prefersReducedMotion.current.onchange = () => {
      if (prefersReducedMotion.current?.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();
    return () => destroy();
  }, [element]);

  return null;
};

/**
 * Particle Class
 */
class Particle {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  lifeSpan: number;
  initialLifeSpan: number;
  canv: HTMLCanvasElement;
  size: number;

  constructor(x: number, y: number, canvasItem: HTMLCanvasElement) {
    this.position = { x, y };
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1 + Math.random(),
    };
    this.lifeSpan = Math.floor(Math.random() * 60 + 80);  // Random lifeSpan between 80 and 140
    this.initialLifeSpan = this.lifeSpan;
    this.canv = canvasItem;
    this.size = Math.random() * 0.03;
  }

  update(context: CanvasRenderingContext2D) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;

    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 300;

    const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
    const opacity = scale;  // Gradual opacity fade based on lifespan

    context.save();
    context.translate(this.position.x, this.position.y);

    // Apply opacity
    context.globalAlpha = opacity;  // Set the opacity to gradually fade out

    context.scale(this.size, this.size);
    context.drawImage(this.canv, -this.canv.width / 2, -this.canv.height / 2);

    context.restore();
  }
}

export default SnowflakeCursor;
