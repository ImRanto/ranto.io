"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Détection des éléments interactifs
    const handleLinkHover = () => setLinkHovered(true);
    const handleLinkLeave = () => setLinkHovered(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHover);
      el.addEventListener("mouseleave", handleLinkLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  const cursorClasses = [
    "custom-cursor",
    clicked ? "click-effect" : "",
    hovered ? "hover-effect" : "",
    linkHovered ? "link-hover" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)${clicked ? " scale(0.7)" : ""}`,
      }}
    />
  );
};

export default CustomCursor;
