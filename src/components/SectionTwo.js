import React from "react"

import { Link } from "gatsby"
import { StyledSection, Button } from "../styles/components"

export default function SectionTwo(props) {
  return (
    <StyledSection className={props.bgimage}>
      <div className="custom-section">
        <div className="container">
          <div className="column-6">
            <p className="ready">
              <span className="ready1">Ready to deploy</span>
              <Link to="/">nearshore outsourcing</Link>
              <span className="ready2">teams?</span>
            </p>
          </div>
          <div className="column-6">
            <div className="description">
              <p>
                PSL operates at the intersection of drive, quality, and
                innovation. As a purpose-led organization, we strive to become
                your{" "}
                <strong>
                  <Link to="/" className="no-link">
                    software {" "} outsourcing {" "}
                  </Link>
                  development {" "}
                </strong>
                partner. Our goal is to provide the highest quality {" "}
                <strong>agile development services</strong> from {" "}
                <strong>nearshore</strong> centers in {" "}
                <strong>Latin America</strong>.
              </p>
              <div className="offsetTopS">
                <Button type="outline" className="white">
                  <Link to="/" className="btn btn-primary">
                    Let´s talk!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
