let GiphyButtons={
    theme: "Classic Monsters",
    buttons: ['demon','goblin','dragon'],
    
    addItem:  function(newbutton) {
        //add some sql injection
        //Sanitization
        this.buttons.push(newbutton);
        $("#buttons").append(GiphyButtons.oneButtonDisplay(newbutton));
        console.log(this.buttons);
    },
    deleteItem: function(oldbutton) {
        //find index in array
        //Delete array
    },
    oneButtonDisplay: function(button) {
        var output =  $("<button>");
        output.addClass("btn btn-success btn-sm m-1 giphybutton");
        output.text(button);
        output.val(button);
        console.log(output);
        return output;
        //<button type="button" class="btn btn-success">Success</button>
    },
    intialButtons: function () {
        this.buttons.forEach( function(button) {
            var addButton=GiphyButtons.oneButtonDisplay(button);
            $("#buttons").append(addButton); 
            //console.log(button);
            });
    //$('#buttons').
    //$('#buttons').text
    },
    addButtonClick: function () {
        $( "#Giphybuttonadd" ).submit( function( event ) {
            event.preventDefault();        
        });
        $( "#Giphybuttonadd" ).on("click", function() {    
        var newButton = $( "#Giphybuttonadd input" ).val();

        if ((newButton !== null)&&(newButton != "") )  {
            if(GiphyButtons.buttons.indexOf(newButton) === -1 ) {
                GiphyButtons.addItem(newButton);
                console.log(newButton);
            }
        }
        });
    },
    giphyClick: function (){
        $(".giphybutton").on("click", function() {  
            $("#images").html("TEST");            
        })
    },
    startButtons: function () {
        $("#buttons").empty();
        this.intialButtons();
        this.giphyClick();
        this.addButtonClick();

    }
}





var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
var queryURL2 = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=10"

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {
  console.log(response);
  //$('#images').text("<img src=\"" +
  //    response.data[0].embed_url + "\">");

});


$(document).ready(function() {
    GiphyButtons.startButtons();  
});











