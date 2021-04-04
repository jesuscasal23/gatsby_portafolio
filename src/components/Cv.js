import React from "react"

const Cv = () => {
  return (
    <section class="CV" id="CVtarget">
      <div class="line"></div>

      <div class="left">
        <div class="task task_left task_firstLeft">
          <div class="circle">
            <div class="curvedLine curvedLine_pointingRight"></div>
            <div class="curvedLine curvedLine_pointingUp"></div>
          </div>
          <p class="task-year">2003-2007</p>
          <p class="task-title">Primary education at the San Ignacion School</p>
          <p class="task-location">Caracas, Venezuela</p>
          <p class="task-description">
            I was born and raised in Venezuela. <br /> This is also where I
            first went to school.
            <br /> My mother tongue is therefore Spanish.
          </p>
        </div>

        <div class="task task_left">
          <div class="circle">
            <div class="curvedLine curvedLine_pointingRight"></div>
            <div class="curvedLine curvedLine_pointingUp"></div>
          </div>
          <p class="task-year">2008-2016</p>
          <p class="task-title">
            secondary education, <br /> at Colegio Humboldt
          </p>
          <p class="task-location">Caracas, Venezuela</p>
          <p class="task-description">
            In order to further develop my learning of the german language I
            changed to a German school in Caracas.
            <br />
            Here I received both my german <br /> "Abitur" and its Venezuelan
            equivalent simultanioulsy.
          </p>
        </div>

        <div class="task task_left">
          <div class="circle">
            <div class="curvedLine curvedLine_pointingRight"></div>
            <div class="curvedLine curvedLine_pointingUp"></div>
          </div>
          <p class="task-year">2017-2020</p>
          <p class="task-title">
            Studying political economics <br /> at Heidelberg university{" "}
          </p>
          <p class="task-location">Heidelberg, Germany</p>
          <p class="task-description">
            One of my passions is economics, specifically macroeconomic theory.
            Many of the skills that i have learned are transferable to web
            development. These skills include mathematics, statistics,
            management of data and abstract structured thinking in general.
          </p>
        </div>

        <div class="task task_left">
          <div class="circle">
            <div class="curvedLine curvedLine_pointingRight"></div>
            <div class="curvedLine curvedLine_pointingUp"></div>
          </div>
          <p class="task-year">2018-2020</p>
          <p class="task-title">
            Scholarship holder of the <br /> Konrad Adenauer Foundation
          </p>
          <p class="task-location">Heidelberg, Germany</p>
          <p class="task-description">
            As soon as my first scholarship ended I was granted a full
            scholarship by the Konrad Adenauer Foundation in order to
            concentrate fully on my studies. I am currently writing my bachelor
            thesis.
          </p>
        </div>
      </div>

      <div class="right">
        <div class="task task_right task_firstRight">
          <div class="circle circle_right">
            <div class="curvedLine curvedLine_pointingLeft"></div>
            <div class="curvedLine curvedLine_pointingUpFromRight"></div>
          </div>
          <p class="task-year">2007-2008</p>
          <p class="task-title">Internationle Gesamtschule Heidelberg</p>
          <p class="task-location">Heidelberg, Germany</p>
          <p class="task-description">
            When I was 9 years old my family moved to Germany, Heidelberg for
            one year. This was the time in which I started learning german and
            my relationship with Heidelberg begann.
          </p>
        </div>

        <div class="task task_right">
          <div class="circle circle_right">
            <div class="curvedLine curvedLine_pointingLeft"></div>
            <div class="curvedLine curvedLine_pointingUpFromRight"></div>
          </div>
          <p class="task-year">2014-2016</p>
          <p class="task-title">
            Chairman of the student council <br /> at Colegio Humboldt
          </p>
          <p class="task-location">Caracas, Venezuela</p>
          <p class="task-description">
            While I went to high-school I was always involved in multiple
            extracurricular activities. These included Chess, Model of United
            Nations and chairman of the student council.
          </p>
        </div>

        <div class="task task_right">
          <div class="circle circle_right">
            <div class="curvedLine curvedLine_pointingLeft"></div>
            <div class="curvedLine curvedLine_pointingUpFromRight"></div>
          </div>
          <p class="task-year">2017</p>
          <p class="task-title">
            Scholarship from Heidelberg University through (BIDS)
          </p>
          <p class="task-location">Heidelberg, Germany</p>
          <p class="task-description">
            After finishing high-school I applied to universities in Germany.
            Due to my grades and recommendation letters from my teachers and the
            school director I receive a Scholarship from Heidelberg University.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cv
