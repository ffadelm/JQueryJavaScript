/**
 * Kode Vanilla Javascript(murni) untuk menanmbahkan value pada HTML
 */

document.getElementById('nama').innerHTML = 'FAYSAL FADEL MAULANA';

/**
 * kode Jquery untuk menambahkan value pada element HTML
 */
$('#nim').html('20190140097');

/**
 * Jquery menggunakan selector sama seperti css 
 *  . untuk class
 *  # untuk id
 * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
 * misal : <button></button> maka tinggal tulis button
 * dalam kode berikut , kita akan menampilkan console.log saat document ready
 */

$(
    function () {
        console.log("ATTACK ON TITAN");
    }
);

// kode Jquery untuk menyembunyikan Element
$("#hide").on("click", function(){
    $("#nama").hide();
});

// kode Jquery untuk menampilkan kembali element
$("#show").on("click", function(){
    $("#nama").show();
});

//coba ini :)
$("#toggle").on("click", function(){
    $("#nama").toggle();
});

//kode Jquery untuk fade In element
$("#fadeIn").on("click", function(){
    $("#tanggal").fadeIn("slow");
});

//kode Jquery untuk fade Out Element HTML
$("#fadeOut").on("click", function(){
    $("#tanggal").fadeOut("slow");
});

//Coba ini :)
$("#fadeToggle").on("click", function(){
    $("#tanggal").fadeToggle("slow");
});

// kode Jquery untuk Slide Up element HTML
$("#slideUp").on("click", function(){
    $("#img").slideUp();
});

// kode Jquery untuk Slide Down element HTML
$("#slideDown").click(function(){
    $("#img").slideDown();
  });

//Coba ini :)
$("#slideToggle").on("click", function(){
    $("#img").slideToggle();
});
