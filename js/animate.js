//encapsulate functions,object and target
function animate(obj, target, callback){
    //clear timer interval to avoid more than one timers are operating
    clearInterval(obj.timer);
    //set timers to different objects
    obj.timer=setInterval(function(){
        //set step into timer
        //set step as integer
        var step = (target - obj.offsetLeft);
        step = step > 0 ? Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft >= target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step +'px';
    }, 30);  
}


