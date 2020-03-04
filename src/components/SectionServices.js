import React from "react"

import { Link } from "gatsby"
import { StyledSection, Button } from "../styles/components"

export default function SectionServices(props) {
  return (
    <StyledSection className={props.bgimage}>
      <div className="custom-section">
        <div className="container">
          <div className="column-4">
            <h2 className="title">
              <Link to="/">Software Outsourcing</Link> Services
            </h2>
            <h3>
              Enhance your team with top-talent, cost effective, nearshore{" "}
              <a href="https://www.pslcorp.com/" target="_parent">
                software development outsourcing
              </a>{" "}
              services
            </h3>
          </div>
          <div className="column-7">
            <div className="panel-group" id="accordionpsl">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionpsl"
                      href="#agilePsl"
                      className="collapsed"
                    >
                      <span className="caret"></span>
                      <h3>Agile Custom Software Development Services</h3>
                    </a>
                  </div>
                </div>
                <div id="agilePsl" className="panel-collapse collapse">
                  <div className="panel-body">
                    Strong agile software development principles combined with a
                    DevOps mindset means our <strong>nearshore agile</strong>{" "}
                    teams add value fast. We’re ready to help you solve your
                    most complex engineering challenges.
                    <Button type="outline">
                      <Link to="/" className="btn btn-primary">
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionpsl"
                      href="#outsourcingPsl"
                      className="collapsed"
                    >
                      <span className="caret"></span>
                      <h3>IT Outsourcing Services</h3>
                    </a>
                  </div>
                </div>
                <div id="outsourcingPsl" className="panel-collapse collapse">
                  <div className="panel-body">
                    We deploy multidisciplinary, high-performance teams with
                    nearshore proximity. Our teams become an extension of your
                    development team, providing the expertise and scaling power
                    needed to take your technology vision to the next level.
                    <Button type="outline">
                      <Link to="/" className="btn btn-primary">
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionpsl"
                      href="#comprehensivePsl"
                      className="collapsed"
                    >
                      <span className="caret"></span>
                      <h3>
                        Comprehensive Outsourcing of Quality Assurance Support
                      </h3>
                    </a>
                  </div>
                </div>
                <div id="comprehensivePsl" className="panel-collapse collapse">
                  <div className="panel-body">
                    QA and test automation is an essential component of any
                    successful application. Our expertise in test-driven
                    development, API testing, UI testing, and performance
                    testing, ensures the highest quality and greatest value for
                    your application.
                    <Button type="outline">
                      <Link to="/" className="btn btn-primary">
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionpsl"
                      href="#DevOpsPsl"
                      className="collapsed"
                    >
                      <span className="caret"></span>
                      <h3>DevOps Transition</h3>
                    </a>
                  </div>
                </div>
                <div id="DevOpsPsl" className="panel-collapse collapse">
                  <div className="panel-body">
                    DevOps engineers can help you design and implement
                    continuous delivery pipelines and elastic applications. Our
                    DevOps specialists help guide the adoption of foundational
                    concepts, not just technologies.
                    <Button type="outline">
                      <Link to="/" className="btn btn-primary">
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionpsl"
                      href="#CloudPsl"
                      className="collapsed"
                    >
                      <span className="caret"></span>
                      <h3>Cloud Architecture Design and Implementation</h3>
                    </a>
                  </div>
                </div>
                <div id="CloudPsl" className="panel-collapse collapse">
                  <div className="panel-body">
                    State-of-the-art cloud infrastructure translates to costs
                    savings, elastic applications, and enhanced security and
                    innovation. Our experts are available to consult, design,
                    and build cloud architectures and help you get the most out
                    of your cloud strategy.
                    <Button type="outline">
                      <Link to="/" className="btn btn-primary">
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionpsl"
                      href="#ReengineeringPsl"
                      className="collapsed"
                    >
                      <span className="caret"></span>
                      <h3>Software Reengineering</h3>
                    </a>
                  </div>
                </div>
                <div id="ReengineeringPsl" className="panel-collapse collapse">
                  <div className="panel-body">
                    We embrace existing solutions and transform them. Our teams
                    are experts in enhancing maintainability and streamlining
                    the process of adding new features. We aim to provide faster
                    time to market and improved business value.
                    <Button type="outline">
                      <Link to="/" className="btn btn-primary">
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
