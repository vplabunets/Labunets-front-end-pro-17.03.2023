(function () {
	//get elements
	const wrapperEl = document.querySelector(".wrapper");

	function createTable(startNum, finishNum, tableWidth) {
		const startNumber = startNum;
		const finishNumber = finishNum;
		const tableSize = tableWidth;
		let tableDataString = "";

		for (let i = startNumber; i <= finishNumber; i += 1) {
			tableDataString = tableDataString + `<td>${i}</td>`;
			if (i === startNumber) {
				tableDataString = `<tr><td>${i}</td>`;
			}
			if (i % tableSize === 0 && i !== finishNumber) {
				tableDataString = tableDataString + `</tr><tr>`;
			}
			if (i === finishNumber) {
				tableDataString = tableDataString + `</tr>`;
			}
		}

		wrapperEl.innerHTML = `<table class="numbersTable">
		<caption>Numbers from ${startNumber} to ${finishNumber}</caption>${tableDataString}</table>`;

	}

	createTable(1, 100, 10)
})()