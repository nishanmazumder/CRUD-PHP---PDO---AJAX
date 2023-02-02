// myName = () => {
// 	document.getElementById("test").innerHTML += "Nishan"
// }

// // myName()

// setInterval(myName, 1000)

// textColorChange = () => {
// 	let setIntval;

// 	trigger = () => {
// 		if(!setIntval){
// 			setIntval = setInterval(colorChnage, 1000)
// 		}
// 	}
// 	colorChnage = () => {
// 		const elm = document.querySelector("#test h1")
// 		elm.className = elm.className !== "redColor" ? "redColor" : "greenColor"
// 	}

// 	stopIntVal = () => {
// 		clearInterval(setIntval)
// 	}

// 	document.getElementById("start").addEventListener("click", trigger)
// 	document.getElementById("stop").addEventListener("click", stopIntVal)
// }

// textColorChange()

// console.log(document.querySelector("#test h1"))

// const elm = document.querySelector("#test h1").className
// console.log(elm)

// //

// function testName(x){
// 	function plusX(y){
// 		return x + y
// 	}

// 	return plusX
// }

// testName = (x) => {
// 	plusX = () => {
// 		return x + x
// 	}

// 	return plusX
// }


// document.getElementById("test").innerHTML = testName(8)(8)




// getSecond = () => {

//     const date = new Date()

// // let second = date.getSeconds()

//     console.log(date.getSeconds())
// }


// getSecond()

let upCommingDate = "01-01-2023"

function getSecond() {

    let commingDate = new Date(upCommingDate)
    let currentDate = new Date()

    let diffDate = (commingDate - currentDate)

// let second = date.getSeconds()

// document.getElementById("test").innerHTML += date.getSeconds()
    // console.log(date.getTime())
    console.log(commingDate)
}


getSecond()

// setInterval(getSecond, 1000)

