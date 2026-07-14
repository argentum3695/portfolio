const periodicTableElements = [
  "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", 
  "fluorine", "neon", "sodium", "magnesium", "aluminium", "silicon", "phosphorus", "sulphur", 
  "chlorine", "argon", "potassium", "calcium", "scandium", "titanium", "vanadium", "chromium", 
  "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", 
  "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium", 
  "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", 
  "indium", "tin", "antimony", "tellurium", "iodine", "xenon", "caesium", "barium", 
  "lanthanum", "cerium", "praseodymium", "neodymium", "promethium", "samarium", "europium", "gadolinium", 
  "terbium", "dysprosium", "holmium", "erbium", "thulium", "ytterbium", "lutetium", "hafnium", 
  "tantalum", "tungsten", "rhenium", "osmium", "iridium", "platinum", "gold", "mercury", 
  "thallium", "lead", "bismuth", "polonium", "astatine", "radon", "francium", "radium", 
  "actinium", "thorium", "protactinium", "uranium", "neptunium", "plutonium", "americium", "curium", 
  "berkelium", "californium", "einsteinium", "fermium", "mendelevium", "nobelium", "lawrencium", "rutherfordium", 
  "dubnium", "seaborgium", "bohrium", "hassium", "meitnerium", "darmstadtium", "roentgenium", "copernicium", 
  "nihonium", "flerovium", "moscovium", "livermorium", "tennessine", "oganesson"
];


document.getElementById("input").addEventListener("keyup", checkInput)
var inputBox = document.getElementById("input");

var currentElement = 1;

document.getElementById("results").innerText = `Enter element ${currentElement}`;

function checkInput() {

    if (currentElement <=118) {
         foundElementIndex = checkElement(inputBox.value.toLowerCase());

    if (foundElementIndex != -1) {
        if (foundElementIndex + 1 == currentElement) {
            inputBox.value = '';
            currentElement++;

            if (currentElement < 119) {
                document.getElementById("results").innerText = `Enter element ${currentElement}`;
            } else {
                document.getElementById("results").innerText = "Done!";

            }
        }
    }
    }

   

    
}



function checkElement(input) {

    for (i = 0; i < 118; i++) {

        if (periodicTableElements[i] === input) {
            return i;
        }
    }

    return -1;

}