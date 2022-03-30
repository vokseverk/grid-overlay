(function() {
	function attachGrid() {
		let gridElement = document.createElement('div')
		gridElement.setAttribute('id', 'grid-overlay')

		let columnCount = window.getComputedStyle(document.documentElement).getPropertyValue('--go-columns')
		console.log(`Column count: ${columnCount}`)

		for (let c=0; c<columnCount; c++) {
			gridElement.appendChild(document.createElement('div'))
		}

		document.querySelector('body').appendChild(gridElement)
	}

	document.addEventListener('DOMContentLoaded', (event) => { attachGrid()	})
})()
