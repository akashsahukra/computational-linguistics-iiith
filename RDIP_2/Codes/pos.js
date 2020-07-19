$(document).ready(function () {
e1 = ['The child liked the chocolate.', 'She was stopped by the bravest knight.', 'Mary baked a cake for his birthday', 'She decorated the cake carefully', 'Mary wore a dress with polka dots.'];

h1 = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।']

    function show_drop_down(arr) {
        $('#language').html('');
        $("#lang").css("display", "block");
        $("#language").append('<option value=none>---Select a sentence---</option>')
        for (let i = 0; i < arr.length; i++) {
            
            $('#language').append('<option value=' + arr[i]+'>'+arr[i]+'</option>');
    }
    }
    
    $("#pos").on('change', function () {
        $("#pos-table").css("display", "none");
        $("#table-pos").html('');
        $("#stat").html("");
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
        var val = $("#language option:selected").text().split(" ");
        $("#table-pos").append('<tr><th>Lexicon</th><th>POS</th><th id="cor_head"></th><th id="ans_head"></th></tr>')
        for (let i = 0; i < val.length; i++) {
            $("#table-pos").append('<tr><td>'+val[i]+'</td><td><select name="t" id="token0"><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select></td><td id="correction0"></td><td id="correct0"></td></tr>')
        }


    });
});
