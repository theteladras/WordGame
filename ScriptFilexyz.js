//na ucitavanju stranice
$( document ).ready(function() {
  $(".correcte").hide();
  $(".closee").hide();
  var correctA = $("#correctA")[0];
  var falseA = $("#falseA")[0];
});



var propo = document.cookie.replace(/(?:(?:^|.*;\s*)kuki2\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (propo !== NaN) {
    var points = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)kuki2\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    $("#results").html("Current score: "+ points.toFixed(1) + " points");

  }
if (propo < 1 && propo > -1 ) {
var points = 0;
    $("#results").html("Current score: "+ points.toFixed(1) + " points");
  }
        // when the user submits the form,

        //creating an array of words
        var $words = ["chicken", "hound", "monkey", "martian", "potato", "techno", "thrones", "academy", "reload", "sound", "force", "incognito", "plane", "reload", "processing", "writing", "reading", "focusing", "planing", "mastering", "animation", "effect", "scarlet", "giant", "jquery", "arthur", "floor", "glass", "laptop", "table", "picture"];

var i = parseInt(Math.random() * $words.length);
var aaa = $words[i];
var n = $words[i].length;
var pomoc = 0;


function shuffelWord(word) {
  var shuffledWord = '';
  var charIndex = 0;
  word = word.split('');
  while (word.length > 0) {
    charIndex = Math.floor(word.length * Math.random());
    shuffledWord += word[charIndex];
    word.splice(charIndex, 1);
  }
  return shuffledWord;
}

document.querySelector('.scrambled').innerHTML = shuffelWord(aaa);

/*FORMA FORMA FORMA*/
   $("#joke-form").on("submit", function(event){
           event.preventDefault();
           var $input = $(this).find("[name=blam]");
           var input = $input.val();
           var inpUpp = input.toUpperCase();
           var aaaUpp = aaa.toUpperCase();

                    /*provera dali je rec TACNA*/
                   if (inpUpp == aaaUpp)
        {
                       points += 2;
                       pomoc = 0;
                       document.cookie="kuki2="+points;
            $("#results").html("Current score: "+ points.toFixed(1) + " points");

            /*new word generator*/
            i = parseInt(Math.random() * $words.length);
               aaa = $words[i];
            document.querySelector('.scrambled').innerHTML = shuffelWord(aaa);
              $("#btnHint").html("Click to get a HINT <b>(2x)</b>");

              $(".correcte").fadeIn(1000);
              $(".correcte").fadeOut(1000);
              correctA.play();
        }
                  /*NETACNA rec i nije prazna*/
                  if (inpUpp != aaaUpp && inpUpp != "")
        {
                      points -= 1.2;
                      pomoc = 0;
                      document.cookie="kuki2="+points;
                      $("#results").html("Current score: "+ points.toFixed(1) + " points");

                      /*new word generator*/
                      i = parseInt(Math.random() * $words.length);
                         aaa = $words[i];
                      document.querySelector('.scrambled').innerHTML = shuffelWord(aaa);
                        $("#btnHint").html("Click to get a HINT <b>(2x)</b>");

                        $(".closee").fadeIn(1000);
                        $(".closee").fadeOut(1000);
                        falseA.play();
        }
        $(this).find("[size=15]").val("");
        });



        /*NOVA REC DUGME*/
        $("#NotifBtn").on("click", function(){
          points -= 0.5;
          pomoc = 0;
          document.cookie="kuki2="+points;
          $("#results").html("Current score: "+ points.toFixed(1) + " points");
          i = parseInt(Math.random() * $words.length);
             aaa = $words[i];
          document.querySelector('.scrambled').innerHTML = shuffelWord(aaa);
          $("#btnHint").html("Click to get a HINT <b>(2x)</b>");
        });



        /*Hint / pomoc*/
        $("#btnHint").on("click", function() {
                if (pomoc == 0) {
                $("#btnHint").html("• The first letter is: " + aaa[0].toUpperCase() + " <b>(1x)</b>");
                points -= 0.2;
                document.cookie="kuki2="+points;
                $("#results").html("Current score: "+ points.toFixed(1) + " points");
                pomoc +=1;
              }
                else if ( pomoc == 1) {
                $("#btnHint").html("• The first letter is: " + aaa[0].toUpperCase() + " • Second letter is: " + aaa[1].toUpperCase() + " <b>(0)</b>");
                points -=0.5;
                document.cookie="kuki2="+points;
                $("#results").html("Current score: "+ points.toFixed(1) + " points");
                pomoc +=1;
              }

        });


        $("#btn1").on("submit", function(e){
           e.preventDefault();
           i = parseInt(Math.random() * $words.length);
           aaa = $words[i];
        document.querySelector('.scrambled').innerHTML = shuffelWord(aaa);
        $(this).find("[size=15]").val("");
        });


        if (points <4 && points> -4)
        { $("#results").css("color","black").css("background-color", "lightgreen");};

        $( ".btn-success" ).click(function() {
        if (points >= 4 && points < 10)
        {$("#results").css("color","yellow").css("background-color", "green");};
        if (points>=10)
        {$("#results").css("color","lightyellow").css("background-color", "darkgreen");};
        if (points <4 && points> -4)
        { $("#results").css("color","black").css("background-color", "lightgreen");};
        if (points < -4)
        { $("#results").css("color","white").css("background-color", "red");};
});
        $( ".btn-danger" ).click(function() {
        if (points >= 4 && points < 10)
        {$("#results").css("color","yellow").css("background-color", "green");};
        if (points>=10)
        {$("#results").css("color","lightyellow").css("background-color", "darkgreen");};
        if (points <4 && points> -4)
        { $("#results").css("color","black").css("background-color", "lightgreen");};
        if (points < -4)
        { $("#results").css("color","white").css("background-color", "red");};
});

        $( window ).load(function() {
          if (points >= 4 && points < 10)
          {$("#results").css("color","yellow").css("background-color", "green");};
          if (points>=10)
          {$("#results").css("color","lightyellow").css("background-color", "darkgreen");};
          if (points <4 && points> -4)
          { $("#results").css("color","black").css("background-color", "lightgreen");};
          if (points < -4)
          { $("#results").css("color","white").css("background-color", "red");};
});
