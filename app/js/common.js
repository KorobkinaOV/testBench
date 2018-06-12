/*burger menu*/ 
$(".burger").click(function(){
	$(".hidden-menu").toggle("slow");
	$(".burger").toggle("slow");	
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".hidden-menu"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.hide(); // скрываем его	
		$(".burger").css("display","block");
	}

});

//menu

$("#leftside-navigation .sub-menu > a").click(function(e) {
	$("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
	e.stopPropagation()
  })

//calendar
pickmeup('.date', {
	format	: 'Y-m-d',
	mode : 'range '
});

//new chart1
		var ctx = document.getElementById('chart1').getContext('2d');
		Chart.defaults.global.legend.labels.usePointStyle = true;
		var myBarChart = new Chart(ctx, {
			type: 'horizontalBar',
			data: {
				labels: ['Video', 'Social'],
				datasets: [{
					label: 'New',
					backgroundColor: "rgba(0, 183, 241, 0.49)",
					data: [890, 2120],
					borderColor: 'transparent'
				}, {
					label: 'Return',
					backgroundColor: "rgba(243, 156, 18, 0.49)",
					data: [0, 0],
					borderColor: 'transparent'
				}]
			},				
			options: {
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							fontfamily: 'LFregular',
							fontSize: 20,
							fontColor: '#989898'
						},
						boxWidth: 20		
					},
					xAxes: [{
						type: 'linear',
						display: true,
						fill: '#707070', 
						scaleLabel: {
							display: true,
							labelString: 'fpr',
							fontStyle: 'bold',
							interval: 20,
						},
						ticks:{
          		beginAtZero: true
						}
					}],
					scales: {
						xAxes: [{
							ticks: {
									fontSize: 20,
									fontFamily: 'LFRegular',
									fontColor: '#989898',
									beginAtZero: true,
									stepSize: 500,
									callback: function(label, index, labels) {

										if( label > 999){
											return label/1000+'k';
										} else if( label < 0){
											return label.toFixed(2);
										} 
										return label;
											
									}
							}
					}],
					yAxes: [{
						ticks: {
								fontSize: 20,
								fontFamily: 'LFRegular',
								fontColor: '#989898'
						},
						gridLines: {
							display: false
						},
					}],	
				}
			}
	});


	//charts 2
	var ctx = document.getElementById('chart2').getContext('2d');
	Chart.defaults.global.legend.labels.usePointStyle = true;
	
	var myBarChart = new Chart(ctx, {
		type: 'horizontalBar',
		data: {
			labels: ['Video', 'Social'],
			datasets: [{
				label: 'New',
				backgroundColor: "rgba(0, 183, 241, 0.49)",
				data: [890, 2120],
				borderColor: 'transparent'
			}, {
				label: 'Return',
				backgroundColor: "rgba(68, 185, 0, 0.49)",
				data: [1000, 298],
				borderColor: 'transparent'
			}]
		},				
		options: {
				legend: {
					display: true,
					position: 'bottom',
					labels: {
						fontfamily: 'LFregular',
						fontSize: 20,
						fontColor: '#989898',
						paddingRight: 20
					},
					boxWidth: 20		
				},
				xAxes: [{
					type: 'linear',
					display: true,
					fill: '#707070', 
					scaleLabel: {
						display: true,
						labelString: 'fpr',
						fontStyle: 'bold',
						interval: 20,
					}
				}],
				scales: {
					xAxes: [{
						ticks: {
								fontSize: 20,
								fontFamily: 'LFRegular',
								fontColor: '#989898',
								beginAtZero: true,
								stepSize: 500,
								callback: function(label, index, labels) {

									if( label > 999){
										return label/1000+'k';
									} else if( label < 0){
										return label.toFixed(2);
									} 
									return label;
										
								}
						}
				}],
				yAxes: [{
					ticks: {
							fontSize: 20,
							fontFamily: 'LFRegular',
							fontColor: '#989898'
					},
					gridLines: {
						display: false
					},
				}],	
			}
		}
});

