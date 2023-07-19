// console.clear
// try {

//     console.log(6+6);
//     console.log("Akhil");  
//     console.log(9+1)

//     samplebug;
//   } catch (err) {
  
//     console.log('Getting this errr because try doesnot work properly'); 
  
//   }


  function f() {
    try {
      console.log('start');
    //   throw new Error("an error");
    } catch (err) {
    
      if("can't handle the error") {
        throw err;
      }
  
    } finally {
      console.log('cleanup!')
    }
  }
  
  f(); 