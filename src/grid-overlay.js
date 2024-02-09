class GridOverlay {
	constructor() {
		this.attachGrid()
	}

	attachGrid() {
		let gridElement = document.createElement('div')
		gridElement.setAttribute('id', 'grid-overlay')

		let columnCount = window.getComputedStyle(document.documentElement).getPropertyValue('--go-columns')

		for (let c = 0; c < columnCount; c++) {
			gridElement.appendChild(document.createElement('div'))
		}

		document.querySelector('body').appendChild(gridElement)
	}
}

new GridOverlay()
