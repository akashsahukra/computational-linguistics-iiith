$(document).ready(function () {
e1 = ['The child liked the chocolate.', 'She was stopped by the bravest knight.', 'Mary baked a cake for his birthday', 'She decorated the cake carefully', 'Mary wore a dress with polka dots.'];

h1 = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।']

    function show_drop_down(arr) {
        $('#language').html('');
        $("#lang").css("display", "block");
        $("#language").append('<option value=none>---Select a sentence---</option>')
    for (let i = 0; i < arr.length; i++) {
        $('#language').append('<option value='+i+'>'+arr[i]+'</option>');
    }
    }
    
    $("#pos").on('change', function () {
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
});
