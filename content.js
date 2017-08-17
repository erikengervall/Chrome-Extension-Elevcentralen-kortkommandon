function keyDownEvent(e) {
	var buttons = document.getElementsByClassName("btn-group btn-group-justified")[0].children
	if (e.keyCode == 37) { /* left arrow, previous question */
		buttons[0].click()
	}
	if (e.keyCode == 38) { /* up arrow, mark */
		buttons[4].click()
	}
	if (e.keyCode == 40) { /* down arrow, overview */
		buttons[3].click()
	}
	if (e.keyCode == 39 || e.keyCode == 13) { /* right arrow || enter, next question */
		buttons[5].click()
	}
	if (e.keyCode == 192) { /* paragraph, enlarge image */
		var columns = document.getElementsByClassName("col-sm-5")
		var element = columns[columns.length - 1]
		var link = element.getElementsByTagName("a")[0].click()
	}
	if (e.keyCode >= 49 && e.keyCode <= 57) { /* 1-9 */
		var alternativeNo = e.keyCode - 49
		var input = document.getElementsByClassName("questions")[0].children[alternativeNo]
		if (input) {
			input.getElementsByTagName("input")[0].click()
		} else {
			console.log("There's no alternative #" + (alternativeNo + 1))
		}
	}
}

document.addEventListener("keydown", keyDownEvent, false)