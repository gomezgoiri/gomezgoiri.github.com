import React from 'react'
import Link from './Link'
import Container from './Container'

const NavBar = () => (
  <nav className="navbar navbar-default">
    <Container>
      <div className="navbar-header">
        <Link className="navbar-brand" href="/index.html">
          Aitor Gómez Goiri
        </Link>
      </div>

      <div className="collapse navbar-collapse navbar-right">
        <ul className="nav navbar-nav">
          <li>
            <Link href="/projects.html">Projects</Link>
          </li>
          <li>
            <Link href="/publications.html">Publications</Link>
          </li>
          <li>
            <Link href="/research_projects.html">R&amp;D Projects</Link>
          </li>
          <li>
            <Link href="/teaching.html">Teaching</Link>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
)

export default NavBar
