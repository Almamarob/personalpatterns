const label= document.getElementById("label")as HTMLInputElement;
const backgroundcolor= document.getElementById("backgroundcolor") as HTMLInputElement;
const type= document.getElementById("type") as HTMLInputElement;
const width= document.getElementById("width") as HTMLInputElement;
const height= document.getElementById("height") as HTMLInputElement;
const positionx= document.getElementById("positionx") as HTMLInputElement;
const positiony= document.getElementById("positiony") as HTMLInputElement;
const target= document.getElementById("target") as HTMLInputElement;
document.getElementById("tool_button")!.addEventListener("click", addbutton);
class CustomElement{
    elementLabel:string="";
    elementBG:string="";
    elementType:string="";
    elementW:string="";
    elementH:string="";
    elementX:string="";
    elementY:string="";
    elementTarget:string="";
    render(){
        document.getElementById(this.elementTarget)!.innerHTML+=`<${this.elementType} style="background-color:${this.elementBG}; width:${this.elementW}; height:${this.elementW}; position:absolute; left:${this.elementX}; top:${this.elementY};" >${this.elementLabel}</${this.elementTarget} >`;
    }

}



function addbutton(){
    const element=new CustomElement();
    element.elementLabel=label.value;
    element.elementBG=backgroundcolor.value;
    element.elementType=type.value;
    element.elementW=width.value;
    element.elementH=height.value;
    element.elementX=positionx.value;
    element.elementY=positiony.value;
    element.elementTarget=target.value;
    element.render();
}