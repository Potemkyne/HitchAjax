		// JavaScript Document

		$(function () {
			"use strict";
			$('#button').click(function (e) {
				e.preventDefault(e);
				$.ajax({
					url: 'formextractall.php',
					cache:false,
					dataType: 'json'
				}).fail(function(arg,statut,erreur){
					console.log(arg);
					console.log(statut);
					console.log(erreur)
				}).always(function(arg,statut){
					console.log(arg);
					console.log(statut);
				}).done(function (arg) {
					$.each(arg.response, function(index,obj){
						$.each(obj, function(cle,valeur){
							$('tbody').append("<tr class='success'><td> " + valeur + "</td></tr>");
						})
					});	
				});
			});
		});
