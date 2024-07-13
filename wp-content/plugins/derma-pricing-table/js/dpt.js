var sumw=parseInt('0');
var summ=parseInt('0');
w=0;
m=0;
jQuery( document ).ready(function( $ ) {
  	$("input:checkbox").click(function(){
		var x=$(this).parent().parent().parent().parent().attr('class');
		if(x == 'wt' ){
			var totalw = 0;
			if($(this).is(':checked')){
				w++;
				price = $(this).parent().nextAll().eq(1).text().substring(1);
				sumw+=parseInt(price);
				if(w==2){totalw = (parseInt(setting.two)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.two)+'% Rabatt)');$('td.orw').text('Sie sparen ('+ parseInt(setting.two)+'% Rabatt)');}
				else if(w==3){totalw = (parseInt(setting.three)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.three)+'% Rabatt)');$('td.orw').text('Sie sparen ('+ parseInt(setting.three)+'% Rabatt)');}
				else if(w==4){totalw = (parseInt(setting.four)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.four)+'% Rabatt)');$('td.orw').text('Sie sparen ('+ parseInt(setting.four)+'% Rabatt)');}
				else if(w>=5){totalw = (parseInt(setting.five)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.five)+'% Rabatt)');$('td.orws').text('Sie sparen ('+ parseInt(setting.five)+'% Rabatt)');}
				else{totalw=0;$('td.tnw').text('Kombi-Sparpreis');$('td.orw').text('Sie sparen');}				
				var t=sumw-totalw;
				$('td.oriw').text('€'+sumw);
				$('td.totalw').text('€'+(Math.round(t)));
				$('td.savew').text('€'+totalw);
			}else{
			    w--;
				price = $(this).parent().nextAll().eq(1).text().substring(1);
				sumw-=parseInt(price);
				if(w==2){totalw = (parseInt(setting.two)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.two)+'% Rabatt)');$('td.orw').text('Sie sparen ('+ parseInt(setting.two)+'% Rabatt)');}
				else if(w==3){totalw = (parseInt(setting.three)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.three)+'% Rabatt)');$('td.orw').text('Sie sparen ('+ parseInt(setting.three)+'% Rabatt)');}
				else if(w==4){totalw = (parseInt(setting.four)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.four)+'% Rabatt)');$('td.orw').text('Sie sparen ('+ parseInt(setting.four)+'% Rabatt)');}
				else if(w>=5){totalw = (parseInt(setting.five)*sumw)/100;$('td.tnw').text('Kombi-Sparpreis ('+ parseInt(setting.five)+'% Rabatt)');$('td.orws').text('Sie sparen ('+ parseInt(setting.five)+'% Rabatt)');}
				else{totalw=0;$('td.tnw').text('Kombi-Sparpreis');$('td.orw').text('Sie sparen');}				
				var t=sumw-totalw;
				$('td.oriw').text('€'+sumw);
				$('td.totalw').text('€'+(Math.round(t)));
				$('td.savew').text('€'+totalw);				
			}
		}else{
			var totalm = 0;
			if($(this).is(':checked')){
				m++;
				price = $(this).parent().nextAll().eq(1).text().substring(1);
				summ+=parseInt(price);
				if(m==2){totalm = (parseInt(setting.two)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.two)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.two)+'% Rabatt)');}
				else if(m==3){totalm = (parseInt(setting.three)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.three)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.three)+'% Rabatt)');}
				else if(m==4){totalm = (parseInt(setting.four)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.four)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.four)+'% Rabatt)');}
				else if(m>=5){totalm = (parseInt(setting.five)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.five)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.five)+'% Rabatt)');}
				else{totalm=0;$('td.tnm').text('Kombi-Sparpreis');$('td.orm').text('Sie sparen');}
				var t=summ-totalm;
				$('td.orim').text('€'+summ);				
				$('td.totalm').text('€'+(Math.round(t)));
				$('td.savem').text('€'+totalm);
			}else{
			    m--;
				price = $(this).parent().nextAll().eq(1).text().substring(1);
				summ-=parseInt(price);
				if(m==2){totalm = (parseInt(setting.two)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.two)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.two)+'% Rabatt)');}
				else if(m==3){totalm = (parseInt(setting.three)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.three)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.three)+'% Rabatt)');}
				else if(m==4){totalm = (parseInt(setting.four)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.four)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.four)+'% Rabatt)');}
				else if(m>=5){totalm = (parseInt(setting.five)*summ)/100;$('td.tnm').text('Kombi-Sparpreis ('+ parseInt(setting.five)+'% Rabatt)');$('td.orm').text('Sie sparen ('+ parseInt(setting.five)+'% Rabatt)');}
				else{totalm=0;$('td.tnm').text('Kombi-Sparpreis');$('td.orm').text('Sie sparen');}
				var t=summ-totalm;
				$('td.orim').text('€'+summ);
				$('td.totalm').text('€'+(Math.round(t)));
				$('td.savem').text('€'+totalm);				
			}
		}
	});
});