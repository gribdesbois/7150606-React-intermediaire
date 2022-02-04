import { useState } from 'react'
import logo from '../../logo.svg'
import '../App.css'
import ErrorBoundary from '../../components/shared/ErrorBoundary'
import Header from '../../components/Header'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ErrorBoundary>
        <div>
          <h1> Home page 🏠</h1>
        </div>
      </ErrorBoundary>
    </>
  )
}

export default Home
