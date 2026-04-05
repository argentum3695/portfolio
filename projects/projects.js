function filterProjects() {

    var elecCheckBox = document.getElementById("check-elec");
    var codeCheckBox = document.getElementById("check-code");
    var inProgressCheckBox = document.getElementById("check-in-progress");
    var utilityCheckBox = document.getElementById("check-utility");

    const elecProjects = document.getElementsByClassName("elec-project");
    const codeProjects = document.getElementsByClassName("code-project");
    const inProgressProjects = document.getElementsByClassName("project-in-progress");
    const utilityProjects = document.getElementsByClassName("utility-project");

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
         for (let i = 0; i < codeProjects.length; i++) {
            codeProjects[i].style.display = "none";
        }
    }

    if (inProgressCheckBox.checked) {
        for (let i = 0; i < inProgressProjects.length; i++) {
            inProgressProjects[i].style.display = "inline";
        }
    } else {
         for (let i = 0; i < inProgressProjects.length; i++) {
            inProgressProjects[i].style.display = "none";
        }
    }

    console.log(utilityCheckBox.checked);
    if (utilityCheckBox.checked) {
        for (let i = 0; i < utilityProjects.length; i++) {
            utilityProjects[i].style.display = "inline";
        }
    } else {
         for (let i = 0; i < utilityProjects.length; i++) {
            utilityProjects[i].style.display = "none";
        }
    }

}