//chart doughnut1
new Chart(document.getElementById("chartDoughnut1"), {
	type: 'doughnut',
	weight: 30,
	data: {
		labels: ["Social", "Video"],
		datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["rgba(0, 183, 241, 0.49)", "rgba(68, 185, 0, 0.49)"],
				data: [2478,5267],
				borderWidth: 1,
			}
		]
	},
	options: {
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				fontfamily: 'LFregular',
				fontSize: 25,
				fontColor: '#989898',
				padding: 65
			},
			boxWidth: 10		
		},
		cutoutPercentage: 70 
	},
});

//chart doughnut2
new Chart(document.getElementById("chartDoughnut2"), {
	type: 'doughnut',
	weight: 30,
	data: {
		labels: ["New", "Return"],
		datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["rgba(0, 183, 241, 0.49)", "rgba(243, 156, 18, 0.49)"],
				data: [80,150],
				borderWidth: 1,
			}
		]
	},
	options: {
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				fontfamily: 'LFregular',
				fontSize: 25,
				fontColor: '#989898',
				padding: 65
			},
			boxWidth: 10		
		},
		cutoutPercentage: 70 
	},
});


//chart mixed
var ctx = document.getElementById('chartMixed').getContext('2d');
var mixedChart = new Chart(ctx, {
	type: 'bar',
	scaleFontColor: 'red',
	data: {
	  datasets: [{
			label: 'Bar Dataset',
			data: [280, 50, 130, 240, 290, 95, 115, 20, 350, 102, 280, 50, 130, 240, 290],
			yAxisID: 'B',
			backgroundColor: "rgba(0, 183, 241, 0.25)"
			
		  }, {
			label: 'Line Dataset',
			data: [1000, 800, 1250, 1050, 1850, 1800, 550, 1369, 384, 1000, 800, 950, 1050, 1250, 960],
			yAxisID: 'A',
			fill: false,
  
			// Changes this dataset to become a line
			type: 'line',
			backgroundColor: '#44B900',
			borderColor: '#44B900',
			pointRadius: 0,
			ticks: {
				beginAtZero: true
			}
		  }],
	  labels: ['10 Jan 18', '10 Jan 18', '10 Jan 18', '10 Jan 18','10 Jan 18','10 Jan 18','10 Jan 18','10 Jan 18','10 Jan 18', '10 Jan 18', '10 Jan 18', '10 Jan 18','10 Jan 18','10 Jan 18','10 Jan 18']
	},
	options: {
		scales: {
			yAxes: [{
				id: 'A',
				position: 'left',			
				ticks: {
					beginAtZero: true,
					stepSize: 500,
					callback: function(label, index, labels) {

						if( label > 999){
							return label/1000+'k';
						} else if( label < 0){
							return label.toFixed(2);
						} 
						return label;
							
					},
					fontSize: 20,
					fontFamily: 'LFExLight',
					fontColor: '#44B900',
				}
			}, {
				id: 'B',
				position: 'right',
				ticks: {
					beginAtZero: true,
					stepSize: 100,
					callback: function(label, index, labels) {

						if( label > 999){
							return label/1000+'k';
						} else if( label < 0){
							return label.toFixed(2);
						} 
						return label;
							
					},
					fontSize: 20,
					fontFamily: 'LFExLight',
					fontColor: '#00B7F1',
					borderColor: 'transparent',

					},				
			}],
			xAxes: [{
				ticks: {
					fontSize: 16,
					fontFamily: 'LFLight',
					fontColor: '#989898',
				},
				gridLines:{
					display: false,
					
				},
			}]
		},
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				fontfamily: 'LFRegular',
				fontSize: 19,
				fontColor: '#989898',
				padding: 50,
				borderColor: 'transparent'
			},		
		},
	  },
	    
  });