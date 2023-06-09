import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Router from '../router/Router'
import style from './Layout.module.css'

function Layout() {
  return (
    <main className={style.mainContainer}>
      <div className={style.divMain}>
        <Header />
        <section className={style.sectionPage}>
          <Router />
        </section>
        <Footer />
      </div>
    </main>
  )
}

export default Layout