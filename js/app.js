$(document).ready(function(){
  	$(".op1").hover(function(){
	    arriba =  Math.random() * (80 - 1) + 1;
	    derecha =  Math.random() * (80 - 1) + 1;
		$(this).css({ top:  arriba+"%", left: derecha+"%" });
    });
});

function yes(){
	Swal.fire({
  	  showConfirmButton: false,
	  title: 'Por supuesto que me quedaré contigo. Sin importar lo que suceda. por siempre y para siempre 😊',
	  width: 400,
	  padding: '3em',
	  background: '#fff url(images/background.jpg)',
	  backdrop: `
	    rgba(0,0,123,0.4)
	    url("images/yes.gif")
	    left top
	    no-repeat
	  `
	})
}