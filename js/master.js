let spin = ''
let flag = 2
let chance_numb = document.getElementById('chance_num')
const btn = document.getElementById('btn')
const pic = document.querySelectorAll('figure')[0]
const join = document.getElementById('join')
const star = document.getElementById('star')
const txt = document.getElementById('txt')
const end = document.getElementById('end')
const prize = document.getElementById('prize')
const chance = ['پاور بانک', 'ساعت هوشمند', '70 هزار تومان تخفیف', '15% تخفیف', 'پوچ', 'هدفون', 'بلیت سینما', '40 هزار تومان تخفیف', 'اسکوتر برقی', '50% تخفیف', 'فلش 8 گیگ', 'پوچ']

btn.addEventListener('click', () => {
    if (flag >= 0) {
        spin = Math.floor(Math.random() * chance.length)
        // console.log(chance[spin]);
        let x = (4320 + (spin * 30)) + ((Math.floor(Math.random() * 25)) + 5)
        pic.style.transform = 'rotate(' + x + 'deg)'
        chance_num.innerHTML = 'تعداد شانس شما :' + flag + ''
        chance_num.nextElementSibling.style.color = '#e0e0d6'
        if (flag == 1) {
            chance_num.nextElementSibling.nextElementSibling.style.color = '#e0e0d6'
        }
        if (flag == 0) {
            chance_num.nextElementSibling.nextElementSibling.nextElementSibling.style.color = '#e0e0d6'

        }
        setTimeout(() => {
            // alert(chance[spin])

            if (chance[spin] == 'پوچ') {
                prize.style.display = 'flex'
                document.getElementById('music2').play()
                txt.innerHTML = 'یه بار دیگه امتحان کن!'


            } else {
                // alert('تبریک میگم شما'+chance[spin]+' برنده شدید')
                prize.style.display = 'flex'
                document.getElementById('music1').play()
                txt.innerHTML = ' تبریک میگم شما' + '' + chance[spin] + '' + ' برنده شدید'


            }
            ////////////////////
            pic.style.transition = '2s'
            pic.style.transform = 'rotate(0deg)'
            setTimeout(() => {
                pic.style.transition = '1s'

            }, timeout);

        }, 2500);

    } else {
        alert('شانس امروز شما به پایان رسید')
    }
    flag--

})
// prize.......... 
end.addEventListener('click', (e) => {
    prize.style.display = 'none'
})
txt.nextElementSibling.addEventListener('click', () => {
    prize.style.display = 'none'

})