// JavaScript to implement project slideshow

let currentIndex = 0;
const projects = document.querySelectorAll(".project");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

function showProject(index) {
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  projects[index].style.display = "block";
}

function prevProject() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = projects.length - 1;
  }
  showProject(currentIndex);
}

function nextProject() {
  currentIndex++;
  if (currentIndex >= projects.length) {
    currentIndex = 0;
  }
  showProject(currentIndex);
}

showProject(currentIndex);

prevButton.addEventListener("click", prevProject);
nextButton.addEventListener("click", nextProject);
