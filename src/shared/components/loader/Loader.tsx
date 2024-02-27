import React, { useRef, useEffect } from 'react';
import './Loader.scss';

interface UserScoreProps {
  width: number;
  percent: number;
}

const Loader: React.FC<UserScoreProps> = ({ width, percent }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawClock = (ctx: CanvasRenderingContext2D) => {
    const radius = width / 2;
    const startAngle = -Math.PI / 2;
    const endAngle = -Math.PI / 2 + (Math.PI * percent) / 50;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#E8EAF2';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = '#E4229C';
    ctx.fill();
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      drawClock(ctx);
    } else {
      console.error('Canvas context is not available.');
    }
  }, [percent]); // Запускати ефект при зміні percent

  return (
    <div
      className="outer-ring"
      style={{ width: width * 1.1, height: width * 1.1 }}
    >
      <div
        className="percent"
        style={{ width: width * 0.9, height: width * 0.9 }}
      >
        <span style={{ fontSize: width * 0.2 }}>{Math.round(percent)}</span>
        <sup style={{ fontSize: width * 0.2 }}>%</sup>
      </div>
      <canvas ref={canvasRef} width={width} height={width}></canvas>
    </div>
  );
};

export default Loader;
