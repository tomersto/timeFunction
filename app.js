
function Func(hour, min, sec){
    if(typeof hour !=='number' || typeof min !=='number' || typeof sec !== 'number') return;
    if(hour > 24 || min > 60 || sec > 60) return;
    if(hour < 10)
    hour = ("0" + hour).slice(-2);
    if(min < 10)
    min = ("0" + min).slice(-2);
    if(sec < 10)
    sec = ("0" + sec).slice(-2);
    console.log(hour + ":" + min + ":" + sec);

}

Func(hour, min, sec);

