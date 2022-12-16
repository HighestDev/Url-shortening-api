const getLocalStorage=()=>{
    let link=localStorage.getItem("link");
  
    
    if(link){
      //@ts-ignore
      // return (link=JSON.parse(localStorage.getItem('link')));

      return JSON.parse(localStorage.getItem('link'));

    }else{
      return []
    }
  }

  export default getLocalStorage