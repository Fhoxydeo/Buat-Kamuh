let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Shalisa";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "-";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "Sarapan"
      break;
    case "Siang":
      return "Makan Siang "
      break;
    case "Malam":
      return "Makan Malam"
      break;
      case "Sore":
      return "Makan Sore"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Sayang ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: `Hallo ${doi}!`,
    html: `Ini Udah ${time()}, Kamu udah ${makan()} shal?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Pasti belum kan, makan dulu ya').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Gua tau lu pasti sibuk nonton drakor`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Tapi, Gapapa lah wkkwwk gua cuman mau sampein sesuatu`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Jaga Kesehatan, kan sekarang lagi musim corona').then((result) => {
                  Swal.fire(
                    'Jangan sering begadang cuman buat nonton drakor!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Kalo Belum makan ya makan dulu!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Kalo nonton drakor jangan berlebihan wkwkw ').then((result) => {
                        Swal.fire({
                          title: 'Gua mau nanya',
                          text: 'Ada sesuatu yang lu pengin sekarang jawab aja',
                          showDenyButton: true,
                          confirmButtonText: `Ada`,
                          denyButtonText: `Engga`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau apa?',
                              input: 'text',
                              inputPlaceholder: 'ex: Pulsa, or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu lah kwkwkw'
                                }
                              }
                            }).then((result) => {
                              Swal.fire(`Oke ${doi} `, 'Ntar Gua kabulin kemauan lu', 'success').then((result) => {
                                Swal.fire(`Dadah sayang ${doi} ????`).then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh Engga ada ya yaudah deh????').then((result) => {
                              Swal.fire(`Dadah sayang ${doi} `).then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
