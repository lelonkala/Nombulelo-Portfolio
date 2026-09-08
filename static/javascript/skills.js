
let showingTechnical = true;

setInterval(() => {

    const technical = document.getElementById("technical-skills");
    const soft = document.getElementById("soft-skills");
    const title = document.getElementById("skills-title");

    if(showingTechnical){
        technical.style.display = "none";
        soft.style.display = "block";
        title.innerText = "Soft Skills";
        title.style.color = "#ec4899";
    }
    else{
        technical.style.display = "block";
        soft.style.display = "none";
        title.innerText = "Technical Skills";
        title.style.color = "#24031a";
    }

    showingTechnical = !showingTechnical;

}, 4000);
