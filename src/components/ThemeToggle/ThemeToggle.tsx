'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Montar apenas no lado do cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Renderizar um placeholder durante SSR
  if (!mounted) {
    return (
      <button
        className="
          py-2
          px-3
          rounded-3xl
          border
          transition-colors
          duration-200
        "
      >
        <span className="flex items-center text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 opacity-0">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
    )
  }

  const iconVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const sunRays = [
    { delay: 0, rotate: 0 },
    { delay: 0.1, rotate: 45 },
    { delay: 0.2, rotate: 90 },
    { delay: 0.3, rotate: 135 },
    { delay: 0.4, rotate: 180 },
    { delay: 0.5, rotate: 225 },
    { delay: 0.6, rotate: 270 },
    { delay: 0.7, rotate: 315 }
  ]

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`relative group w-36 h-12 rounded-3xl shadow-lg flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 focus:ring-purple-500' : 'bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 focus:ring-blue-500'} text-white`}
      whileHover="hover"
      whileTap="tap"
      aria-label={
        darkMode
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
    >
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: darkMode
            ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
            : 'linear-gradient(45deg, rgba(135, 0, 255, 0.1), rgba(255, 93, 0, 0.1))'
        }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        whileTap={{
          background: [
            'radial-gradient(circle, rgba(135, 0, 255, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(135, 0, 255, 0) 70%, transparent 70%)'
          ]
        }}
        transition={{ duration: 0.6 }}
      />

      <span className="relative z-10 flex items-center text-sm font-semibold">
        <div className="relative w-5 h-5">
          <AnimatePresence mode="wait">
            {darkMode
              ? (
                <motion.div
                  key="sun"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Sol com raios animados */}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    {/* Centro do sol */}
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="4"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />

                    {/* Raios do sol */}
                    {sunRays.map((ray, index) => (
                      <motion.line
                        key={index}
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform={`rotate(${ray.rotate} 12 12)`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: ray.delay,
                          ease: 'easeInOut'
                        }}
                      />
                    ))}
                  </motion.svg>

                  {/* Partículas de luz */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </motion.div>
              )
              : (
                <motion.div
                  key="moon"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Lua com efeito de brilho */}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-400"
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clipRule="evenodd"
                    />
                  </motion.svg>

                  {/* Estrelas ao redor da lua */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-300"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        fontSize: '4px'
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: 'easeInOut'
                      }}
                    >
                      ✦
                    </motion.div>
                  ))}

                  {/* Efeito de brilho da lua */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 5px rgba(59, 130, 246, 0.3)',
                        '0 0 20px rgba(59, 130, 246, 0.6)',
                        '0 0 5px rgba(59, 130, 246, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
      </span>

      {/* Indicador de modo */}
      <motion.div
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
        style={{
          background: darkMode
            ? 'linear-gradient(45deg, #fbbf24, #f59e0b)'
            : 'linear-gradient(45deg, #3b82f6, #1d4ed8)'
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.button>
  )
}
