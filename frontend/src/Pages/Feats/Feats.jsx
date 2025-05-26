import React, { useEffect } from "react";
import Blogs from "./Blogs/Blogs";
import "../customCSS.css";

const Feats = () => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas-feats");
    const ctx = canvas.getContext("2d");
    const rect = document
      .querySelector(".feats-big-container")
      .getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;
    const max_radius = 30;
    const min_radius = 15;

    const circles = Array.from(
      { length: (canvas.width * canvas.height) / (300 * 300) },
      () => {
        const myColor = Math.abs(Math.random() * 360);
        const opacity = Math.random() * 0.5 * 1.5;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * max_radius + min_radius,
          myColor: myColor,
          opacity,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 4,
          dr: 0.1,
          dcolor: 0.2,

          color: `hsl(${myColor},100%,85%,${opacity})`,
        };
      }
    );

    const drawCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => {
        // ctx.shadowColor = "rgba(0, 0, 0, 0.2)"; // Shadow color (semi-transparent black)
        // ctx.shadowBlur = 5; // Blur effect (higher value = softer shadow)
        // ctx.shadowOffsetX = 5; // Horizontal shadow offset
        // ctx.shadowOffsetY = 5;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
    };
    const updateCircles = () => {
      circles.forEach((circle) => {
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.radius += circle.dr;
        circle.myColor = (circle.myColor % 360) + circle.dcolor;
        circle.color = `hsl(${circle.myColor},100%,100%,${circle.opacity})`;

        //Bouncing
        if (circle.radius > max_radius) {
          circle.radius = max_radius;
          circle.dr = -circle.dr;
        }
        if (circle.radius < min_radius) {
          circle.radius = min_radius;
          circle.dr = -circle.dr;
        }
        if (
          circle.x + circle.radius >= canvas.width ||
          circle.x - circle.radius <= 0
        ) {
          circle.dx = -circle.dx;
        }
        if (
          circle.y + circle.radius >= canvas.width ||
          circle.y - circle.radius <= 0
        ) {
          circle.dy = -circle.dy;
        }
      });
    };

    let hasanimate = false;
    const animate = () => {
      if (hasanimate) {
        return;
      }
      hasanimate = true;
      const loop = () => {
        drawCircles();
        updateCircles();
        requestAnimationFrame(loop);
      };
      loop();
    };
    animate();
  }, []);

  return (
    <div className="bg-gradient-custom-feats h-full flex justify-center items-center feats-big-container relative z-1">
      <canvas id="canvas-feats" className="absolute top-0 left-0 z-0"></canvas>
      <div className="flex justify-center items-center w-[full] h-full">
        <div className="flex justify-center items-center feats-big-container-gsap min-w-[95vw] min-h-[70vh] flex-col">
          <h3 className="underline underline-offset-8 text-3xl opacity-100 lg:opacity-100 tittilium-web  mx-8 mt-20 ">
            My FEATS/PROJECTS
          </h3>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Feats;
