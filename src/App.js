import './App.css';
import Head from 'next/head'
import Main from './Components/Main'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Head>
        <title>Peace | Software Developer</title>
        <meta name="description" content="I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
