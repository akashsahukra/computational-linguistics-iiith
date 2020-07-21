
    e1 = ['The child liked the chocolate.', 'She was stopped by the bravest knight.', 'Mary baked a cake for his birthday', 'She decorated the cake carefully', 'Mary wore a dress with polka dots.'];
    
    h1 = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।']
let hind_map = new Map()
hind_map.set(h1[0], ["Noun", "Postposition", "Noun", "Postposition", "Postposition", "Noun", "Verb"]);
hind_map.set(h1[1], ["Adjective", "Noun", "Noun", "Adverb", "Verb"]);
hind_map.set(h1[2], ["Noun", "Postposition", "Noun", "Adjective", "Verb", "Verb"]);
hind_map.set(h1[3], ["Interjection", "Pronoun", "Adjective", "Verb"]);
hind_map.set(h1[4], ["Noun", "Postposition", "Noun", "Verb", "Verb"]);
// hind_map.set(1, "aksah");
var temp, val;
    
    function getans() {
        // alert(9);
        if ($("#toogle1").text() == "Get Answer") {
            $("#toogle1").text("Hide Answer");
            if (temp == "eng") {
                for (let i = 0; i < val.length; i++) {
                    
                    $("#correct" + i).html(result[i]);
                }
            }
            else {
                for (let i = 0; i < val.length; i++) {
                    $("#correct" + i).html(hind_map.get(val.join(" "))[i]);
                    
                }
            }
        } else {
            $("#toogle1").text("Get Answer");  
            if (temp == "eng") {
                for (let i = 0; i < val.length; i++) {
                    
                    $("#correct" + i).html('');
                }
            }
            else {
                for (let i = 0; i < val.length; i++) {
                    $("#correct" + i).html('');
                    
                }
            }
        }
    }

    function show_drop_down(arr) {
        $('#language').html('');
        $("#lang").css("display", "block");
        $("#language").append('<option value=none>---Select a sentence---</option>')
        for (let i = 0; i < arr.length; i++) {
            
            $('#language').append('<option value=' + arr[i]+'>'+arr[i]+'</option>');
    }
    }

    $("#pos").on('change', function () {
        if ($("#pos").val() != "none") {
            $("#pos-table").css("display", "none");
            $("#table-pos").html('');
            $("#stat").html("");
            temp = $("#pos").val();
        }
        if ($('#pos').val() == "eng") {
            show_drop_down(e1);
        }
        if ($('#pos').val() == "hin") {
            show_drop_down(h1);
        }
        
        if ($("#pos").val() == "none") {
            alert("Select a language");
            return false;
        }

    });

    
    $("#language").on('change', function () {
        $("#pos-table").css("display", "block");
        $("#table-pos").html('');
        $("#stat").html("<i>Select the POS tag for corresponding words</i>");
        if ($("#language").val() != "none") { 
            val = $("#language option:selected").text().split(" ");
            
        }
        else {
            alert("Select a sentence");
        }
        $("#table-pos").append('<tr><th>Lexicon</th><th>POS</th><th id="cor_head"></th><th id="ans_head"></th></tr>')
        // alert(temp);
        if (temp == "eng") {
            for (let i = 0; i < val.length; i++) {
                $("#table-pos").append('<tr><td>' + val[i] + '</td><td><select name="t" id="token'+i+'"><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select></td><td id="correction'+i+'"></td><td id="correct'+i+'"></td></tr>')
            }
        }
        if(temp == "hin") {
            for (let i = 0; i < val.length; i++) {
                $("#table-pos").append('<tr><td>' + val[i] + '</td><td><select name="t" id="token'+i+'"><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Postposition</option><option>Conjunction</option><option>Interjection</option></select></td><td id="correction'+i+'"></td><td id="correct'+i+'"></td></tr>')
            }
        }
        

    });
    $("#check").click(function () { 
        // console.log(9);
        var c1 = 0;
        var c2 = 0;
        result = []
        // console.log(input);
        
        // console.log(input.nouns().toPlural().text());
        if (temp == "eng") { 
            for (let i = 0; i < val.length; i++) {
                var input = nlp(val[i]);
                if ((input.nouns().text()) != "")
                    result[i] = "Noun";
                else if ((input.pronouns().text()) != "")
                    result[i] = "Pronoun";
                else if ((input.verbs().text()) != "")
                    result[i] = "Verb";
                else if ((input.adjectives().text()) != "")
                    result[i] = "Adjective";
                else if ((input.adverbs().text()) != "")
                    result[i] = "Adverb";
                else if ((input.prepositions().text()) != "")
                    result[i] = "Preposition";
                else if ((input.conjunctions().text()) != "")
                    result[i] = "Conjunction";
                else
                    result[i] = "Determiner";
                // console.log(result);
            
            }
            for (let i = 0; i < result.length; i++) {
                // alert("HI");
                if ($("#token" + i).val() == result[i]) {
                    c1 += 1;
                    $("#correction" + i).html('<img src="../Libraries/right.png" style="height:25px;width:25px" alt="Wrong">');  
                }
                else {
                    $("#correction" + i).html('<img src="../Libraries/wrong.png" style="height:25px;width:25px" alt="Wrong">')
                }
                
            }
            if (c1 != result.length) {
                $("#get-answer").html('<button id="toogle1" onclick = "getans()">Get Answer</button>');
            }
        } else {
            for (let i = 0; i < hind_map.get(val.join(" ")).length; i++) {
                if ($("#token" + i).val() == hind_map.get(val.join(" "))[i]) {
                    // console.log($("#token" + i).val());
                    c2 += 1
                    $("#correction" + i).html('<img src="../Libraries/right.png" style="height:25px;width:25px" alt="Wrong">');  
                }
                else {
                    $("#correction" + i).html('<img src="../Libraries/wrong.png" style="height:25px;width:25px" alt="Wrong">')
                }
                
            }
            if (c2 != hind_map.get(val.join(" ")).length) {
                $("#get-answer").html('<button id="toogle1" onclick = "getans()">Get Answer</button>');
            }
        }

    });
            

        
    

