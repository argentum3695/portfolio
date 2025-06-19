function filterProjects() {

    var elecCheckBox = document.getElementById("check-elec");
    var codeCheckBox = document.getElementById("check-code");

    const elecProjects = document.getElementsByClassName("elec-project");
    const codeProjects = document.getElementsByClassName("code-project");

    console.log(codeProjects);


    if (elecCheckBox.checked) {
        for (let i = 0; i < elecProjects.length; i++) {
            elecProjects[i].style.display = "inline";
        }
    } else {
         for (let i = 0; i < elecProjects.length; i++) {
            elecProjects[i].style.display = "none";
        }
    }

    if (codeCheckBox.checked) {
        for (let i = 0; i < codeProjects.length; i++) {
            codeProjects[i].style.display = "inline";
        }
    } else {
        // console.log("hiding code projects");
         for (let i = 0; i < codeProjects.length; i++) {
            codeProjects[i].style.display = "none";
        }
    }

}