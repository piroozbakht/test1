window.onload = function () {
	
	var btnBefore = document.getElementById("btnBefore");
	btnBefore.addEventListener("click", function () {
		var newNode=document.createElement("p");
		newNode.innerHTML="<i>*** New Patients Only ***</i>";
		newNode.setAttribute("id","newnode");

		var formGroup = document.getElementsByClassName("form-group");
		formGroup[0].insertBefore(newNode,formGroup[0].lastElementChild);

	});


	var btnAfter = document.getElementById("btnAfter");
	btnAfter.addEventListener("click", function() {
		// var newNode=document.createElement("button");
		// newNode.innerHTML="New Button";
		// newNode.setAttribute("id","btnNew");
		// var formGroup = document.getElementsByClassName("form-group");
		// formGroup[formGroup.length-1].insertBefore(newNode,formGroup[formGroup.length-1].lastElementChild);
		var btnClear=document.createElement("button");
		btnClear.setAttribute("typr","reset");
		btnClear.setAttribute("class","btn btn-lg");
		var textClear = document.createTextNode("Clear");
		btnClear.appendChild(textClear);
		var formGroup = document.getElementsByClassName("form-group");
		formGroup[formGroup.length-1].appendChild(btnClear);
	});


	var btnDelete=document.getElementById("btnDelete");
	btnDelete.addEventListener("click", function() {
		var formGroup = document.getElementsByClassName("form-group");
		formGroup[0].lastElementChild.remove();
	});
}