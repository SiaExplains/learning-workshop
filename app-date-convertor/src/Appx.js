function ConvertShamsiToMiladi(shamsiDate){
  const miladi = shamsiDate + 621;
  window.alert(miladi);
}

function App() {

  // const temprature = 17;
  
  // if(temprature > 20){
  //   console.log('weather is hot');
  // }
  // else {
  //   console.log('weather is cold');    
  // }


  /*
    if(rooz bood) {

    }

  */



  /*
    if(zand bood) {

    }
    else {

    }
  */


    /* 
      if(bache bood) {

      }
      else if(javan) {

      }
    */

      /*
        if(nozad bood) {

        }
        else  if(bache bood) {

        }
        else if(javan nbood) {

        }
        else {
          
        }

      */

  ConvertShamsiToMiladi(1368);

  return (
    <div>
      <h3>This is my Date Convertor Application!</h3>
      <span>Shieda</span>
    </div>
  )
}

export default App;
