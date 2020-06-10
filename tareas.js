
function añadir(){
    var t = $$('#tarea');
    var tarea = t[0].value;
    var li = new Element('li');
    li.appendText(tarea);
    if(tarea == ""){
        alert('No has introducido ninguna tarea');
    }else{
        var span = new Element('span');
        span.appendText('\u00D7');
        span.set('class','close');
        li.grab(span);
        document.id('myUL').grab(li); //Se añade a lista la nueva tarea
        document.id('tarea').set('value', ''); //Se establece su valor a vacio
        var span = new Element('span');
        this.marcar();
        this.borrado();
        
    }


}

//Creamos el boton de eliminar para cada tarea;
var nodeList = document.body.getElements('LI');
var i
for(i = 0; i < nodeList.length; i++){
    var span = new Element('span');
    span.appendText('\u00D7');
    span.set('class','close');
    nodeList[i].grab(span);
}
console.log(nodeList);

//Añadimos un detector de eventos para añadir una nueva tarea
this.marcar();
function marcar(){
    var lista =  document.id('myUL');
    lista.addEvent('click', function(ev){
        ev.target.set('class','checked');
        document.id('realizadas').grab(ev.target);
    
    });
    
}

this.borrado();

function borrado(){
    var eliminar = document.body.getElements('SPAN');
    var i;
    for(i = 0; i < eliminar.length; i++){
       eliminar[i].addEvent('click',function(ev){
            var padre = ev.target.getParent();
            padre.dispose();
       });
    }
}