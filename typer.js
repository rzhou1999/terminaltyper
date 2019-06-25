class Typer {
  constructor(stage, target, speed = 25, interrupt = "", size = 10) {
    this.stage = stage;
    this.target = target;
    this.active = false;
    this.interrupt = interrupt;
    this.speed = speed;
    this.size = size;
  }

  trimTerminal(){
    const num = this.size;
    var savedText = document.getElementById(this.target).innerHTML.split("<br>");
    if (savedText.length >= num){
        while (savedText.length >= num){
          savedText.shift();
        }
        savedText = savedText.join("<br>");
      }
    else{
      savedText = document.getElementById(this.target).innerHTML;
    }
    document.getElementById(this.target).innerHTML = savedText;
  }

  dump(toType, delay = 0, callback = ()=>{}){
    setTimeout(()=>{
      document.getElementById(this.target).innerHTML += document.getElementById(this.stage).innerHTML;
      document.getElementById(this.stage).innerHTML = toType;
      callback();
    }, delay);
  }

  type(toType, suffix = "", callback = ()=>{}){
    if(this.active){
      document.getElementById(this.target).innerHTML += document.getElementById(this.stage).innerHTML + this.interrupt + "<br>";
      document.getElementById(this.stage).innerHTML = this.suffix;
      this.trimTerminal();
      clearTimeout(this.timeout);
    }

    this.index = 0;
    this.typerStr = toType;
    this.callback = callback;
    this.active = true;
    this.suffix = suffix;
    this.typer()();
  }

  typer(){
    var that = this;
    return function(){

      if (that.index >= that.typerStr.length){
        that.index=0;
        document.getElementById(that.target).innerHTML += document.getElementById(that.stage).innerHTML + "<br>";
        document.getElementById(that.stage).innerHTML = that.suffix;
        that.trimTerminal();
        that.callback();
        that.active = false;
        return;
      }
      that.index+=1;
      document.getElementById(that.stage).innerHTML += that.typerStr.substring(that.index-1,that.index);
      //that.prefix + that.typerStr.substring(0,that.index);
      that.timeout = setTimeout(that.typer(), that.speed);
    }
  }

}
