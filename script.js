const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
	let val=0;
	prices.forEach((price) => {
		val+=Number(price.textContent);
	});
	const table= document.querySelector('.table');
	const tr = document.createElement('tr');
	const td = document.createElement('td');

	td.setAttribute('data-ns-test', 'grandTotal');
	td.textContent = val;
	
    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

