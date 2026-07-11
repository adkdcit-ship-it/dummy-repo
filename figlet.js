const styledText = require("figlet")

styledText("Pranali", 
    function(err, data) 
    {
        if (err){
            console.log("something went wrong");
            
        }else{
            console.log(data);
            
        }
    }
);

