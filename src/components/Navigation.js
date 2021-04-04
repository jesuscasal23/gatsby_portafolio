import React from "react"

const Navigation = () => {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background"></div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#CVtarget" class="navigation__link">
              Curriculum vitae
            </a>
          </li>
          <li class="navigation__item">
            <a href="#projectstarget" class="navigation__link">
              Projects
            </a>
          </li>
          <li class="navigation__item">
            <a href="#formtarget" class="navigation__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
