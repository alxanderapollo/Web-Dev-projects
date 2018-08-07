            //start time
            var start = new Date().getTime();
            
            //random color generator 
            function getRandomColor (){
                
                //split is splitting the letters into an array 
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                
                for(var i = 0; i<6; i++){
                    
                    color+= letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }// end of getRandomColor
            
            
            
            function makeShapeAppear(){
                
                //variables for top and left of the shape 
                var top = Math.random() * 400;
                
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                
                //conditinal will deterimine whether or not a shape should be a circle
                if(Math.random() > 0.5){
                    
                  document.getElementById("shape").style.borderRadius = "50%";
                    
                }else{
                    document.getElementById("shape").style.borderRadius = "0";
                }
                
                
                //effecting style  by using top, left and width attributes
                
                //background color
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                //width
                document.getElementById("shape").style.width = width+"px";
                //height
                document.getElementById("shape").style.height = width+"px";
                //top
                document.getElementById("shape").style.top = top + "px";
                //left
                document.getElementById("shape").style.left = left +"px";
                
                //block will make the shape appear 
                document.getElementById("shape").style.display = "block"
                
                 //time gets updated 
               var start = new Date().getTime();
                
            }
            function appearAfterDelay(){
                
                //when the page is refreshed, settimeout will determine the amount of time it takes for the shape to appear on screen
                setTimeout(makeShapeAppear, Math.random() * 2000);
                
            }
            
            appearAfterDelay();

            
            //shape disapear function 
            document.getElementById("shape").onclick = function(){
                //none at the end will make the shape disapear 
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start)/1000;
                
                
                //s for seconds
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
                
                
            }