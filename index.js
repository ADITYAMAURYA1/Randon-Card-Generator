// this is file now available on github

const gen = ()=> {
  const getrandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let num = Number(n.value);
  let cards = "";
  for (let k = 1; k <= num; k++) {
    //this code is for cc number generate
    let bin = binn.value;
    let cc = "";
    if (bin.length != 0) {
      if (bin.length < 16) {
        for (let i = 0; i < 16; i++) {
          if (i < bin.length) {
            cc += bin[i];
          }
          else {
            cc += getrandomnumber(0, 9);
          }
        }
      }
      else if (bin.length == 16) {
        cc = bin;
      }
      else {
        sp.innerText = "Please Correct BIN";
        sp.style.color = "red";
      }
      //end code for cc number generate
      //code for month

      let mm = m.value;
      let mon = mm;
      if (mm == "222") {
        mon = getrandomnumber(1, 12);
      }
      if (mon < 10) {
        mon = "0" + mon;
      }
      //end code for month
      //code for year
      let yy = y.value;
      let year = yy;
      if (yy == "111") {
        year = "20" + getrandomnumber(24, 30);
      }
      //code for cvv
      let cv = c.value;
      let cvv = "";
      for (let i = 0; i < 3; i++) {
        if (i < cv.length) {
          cvv += cv[i];
        }
        else {
          cvv += getrandomnumber(0, 9);
        }
      }
      cvv = cvv + "\n";
      //end code for cvv
      cards += cc + "|" + mon + "|" + year + "|" + cvv;
    }
    else {
      sp.innerText = "Please Enter BIN";
      sp.style.color = "red";
    }
  }
  result.value = cards;
}