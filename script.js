$("button").click(function(){
    var age=parseInt($(".inpage").val());
    var job=$(".injob").val();
    
        if(age<30 && job==="spy"){
        $(".message").text("you are black widow!");
        $(".bw").show();
        $("body").css("background-color", "darkred");
        }
        
        else if(age<30 && job==="assassin"){
        $(".message").text("you are the winter soldier!");
        $(".ws").show();
        $(".bw").hide();
        $("body").css("background-color", "darkslategrey");
        }
        
        else if(age>30 && job==="assassin"){
        $(".message").text("you are the winter soldier!");
        $(".ws").show();
        $(".bw").hide();
        $("body").css("background-color", "darkslategrey");
        }
        
        else if(age>30 && job==="spy"){
        $(".message").text("you are black widow!");
        $(".bw").show();
        $("body").css("background-color", "darkred");
        }
         
        else if(age >30 && job==="genetically modified"){
        $(".message").text("you are captain america!");
        $(".cap").show();
        $("body").css("background-color", "deepskyblue");
        }
        
        else if(age>30 && job==="archer"){
         $(".message").text("you are hawkeye!");
        $(".he").show();
         $("body").css("background-color", "darkslateblue");
        }
        
         else if(age<30 && job==="genetically modified"){
        $(".message").text("you are captain america!");
        $(".cap").show();
        $("body").css("background-color", "deepskyblue");
        }
        
        else if(age<30 && job==="archer"){
         $(".message").text("you are hawkeye!");
        $(".he").show();
         $("body").css("background-color", "darkslateblue");
        }
        
        else{
        $(".message").text("couldn't profile you , try again!");
        $(".nick").show();
         $("body").css("background-color", "silver");
        }        
});