$(function(){
	$("#logo").mouseover(function(){
		$(this).css("width","70%");
		$(this).css("height","70%");
	}).mouseout(function(){
		$(this).css("width","50%");
		$(this).css("height","50%");
	})
});
function pokazKalendarz(){
	var zaznaczoneDni = {};
	var x = localStorage.data;
	zaznaczoneDni[new Date(x)] = new Date(x);   
	$('#datepicker').datepicker({
		beforeShowDay: function( date ) {
			var zaznaczenie = zaznaczoneDni[date];
			if( zaznaczenie ) {
				 return [true, "event", 'Tooltip text'];
			} else {
			 return [true, '', ''];
			}
		}
	});
}
function pokazDialog() {
	if(localStorage.dni != undefined){
		$("#jqDialog").append('<p>Zostało ' + localStorage.dni + ' dni do Twojego meczu!</p>')
		$( "#jqDialog" ).dialog({
			close: function(){
				location.reload();
			}
		});
	}
};