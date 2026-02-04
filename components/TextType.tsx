"use client"

import React, { useState, useEffect } from "react"
import "./TextType.css"

interface TextTypeProps {
  text: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
  cursorCharacter?: string
  className?: string
  variableSpeedEnabled?: boolean
  variableSpeedMin?: number
  variableSpeedMax?: number
  cursorBlinkDuration?: number
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  variableSpeedEnabled = false,
  variableSpeedMin = 50,
  variableSpeedMax = 150,
  cursorBlinkDuration = 0.8,
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [isCursorVisible, setIsCursorVisible] = useState(true)

  // Blinking cursor logic
  useEffect(() => {
    if (!showCursor) return

    const interval = setInterval(() => {
      setIsCursorVisible((prev) => !prev)
    }, cursorBlinkDuration * 1000)

    return () => clearInterval(interval)
  }, [showCursor, cursorBlinkDuration])

  // Typing logic
  useEffect(() => {
    const currentText = text[textIndex % text.length]
    let timer: NodeJS.Timeout

    let speed = typingSpeed

    if (isDeleting) {
      speed = deletingSpeed
    } else if (variableSpeedEnabled) {
      speed =
        Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) +
        variableSpeedMin
    }

    // Determine state change or typing action
    if (!isDeleting && displayedText === currentText) {
      speed = pauseDuration
    } else if (isDeleting && displayedText === "") {
      speed = 200 // Short pause before typing next
    }

    timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentText) {
        setIsDeleting(true)
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false)
        setTextIndex((prev) => prev + 1)
      } else {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentText.substring(0, prev.length - 1)
          } else {
            return currentText.substring(0, prev.length + 1)
          }
        })
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [
    displayedText,
    isDeleting,
    textIndex,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    variableSpeedEnabled,
    variableSpeedMin,
    variableSpeedMax,
  ])

  return (
    <span className={`text-type ${className}`}>
      {displayedText}
      {showCursor && (
        <span
          className={`text-type__cursor ${!isCursorVisible ? "text-type__cursor--hidden" : ""}`}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  )
}

export default TextType
