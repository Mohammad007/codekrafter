
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['One', 'Two', 'Three'],
		datasets: [{
			label: '# of Votes',
			data: [42, 38, 20],
			backgroundColor: [
				'#293478',
				'#cecdd4',
				'#edecf2'

			],
			borderColor: [
				'#fff',
				'#fff',
				'#fff'

			],
			borderWidth: 1
		}]
	},

});