import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Articles from './components/Articles'
import InDevelopment from './components/InDevelopment'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Articles />
          <InDevelopment />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
