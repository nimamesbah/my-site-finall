const projectsButton = document.getElementById('projectsButton');
const projectsContainer = document.getElementById('projectsContainer');
const surprise = document.getElementById("surprise");

        projectsButton.addEventListener('click', () => {
            // Toggle visibility
            projectsContainer.classList.toggle('hidden');
            projectsButton.classList.add("hidden")
            surprise.classList.remove("translate-[194%]")
            surprise.classList.add("translate-[22%]")
            setTimeout(()=> {
                projectsContainer.classList.remove("opacity-0","scale-y-0")
                projectsContainer.classList.add("opacity-100")

            },10)
          
            
        });