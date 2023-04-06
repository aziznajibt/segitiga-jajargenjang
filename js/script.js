//home
function Segitigas() {
	window.location.href = "Segitiga.html";
  }
  
  function  JajarGenjangj() {
	window.location.href = "JajarGenjang.html";
  }

      //SEGITIGA
      //hitung luas segitiga
      function calculatingarea1() {
        var alas = parseFloat(prompt("Masukkan panjang a(alas) segitiga: "));
        var tinggi = parseFloat(prompt("Masukkan t(tinggi) segitiga: "));
  
        if (isNaN(alas) || isNaN(tinggi)) {
          alert("masukan angga bukan huruf");
        } else {
          var luas = (alas * tinggi) / 2;
          alert("Luas segitiga adalah: " + luas);
        }
      }
      //hitung keliling segitiga
      function countaround1() {
        var sisiA = parseFloat(prompt("Masukkan panjang sisi A segitiga: "));
        var sisiB = parseFloat(prompt("Masukkan panjang sisi B segitiga: "));
        var sisiC = parseFloat(prompt("Masukkan panjang sisi C segitiga: "));
        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
          alert("Masukkan angka bukan huruf!");
        } else {
          var keliling = sisiA + sisiB + sisiC;
          alert("keliling segitiga adalah: " + keliling);
        }
      }
  
  //jajargenjang
// Menghitung Luas Jajar Genjang
function calculatingarea2() {
  // Mendapatkan nilai alas dan tinggi dari input
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;

  // Menghitung luas jajar genjang
  let luas = alas * tinggi;

  // Menampilkan hasil pada elemen output
  document.getElementById("output").innerHTML = "Luas Jajar Genjang: " + luas;
}

//hitung keliling jajar genjang
function countaround2() {
  // Mendapatkan nilai sisi sejajar 1 dan 2 dari input
  let sisi1 = document.getElementById("sisi1").value;
  let sisi2 = document.getElementById("sisi2").value;

  // Menghitung keliling jajar genjang
  let keliling = 2 * (parseInt(sisi1) + parseInt(sisi2));

  // Menampilkan hasil pada elemen output
  document.getElementById("output2").innerHTML = "Keliling: " + keliling;
}

//tombol reset
function resetForm() {
  // Menghapus nilai dari input
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";

  // Menghapus hasil dari elemen output
  document.getElementById("output").innerHTML = "";
}
function resetForm2() {
  // Menghapus nilai dari input
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";

  // Menghapus hasil dari elemen output
  document.getElementById("output2").innerHTML = "";
}