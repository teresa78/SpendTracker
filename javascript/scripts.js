$(document).ready(function () {
    function init() {
        if (localStorage["your_income"]) {
            $('#your_income').val(localStorage["your_income"]);
        }
        if (localStorage["mortgage"]) {
            $('#mortgage').val(localStorage["mortgage"]);
        }
        if (localStorage["utility"]) {
            $('#utility').val(localStorage["utility"]);
        }
        if (localStorage["water"]) {
            $('#water').val(localStorage["water"]);
        }
        if (localStorage["tv"]) {
            $('#tv').val(localStorage["tv"]);
        }
        if (localStorage["phone"]) {
            $('#phone').val(localStorage["phone"]);
        }
        if (localStorage["internet"]) {
            $('#internet').val(localStorage["internet"]);
        }
        //other monthly bills
        if (localStorage["internet"]) {
            $('#internet').val(localStorage["internet"]);
        }
    }
    $('.localStore').keyup(function () {
        localStorage[$(this).attr('id')] = $(this).val();
    });
    init();
    getTotal();
});

function getTotal(){ 
	//gets value entered for income
	var income1 = localStorage.getItem('your_income');
	//gets total of bills entered
	var mortgage1 = localStorage.getItem('mortgage');
	var utility1 = localStorage.getItem('utility');
	var water1 = localStorage.getItem('water');
	var tv1 = localStorage.getItem('tv');
	var phone1 = localStorage.getItem('phone');
	var internet1 = localStorage.getItem('internet');	
	//adds values for bills entered
	result = parseInt(mortgage1)+ parseInt(utility1)+ parseInt(water1)+ parseInt(tv1)+ parseInt(phone1)+ parseInt(internet1);
	
	//gets weekly expenses
	var grocery1 = localStorage.getItem('grocery');
	var dine1 = localStorage.getItem('dine');
	var vehicle1 = localStorage.getItem('vehicle');
	var child1 = localStorage.getItem('child');
	var other1 = localStorage.getItem('other');
	//converts weekly bills to monthly totals
	grocery = parseInt(grocery1)*52/12;
	dine = parseInt(dine1)*52/12;
	vehicle = parseInt(vehicle1)*52/12;
	child = parseInt(child1)*52/12;
	other = parseInt(other1)*52/12;
	
	wkResult = parseInt(grocery)+parseInt(dine)+parseInt(vehicle)+parseInt(child)+parseInt(other);
	
	//gets other monthly expenses
	var credit1 = localStorage.getItem('credit');
	var clothing1 = localStorage.getItem('clothing');
	var medical1 = localStorage.getItem('medical');
	var misc1 = localStorage.getItem('misc');
	
	mnExpense = parseInt(credit1)+parseInt(clothing1)+parseInt(medical1)+parseInt(misc1);
	
	//gets total expenses
	totExpense = result + wkResult + mnExpense;
	//subtracts income from total bills
	result1 = parseInt(income1)- totExpense;
	if (!isNaN(result)) {
	document.getElementById('inc').value = parseInt(income1);
	//displays total on Bills page
	document.getElementById('add').value = result;
	document.getElementById('add1').value = result;
	//displays result on Monthly Budget page
	document.getElementById('tot').value = result1;
	//displays result on Monthly Budget page
	document.getElementById('week').value = wkResult;
	document.getElementById('week1').value = wkResult;
	//displays result on Monthly Budget page
	document.getElementById('othMonth').value = mnExpense;
	document.getElementById('othMonth1').value = mnExpense;
	}
}






