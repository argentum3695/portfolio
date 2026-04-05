translate_dict = [
    { rna: 'UUU', amino: 'phe' },
    { rna: 'UUC', amino: 'phe' },
    { rna: 'UUA', amino: 'leu' },
    { rna: 'UUG', amino: 'leu' },
    { rna: 'UCU', amino: 'ser' },
    { rna: 'UCC', amino: 'ser' },
    { rna: 'UCA', amino: 'ser' },
    { rna: 'UCG', amino: 'ser' },
    { rna: 'UAU', amino: 'tyr' },
    { rna: 'UAC', amino: 'tyr' },
    { rna: 'UAA', amino: 'stop' },
    { rna: 'UAG', amino: 'stop' },
    { rna: 'UGU', amino: 'cys' },
    { rna: 'UGC', amino: 'cys' },
    { rna: 'UGA', amino: 'stop' },
    { rna: 'UGG', amino: 'trp' },
    { rna: 'CUU', amino: 'leu' },
    { rna: 'CUC', amino: 'leu' },
    { rna: 'CUA', amino: 'leu' },
    { rna: 'CUG', amino: 'leu' },
    { rna: 'CCU', amino: 'pro' },
    { rna: 'CCC', amino: 'pro' },
    { rna: 'CCA', amino: 'pro' },
    { rna: 'CCG', amino: 'pro' },
    { rna: 'CAU', amino: 'his' },
    { rna: 'CAC', amino: 'his' },
    { rna: 'CAA', amino: 'gln' },
    { rna: 'CAG', amino: 'gln' },
    { rna: 'CGU', amino: 'arg' },
    { rna: 'CGC', amino: 'arg' },
    { rna: 'CGA', amino: 'arg' },
    { rna: 'CGG', amino: 'arg' },
    { rna: 'AUU', amino: 'ile' },
    { rna: 'AUC', amino: 'ile' },
    { rna: 'AUA', amino: 'ile' },
    { rna: 'AUG', amino: 'met' },
    { rna: 'AAU', amino: 'asn' },
    { rna: 'AAC', amino: 'asn' },
    { rna: 'AAA', amino: 'lys' },
    { rna: 'AAG', amino: 'lys' },
    { rna: 'AGU', amino: 'ser' },
    { rna: 'AGC', amino: 'ser' },
    { rna: 'AGA', amino: 'arg' },
    { rna: 'AGG', amino: 'arg' },
    { rna: 'GUU', amino: 'val' },
    { rna: 'GUC', amino: 'val' },
    { rna: 'GUA', amino: 'val' },
    { rna: 'GUG', amino: 'val' },
    { rna: 'GCU', amino: 'ala' },
    { rna: 'GCC', amino: 'ala' },
    { rna: 'GCA', amino: 'ala' },
    { rna: 'GCG', amino: 'ala' },
    { rna: 'GAU', amino: 'asp' },
    { rna: 'GAC', amino: 'asp' },
    { rna: 'GAA', amino: 'glu' },
    { rna: 'GAG', amino: 'glu' },
    { rna: 'GGU', amino: 'gly' },
    { rna: 'GGC', amino: 'gly' },
    { rna: 'GGA', amino: 'gly' },
    { rna: 'GGG', amino: 'gly' },
]
prevFinal = "";
prevFormattedRNA = "";

function transcribe_translate() {
    // console.log("hi");
    dna_input = document.getElementById("dnainput").value;
    // dna_input = prompt("Enter DNA: ");
    dna_input = dna_input.replace(/\s/g, '');
    dna_input = dna_input.toUpperCase();
    rna = "";
    formattedRNA = "";
    amino_acid_sequence = [];

    for (i in dna_input) {
        rna += dna_translate(dna_input[i]);
    }

    for (i in rna) {
        if ((i + 1) % 3 == 0) {

            formattedRNA += rna[i];
            formattedRNA += " ";
        } else {
            formattedRNA += rna[i];
        }
    }

    if (prevFormattedRNA !== formattedRNA) {
        document.getElementById("rna").innerText = formattedRNA;

    }

    prevFormattedRNA = formattedRNA;
    // document.write(`<b>RNA:</b> &nbsp ${formattedRNA}`);


    for (j = 0; j < rna.length; j++) {
        if (j == 0 || (j % 3 == 0)) {
            amino_acid_sequence.push(rna_transcribe(rna.substring(j, j + 3)));
            // console.log(`Reading index ${j} to ${j + 3}`);
            // console.log(`Reading ${rna.substring(j, j + 3)}`);
        }
    }


    final = "";

    var stop = 0;
    for (i in amino_acid_sequence) {
        if (amino_acid_sequence[i] == "stop") {
            amino_acid_sequence[i] = "<span>stop</span>";
        }


        if (i != 0) {
            final += " - " + amino_acid_sequence[i];
        } else {
            final += amino_acid_sequence[i];
        }
        // console.log(amino_acid_sequence[i]);

        if (amino_acid_sequence[i] == "<span>stop</span>") {
            break;
        }
    }
    if (prevFinal !== final) {
        document.getElementById("proteins").innerHTML = final;
    }
    prevFinal = final;
}

setInterval(transcribe_translate, 100);

function dna_translate(input) {
    if (input == "A") {
        return "U";
    } else if (input == "T") {
        return "A";
    } else if (input == "C") {
        return "G";
    } else if (input == "G") {
        return "C";
    } else return input;
}

function rna_transcribe(rna_input) {
    // console.log(rna_input);

    var found = 0;
    for (i in translate_dict) {
        if (translate_dict[i].rna == rna_input.toUpperCase()) {
            found = 1;
            return translate_dict[i].amino;
        }
    }

    if (!found) {
        return "invalid";
    }
}