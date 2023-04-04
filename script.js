//home
function Segitiga() {
	window.location.href = "Segitiga.html";
  }
  
  function  JajarGenjang() {
	window.location.getElementById = "h2";
  }
//SEGITIGA


function hitungLuas() {
	var alas = parseFloat(prompt("Masukkan panjang alas segitiga: "));
	var tinggi = parseFloat(prompt("Masukkan tinggi segitiga: "));
	var luas = (alas * tinggi) / 2;
	alert("Luas segitiga adalah: " + luas);
}

function hitungKeliling() {
	var sisiA = parseFloat(prompt("Masukkan panjang sisi A segitiga: "));
	var sisiB = parseFloat(prompt("Masukkan panjang sisi B segitiga: "));
	var sisiC = parseFloat(prompt("Masukkan panjang sisi C segitiga: "));
	var keliling = sisiA + sisiB + sisiC;
	alert("Keliling segitiga adalah: " + keliling);
}

		function updateTable() {
			var table = document.getElementById("history-table");
			table.innerHTML = "<tr><th>Operasi</th><th>Sisi 1</th><th>Sisi 2</th><th>Sisi 3</th><th>Hasil</th></tr>";
			for (var i = 0; i < history.length; i++) {
				var row = table.insertRow(-1);
				for (var j = 0; j < history[i].length; j++) {
					var cell = row.insertCell(-1);
					cell.innerHTML = history[i][j];
				}
			}
		}