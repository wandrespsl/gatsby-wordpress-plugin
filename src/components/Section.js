import React from "react"

import { StyledSection, Button } from "../styles/components"

export default function Section(props) {
  return (
    <StyledSection className={props.bgimage}>
      <div className="custom-section">
        <div className="container">
          <div className="column-7">
            <span>Our passion is coding the future</span>
            <h1>
              Nearshore Software Development
              Offshore Outsourcing Center
            </h1>
            <div className="dp-flex">
              <Button type="outline">
                <a href="/" className="btn btn-primary">
                  Contact us today!
                </a>
              </Button>
              <Button type="outline">
                <a
                  className="btn btn-primary dp-flex"
                  href="https://youtu.be/UxLy8BkSl1E"
                >
                  Watch our video
                  <div className="btn-video">
                    <i className="caret-2"></i>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
