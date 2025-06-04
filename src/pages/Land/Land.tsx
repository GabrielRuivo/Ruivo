import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import styles from './Land.module.css'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'

// Componente de partículas flutuantes
const FloatingParticle = ({ delay = 0, index }: { delay?: number, index: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-pink/20 to-light-orange/20 backdrop-blur-sm"
      style={{
        width: Math.random() * 8 + 4,
        height: Math.random() * 8 + 4,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay + Math.random() * 2,
        ease: 'easeInOut'
      }}
    />
  )
}

// Componente de efeito typing
const TypingText = ({ texts, speed = 100 }: { texts: string[], speed?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => { setIsDeleting(true) }, 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => { clearTimeout(timeout) }
  }, [displayText, currentIndex, isDeleting, texts, speed])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-8 ml-1 bg-gradient-to-b from-pink-hover to-light-orange-hover"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  )
}

export default function Land () {
  const { scrollY } = useScroll()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  // Animações do container principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  // Animações dos elementos filhos
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  }

  // Animação do título principal
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  }

  // Animação das palavras do título
  const wordVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      id="first-section"
      className="relative flex flex-col w-full items-center justify-center min-h-screen py-8 bg-primary dark:bg-bg-primary-dark dark:text-text-primary-dark transition-colors duration-200 overflow-hidden"
      style={{ opacity }}
    >
      {/* Partículas de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.1} index={i} />
        ))}
      </div>

      {/* Gradient Background Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink/10 to-light-orange/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ y: y1 }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-light-orange/10 to-pink/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ y: y2 }}
      />

      <motion.div
        className='flex flex-col md:flex-row max-w-7xl w-full px-4 md:px-6 lg:px-8 relative z-10'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="flex flex-col justify-center w-full md:w-1/2 md:pl-8 lg:pl-20 mb-10 md:mb-0 text-center md:text-left">
          <motion.div
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            variants={titleVariants}
          >
            <motion.div className="mb-3" variants={wordVariants}>
              Hello,
              <motion.span
                className="
                  bg-clip-text
                  text-gradient
                  ml-2 md:ml-4
                  bg-gradient-to-r from-pink-hover to-light-orange-hover
                  inline-block
                "
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(135, 0, 255, 0.5)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                I&apos;m Ruivo,
              </motion.span>
            </motion.div>

            <motion.div className="mb-3" variants={wordVariants}>
              <TypingText
                texts={['software engineer', 'full stack developer', 'tech lead', 'problem solver']}
                speed={120}
              />
            </motion.div>

            <motion.div variants={wordVariants}>
              <span className="bg-clip-text text-gradient bg-gradient-to-r from-light-orange-hover to-pink-hover">
                tech lead.
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-sm md:text-base font-thin opacity-70 my-6 md:my-8"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              I am a software engineer tech lead with experience of 5 years in this 5 years I have worked in a software house and actual in a fintech.
            </motion.span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.button
              className="
                py-2
                px-6
                rounded-3xl
                bg-gradient-to-r from-pink to-light-orange
                relative overflow-hidden
                group
              "
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(135, 0, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-hover to-light-orange-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <motion.a
                href="https://wa.me/5543991312390"
                className="relative text-black text-sm font-semibold z-10"
                whileHover={{ color: '#ffffff' }}
              >
                LET&apos;S TALK
              </motion.a>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full scale-0"
                whileHover={{ scale: 4 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              className="
                py-2
                px-6
                rounded-3xl
                border
                relative overflow-hidden
                group
                backdrop-blur-sm
              "
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(135, 0, 255, 0.5)',
                boxShadow: '0 5px 20px rgba(135, 0, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink/10 to-light-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.a
                className="relative text-black dark:text-white text-sm font-semibold transition-colors duration-200 z-10"
                href="#third-section"
                whileHover={{ scale: 1.05 }}
              >
                VIEW ALL WORKS
              </motion.a>
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:flex w-1/2 items-center justify-center relative"
          variants={itemVariants}
        >
          <motion.div
            className={`${styles.trapezoid} relative`}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: 5
            }}
            animate={{
              rotateZ: [0, 1, 0, -1, 0]
            }}
            transition={{
              rotateZ: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              hover: {
                type: 'spring',
                stiffness: 300
              }
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink/20 to-light-orange/20 blur-xl rounded-lg"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-pink to-light-orange rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-2 h-2 bg-gradient-to-r from-light-orange to-pink rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-pink-hover rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-pink-hover to-light-orange-hover rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
