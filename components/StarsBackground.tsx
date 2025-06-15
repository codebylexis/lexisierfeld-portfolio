'use client';

import { useEffect } from 'react';

export default function StarsBackground() {
  useEffect(() => {
    const canvas = document.getElementById('stars') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }, []);

  return (
    <canvas
      id="stars"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
