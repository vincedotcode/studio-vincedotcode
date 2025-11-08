"use client"

import { useEffect, useRef } from "react"

interface SquaresBackgroundProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left"
  borderColor?: string
  hoverColor?: string
  size?: number
  speed?: number
  className?: string
}

export function SquaresBackground({
  direction = "diagonal",
  borderColor = "rgba(128, 128, 128, 0.2)",
  hoverColor = "rgba(34, 197, 94, 0.3)",
  size = 40,
  speed = 0.5,
  className = "",
}: SquaresBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setCanvasSize()

    const cols = Math.ceil(canvas.width / size)
    const rows = Math.ceil(canvas.height / size)
    const squares: { x: number; y: number; opacity: number; targetOpacity: number }[] = []

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        squares.push({
          x: i * size,
          y: j * size,
          opacity: 0,
          targetOpacity: 0,
        })
      }
    }

    let animationFrame: number
    let lastTime = 0

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      squares.forEach((square) => {
        // Smooth opacity transition
        const diff = square.targetOpacity - square.opacity
        square.opacity += diff * speed * (deltaTime / 16)

        if (Math.abs(diff) < 0.01) {
          square.opacity = square.targetOpacity
        }

        if (square.opacity > 0.01) {
          ctx.strokeStyle = square.opacity > 0.5 ? hoverColor : borderColor
          ctx.globalAlpha = square.opacity
          ctx.strokeRect(square.x, square.y, size, size)
        }
      })

      ctx.globalAlpha = 1
      animationFrame = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      squares.forEach((square) => {
        const distance = Math.sqrt(
          Math.pow(mouseX - (square.x + size / 2), 2) + Math.pow(mouseY - (square.y + size / 2), 2),
        )
        const maxDistance = size * 3

        if (distance < maxDistance) {
          square.targetOpacity = 1 - distance / maxDistance
        } else {
          square.targetOpacity = 0
        }
      })
    }

    const handleMouseLeave = () => {
      squares.forEach((square) => {
        square.targetOpacity = 0
      })
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", setCanvasSize)

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [direction, borderColor, hoverColor, size, speed])

  return (
    <canvas ref={canvasRef} className={`pointer-events-auto ${className}`} style={{ width: "100%", height: "100%" }} />
  )
}
