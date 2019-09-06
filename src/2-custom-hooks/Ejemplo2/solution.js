import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import useMedia from './useMedia'
import Toggle from './Toggle'
import darkUI from './my-ui-dark.png'
import lightUI from './my-ui-light.png'
import './styles.scss'
// Usage
export default function App() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div className="hooks2-darkMode">
      <header>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <span>
          {darkMode
            ? 'Dark mode enabled '
            : 'too bright? try dimming the lights'}
        </span>
      </header>
      <main>
        <h2>The Benefits of Dark Mode: Why should you turn off the lights?</h2>
        <p>
          Lately, there has been a lot of hype surrounding dark mode, a simple
          toggle that lets you change the background color of an app window to
          black. This year dark mode has become available on a bunch of popular
          apps, from the workplace collaboration chat app Slack and Microsoft's
          Outlook email client to Google Chrome and Facebook Messenger. Apple
          launched dark mode last year on Mac OS Mojave and it should become
          available on the new Android Q and IOS 13 launched later this year.
          But why is dark mode suddenly so trendy? Here we'll go over why should
          you turn it on and what are the benefits of dark mode.
        </p>
        <h2>It looks amazing</h2>
        <p>
          Let's be honest, one of the benefits of dark mode is that it just
          looks super amazing. While most products are going for that similar
          bland white look, dark mode does offer something different that feels
          mysterious and new. As colors pop up better on dark backgrounds, it
          usually provides great opportunities for presenting graphic content
          such as graphs, dashboards, pictures, and photos. For example, in
          Weekdone we use the RAG coloring system to provide a quick visual
          overview of Company progress. Here's how it looks in dark mode vs
          light mode.
        </p>
        <img src={darkMode ? darkUI : lightUI} />
      </main>
      <aside>
        <h2>Random Content</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus,
        pariatur dolor impedit perspiciatis voluptas, molestias facere porro,
        tempore repellendus animi iure. Temporibus commodi quibusdam pariatur,
        minima autem quo, tempore obcaecati nihil officiis cum minus aspernatur
        veritatis, quisquam harum rerum eos consequatur quia debitis
        exercitationem. Corrupti eaque nisi aut hic?
      </aside>
      <section>
        <h2>Great links</h2>

        <ul>
          <li>
            <a href="https://www.cnet.com/how-to/turn-on-the-dark-mode-in-windows-10/">
              Turn on the dark mode in Windows 10
            </a>
          </li>
          <li>
            <a href="https://material.io/design/color/dark-theme.html">
              Dark theme according to google.
            </a>
          </li>
          <li>
            <a href="https://medium.com/snapp-mobile/design-for-the-dark-theme-9a2185bbb1d5">
              Design for the Dark Theme
            </a>
          </li>
          <li>
            <a href="https://darkmodelist.com/">DARK MODE LIST</a>
          </li>
        </ul>
      </section>
      <footer> {!darkMode ? 'Light' : 'Dark'} theme</footer>
    </div>
  )
}

// Hook
function useDarkMode() {
  // usar useLocalStorage hook para persistir el estado entre refreshes.
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')

  //confirmar si el usuario tiene una preferencia designada en el browser o el OS
  //este hook hace composicion a useMedia mas abajo
  const prefersDarkMode = usePrefersDarkMode()

  //utiliza enabledState si está definido, si no, pasa a prefersDarkMode
  //esto permite al usuario sobreescribir la cofiguracion de OS en nuestro sitio
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

  //llama el effecto que agrega o remueve la clase dakrmode
  useEffect(() => {
    const className = 'dark-mode'
    const element = window.document.body
    if (enabled) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [enabled]) //solo volver a llamar si cambia el valor

  // retorna el estado y su setter
  return [enabled, setEnabledState]
}

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}
