setInterval(rang,0)
var page = '0' 
function rang(){
var range_value = document.getElementById('love_range').value;
  document.getElementById('txt_range').innerText = range_value + '%'
    if(kick == '1'){
        alert('Alasan Kamu Nggak Marah Sama Aku ?')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya kirim ke aku yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text=' + msg;
    }
    if(kick == '2'){
        alert('Yahh Kok Masih Marah Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya Kirim Ke Aku Yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text='
    }
    if(kick == '3'){
        alert('Yahh Kok Nggak Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu')
        alert('Alasannya Kirim Ke Aku Yaa.. jangan membuat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/?text=' + msg;
    }
}

var kick = '0'

function no(){
 document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    kick ++
}

function yes(){
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    page ++
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
}

function next_page(){
document.querySelector('.slash').style.animation = 'side_dark 0.5s'
    page ++
    setTimeout(move,10);
}
function move(){
    if(page == '1'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'Hai sayangg, Ada something nih buat kamu, Tapi... maaf yaa klo kurang bagus, Soalnya aku masi belajar xixi, Dan semoga km suka yaa, Selamat membaca yaa...'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('no').style.display = 'block'
    }
    if(page == '2'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'Happy Mensiv sayang, pertama tama aku ucapin makasi bgt buat kamu sayang segala bentuk usaha mu buat pertahanin hubungan kita sampe sekarang, I am very lucky to have you sayang, punya ochel yang bisa ngerti bgt dengan keadaan ku itu suatu kebahagiaan terbesar ku di tahun ini'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
    }
    if(page == '3'){
        document.getElementById('panda--image').src = 'tkthao219-bubududu.gif'
        document.getElementById('message').innerText = 'Semoga dengan ucapan ini aku bisa meluapkan rasa sayang ku ke kamu xixi'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '4'){
        document.getElementById('panda--image').src = 'dudububu-kiss.gif'
        document.getElementById('message').innerText = 'Kamu keren bgt sayang bisa bertahan dengan segala ego ku, marah ku, sedih ku, bahagia ku, semua kita lewati bareng tanpa terkecuali xixi, ak bener bener ga nyangka bgt kita bisa kuat sampe sini'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '5'){
        document.getElementById('panda--image').src = 'frog-run.gif'
        document.getElementById('message').innerText = 'Dikarenakan ini ada batas word nyaa ku lanjutkan ucapan ku ini di Room chat ya sayang yaa, makasi bgt uda di bacaa, LOVE YOU SAYANG💍💍💍'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('msg').style.display = 'block'
}
}