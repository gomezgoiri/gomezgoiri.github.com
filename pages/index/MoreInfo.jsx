import React from 'react'

const MoreInfo = () => (
  <div className="row">
    <div className="col-sm-12">
      <h1>More about me</h1>

      <p>Do you still want to know more about me? Check the following links:</p>
      <ul>
        <li>
          My open-source{' '}
          <a href="https://github.com/gomezgoiri">contributions on Github</a>
        </li>
        <li>
          My <a href="http://gomezgoiri.net/cv.html">CV</a>
        </li>
        <li>
          My (probably less updated){' '}
          <a href="http://es.linkedin.com/in/gomezgoiri">CV on Linkedin</a>
        </li>
        <li>
          My{' '}
          <a href="http://www.slideshare.net/twolf">
            presentations on SlideShare
          </a>
        </li>
        <li>
          <a
            href="http://www.morelab.deusto.es/resource/aitor-gomez-goiri"
            itemProp="sameAs"
          >
            Semantic knowledge about me
          </a>
        </li>
        <li>
          My <a href="http://kmi.open.ac.uk/people/">colleagues</a>
        </li>
        <li>
          My <a href="https://morelab.deusto.es/people/members/">former</a>{' '}
          <a href="http://kmi.open.ac.uk/people/">colleagues</a>
        </li>
      </ul>
    </div>
  </div>
)

export default MoreInfo
