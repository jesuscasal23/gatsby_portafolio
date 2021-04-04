import React from "react"

const Projects = () => {
  return (
    <section class="project" id="projectstarget">
      <h1 class="project_mainTitle">PROJECTS</h1>
      <div class="project_container">
        <div class="project_textBox">
          <h2 class="project_title">Natours</h2>
          <div class="project_title_line"></div>
          <p class="project_description">
            This is one of the projects that I have developed in one of the many
            online courses I have completed. I became proficient using sass and
            the block Element Modifier methodology, I also became familiar with
            modern CSS properties and animations. I suggest you take a look at
            the website yourself as well as the corresponding code.
          </p>
        </div>

        <div class="project_imageContainer">
          <img class="project_image" src="img/outdoors img.PNG" alt="prodzr" />
          <div class="project_githubLink">
            <a href="https://github.com/jesuscasal23/Natours-Project">CODE</a>
          </div>
          <div class="project_WebpageLink">
            <a href="https://jesuscasal23.github.io/Natours-Project/#">
              Webpage
            </a>
          </div>
        </div>
      </div>

      <div class="project_container">
        <div class="project_textBox">
          <h2 class="project_title">Prodzr</h2>
          <div class="project_title_line"></div>
          <p class="project_description">
            Prodzr is a Productivity app that helps the user achieve his goals.
            Users can do this by tracking their progress, by creating task,
            habits and subgoals. This allows for a better overview of his
            progress and gives user greater incentives to stick to their goals.
            I have been working on this application alongside
            <a
              href="https://markcarbonell98.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Marcos Carbonell
            </a>
            (Scrum master),
            <a
              href="https://www.alexbecker.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Alexander Becker
            </a>
            (Front-end Web Developer), Alex Kalbits (Backend Developer) and
            <a
              href="https://roxanahiggins.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Roxana Higgins
            </a>
            (UI/UX Designer). Lately I have been working on the “Habits UI
            Component”. The app is intended for commercial therefore I cannot
            link the entire repository. I will provide the code for this
            component along with an explanation of its intended functionality.
            These projects have tough me how to work in an agile environment
            using GitLab. On the technical side I have been expanding my
            knowledge of react by learning about hooks and providers. I have
            gathered experience using Material UI and styled components using
            emotion.
          </p>
        </div>

        <div class="project_imageContainer">
          <img
            src="img/Group 261 1.png"
            alt="prodzr"
            class="project_image project_image_prodzr"
          />
          <div class="project_githubLink">
            <a href="https://github.com/jesuscasal23/habitscomponent">CODE</a>
          </div>
          <div class="project_WebpageLink">
            <a
              href="https://roxanahiggins.netlify.app/projects/prodzr.html"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
