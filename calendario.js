console.log("Programa para calcular días de la semana");


function calcularDia() {
  let x = document.getElementById("fecha").value;
  let fecha = new Date(x);
  fecha.setTime(fecha.getTime() + fecha.getTimezoneOffset() * 60 * 1000); //Se hace la correcion de fecha


  let diaSemana = ("" + fecha.getDay()); //get.Day nos extrae el día para poder hacer el case
  dia = '';
  switch (diaSemana) {
    case '0':
      fecha = "domingo"
      dia = 'día inahabil';
      break;
    case '1':
      fecha = "lunes"
      dia = 'día habil';
      break;
    case '2':
      fecha = "martes"
      dia = 'día habil';
      break;
    case '3':
      fecha = "miercoles"
      dia = 'día habil';
    case '4':
      fecha = "jueves"
      dia = 'día habil';
    case '5':
      fecha = "viernes"
      dia = 'día habil';
      break;
    case '6':
      fecha = "sabado"
      dia = 'día inhabil';

    default:
      dia = console.log('Eliga un dia del calendario');
      break;
  }
 
  text = (` El ${fecha}  es ${dia}`);
  //console.log(text);
  document.getElementById("calculoDia").innerHTML = text ;
}







