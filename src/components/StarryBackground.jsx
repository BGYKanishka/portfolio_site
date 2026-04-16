import React, { useEffect, useRef } from 'react';

export default function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const stars = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: (Math.random() * 0.02) + 0.005, 
      });
    }

    let shootingStar = {
      active: false,
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      opacity: 0
    };

    const spawnShootingStar = () => {
      shootingStar.active = true;
      shootingStar.x = Math.random() * canvas.width;
      shootingStar.y = 0; 
      shootingStar.length = (Math.random() * 80) + 20;
      shootingStar.speed = (Math.random() * 10) + 5;
      shootingStar.opacity = 1;
    };

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.opacity += star.speed;
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.speed = -star.speed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Handle falling star
      if (shootingStar.active) {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.length, shootingStar.y + shootingStar.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed;
        shootingStar.opacity -= 0.02;

        if (shootingStar.opacity <= 0) {
          shootingStar.active = false;
        }
      } else {
        if (Math.random() < 0.005) { 
          spawnShootingStar();
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none bg-[#0a0a0a]"
    />
  );
}