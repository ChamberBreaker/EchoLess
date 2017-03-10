import React from 'react'

const AboutPage = () => {
  return (
    <div>

      <h2 className="aboutTitle">This Site</h2>

      <div className="siteDescription">
        <p className="aboutContent">
          Echoless facilitates better bipartisan understanding, discussion, and action.<br />
          We programmatically pair news from media outlets at opposite ends of the political spectrum.<br />
          In doing so, we hope to break down readers' echo chambers and show views held by people outside their communities and social media circles.
        </p>
      </div>

      <h2 className="aboutTitle">The creators</h2>

      <div className="pplDescription">

        <div className="bioContainer">
          <div className="bioPic matt" />
          <h4 className="aboutName">Matt Martin</h4>
          <p className="aboutContent">
            Professional learner.<br />
            <br />
            Graduated as a Spanish major. Got a job working on Wall Street.
            Passed all three CFA levels. Moved to the Bay to pursue finance and technology.
            Fiercely dedicated to building things of value.
          </p>
        </div>

        <div className="bioContainer">
          <div className="bioPic george" />
          <h4 className="aboutName">George Weiler</h4>          
          <p className="aboutContent">
            Professional learner.<br />
            <br />
            Between working in DevOps for Apple and running one of Google's Computer Science First initiatives,
            George knows a thing or two about code. Known among friends as an all-round great guy.
          </p>
        </div>

      </div>

    </div>
  )
}

export default AboutPage
