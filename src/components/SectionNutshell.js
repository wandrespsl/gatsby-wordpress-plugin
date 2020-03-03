import React from "react"

import { StyledSection } from "../styles/components"

export default function Section(props) {
  return (
    <StyledSection className={props.bgimage}>
      <div className="custom-section">
        <div className="container">
          <h3>in a Nutshell</h3>
          <div className="d-grid">
            <div class="nutshell-data">
              <div class="data">700+</div> <h4>engineers</h4>
            </div>{" "}
            <div class="nutshell-data">
              <div class="data">33+</div> <h4>Years’ experience</h4>
            </div>
            <div class="nutshell-data">
              <div class="data">Agile</div>
              <h4> experts + CMMi 5 + ISO27001 </h4>
            </div>
            <div class="nutshell-data">
              <div class="data">1.200+</div>
              <h4> projects successfully delivered </h4>
            </div>
            <div class="nutshell-data">
              <div class="data">5</div> <h4> development centers in LATAM </h4>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
