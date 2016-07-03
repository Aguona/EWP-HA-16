
$("#film_table").DataTable({
    "ajax" : "filme.json",
   	"pageLength": 5,
   	"order": ["1", "asc"]
});

$(document).ready(function() {
	$('.tooltip').tooltipster();
});


$("#btn_lieblings").tooltipster({
    content: $("#Lieblingsfilm").detach()
});