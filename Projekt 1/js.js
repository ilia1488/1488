window.onload = function(){ 
    let counter = 1480;
    document.getElementById("button").onclick = () => {
      counter = counter + 1;
      document.getElementById('score').innerText = counter;
      if(counter == 1488){
        document.getElementById('score').innerText = 'Пасхалко!'
        counter = 0;
      }
    };
};