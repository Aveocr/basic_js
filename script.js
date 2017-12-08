var block = document.getElementById('block');

function get(){
	// color. This can do with innerHTML
	var color = document.getElementById('color').value;

	block.style.backgroundColor = color;
}

function js(){
	// border-radius
	var rtl = document.getElementById('rtl').value;
	var blt = document.getElementById('blt').value;
	var det = document.getElementById('ded').value;
	var rbs = document.getElementById('ews').value;
	var rbl = document.getElementById('rte');
	var bdt = document.getElementById('bea');
	var dbt = document.getElementById('dds');
	var rgs = document.getElementById('esv');
	// height
	var hei = document.getElementById('hig').value;
	var higt = document.getElementById('higt');
	// width
	var wid = document.getElementById('wid').value;
	var widt = document.getElementById('widt');



	// border-radius
	rbl.value = rtl;
	bdt.value = blt;
	dbt.value = det;
	rgs.value = rbs;
	// height
	higt.value = hei;
	// width
	widt.value = wid; 
// style
block.style.borderRadius = rtl + 'px ' +blt+ 'px ' +det+ 'px ' +rbs+ 'px ';
block.style.height = hei + 'px ';
block.style.width = wid + 'px ';

}