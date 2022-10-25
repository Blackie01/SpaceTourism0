  function onClickOfDouglasCircle (event){
    event.preventDefault()
    document.getElementById('douglas').style.display = "block"
    document.getElementById('mark').style.display = "none"
    document.getElementById('victor').style.display = "none"
    document.getElementById('ansari').style.display = "none"
    document.getElementById('douglas-image').style.display = "block"
    document.getElementById('mark-image').style.display = "none"
    document.getElementById('victor-image').style.display = "none"
    document.getElementById('ansari-image').style.display = "none"
    document.getElementById('circle1').style.backgroundColor = "#fff"
    document.getElementById('circle2').style.backgroundColor = "#979797"
    document.getElementById('circle3').style.backgroundColor = "#979797"
    document.getElementById('circle4').style.backgroundColor = "#979797"
  }

  function onClickOfMarkCircle (event){
    event.preventDefault()
    document.getElementById('douglas').style.display = "none"
    document.getElementById('mark').style.display = "block"
    document.getElementById('victor').style.display = "none"
    document.getElementById('ansari').style.display = "none"
    document.getElementById('douglas-image').style.display = "none"
    document.getElementById('mark-image').style.display = "block"
    document.getElementById('victor-image').style.display = "none"
    document.getElementById('ansari-image').style.display = "none"
    document.getElementById('circle1').style.backgroundColor = "#979797"
    document.getElementById('circle2').style.backgroundColor = "#fff"
    document.getElementById('circle3').style.backgroundColor = "#979797"
    document.getElementById('circle4').style.backgroundColor = "#979797"
  }

  function onClickOfVictorCircle (event){
    event.preventDefault()
    document.getElementById('douglas').style.display = "none"
    document.getElementById('mark').style.display = "none"
    document.getElementById('victor').style.display = "block"
    document.getElementById('ansari').style.display = "none"
    document.getElementById('douglas-image').style.display = "none"
    document.getElementById('mark-image').style.display = "none"
    document.getElementById('victor-image').style.display = "block"
    document.getElementById('ansari-image').style.display = "none"
    document.getElementById('circle1').style.backgroundColor = "#979797"
    document.getElementById('circle2').style.backgroundColor = "#979797"
    document.getElementById('circle3').style.backgroundColor = "#fff"
    document.getElementById('circle4').style.backgroundColor = "#979797"
  }

  function onClickOfAnsariCircle (event){
    event.preventDefault()
    document.getElementById('douglas').style.display = "none"
    document.getElementById('mark').style.display = "none"
    document.getElementById('victor').style.display = "none"
    document.getElementById('ansari').style.display = "block"
    document.getElementById('douglas-image').style.display = "none"
    document.getElementById('mark-image').style.display = "none"
    document.getElementById('victor-image').style.display = "none"
    document.getElementById('ansari-image').style.display = "block"
    document.getElementById('circle1').style.backgroundColor = "#979797"
    document.getElementById('circle2').style.backgroundColor = "#979797"
    document.getElementById('circle3').style.backgroundColor = "#979797"
    document.getElementById('circle4').style.backgroundColor = "#fff"
  }

  function onHoverCircle1(event){
    event.preventDefault()
    document.getElementById('circle1').style.backgroundColor = "#cecaca"
  }

  function onHoverCircle2(event){
    document.getElementById('circle2').style.backgroundColor = "#cecaca"
  }

  function onHoverCircle3(event){
    document.getElementById('circle3').style.backgroundColor = "#cecaca"
  }

  function onHoverCircle4(event){
    document.getElementById('circle4').style.backgroundColor = "#cecaca"
  }