const root = document.querySelector('#root');
const btnAdd = document.querySelector('.btn-add');
const showSum = document.querySelector('.show-sum'); // เลือก element ที่จะแสดงผลรวม

function Counter() {
    let counterNum = 0;

    const makeElement = (tag, attr_n, attr_v, counter) => {
        let output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = counter;
        return output;
    }

    const updateCounter = (n) => {
        if (counterNum + n < 0) {
            return;
        }
        counterNum += n;
        number.textContent = counterNum;
        updateTotalSum(); // เรียกใช้ฟังก์ชันอัปเดตผลรวมทั้งหมดทุกครั้งที่มีการเพิ่มหรือลบ Counter
    }

    const deleteCounter = (e) => {
        e.target.closest('.counter').remove();
        updateTotalSum(); // เรียกใช้ฟังก์ชันอัปเดตผลรวมทั้งหมดทุกครั้งที่มีการเพิ่มหรือลบ Counter
    }

    const updateTotalSum = () => {
        const counters = document.querySelectorAll('.counter');
        let totalSum = 0;
        counters.forEach((counter) => {
            totalSum += parseInt(counter.querySelector('.number').textContent);
        });
        showSum.textContent = `Sum = ${totalSum}`; // แสดงผลรวมของตัวเลขทั้งหมดใน element ที่มีคลาส show-sum
    }

    const counter = makeElement('div', 'class', 'counter', '');
    const btnInc = makeElement('button', 'class', 'btn-inc', '+');
    const number = makeElement('h3', 'class', 'number', '0');
    const btnDec = makeElement('button', 'class', 'btn-dec', '-');
    const btnClr = makeElement('button', 'class', 'btn-clr', '0');
    const btnDel = makeElement('button', 'class', 'btn-del', 'x');

    btnInc.addEventListener('click', () => updateCounter(1));
    btnDec.addEventListener('click', () => updateCounter(-1));
    btnClr.addEventListener('click', () => updateCounter(-counterNum));
    btnDel.addEventListener('click', deleteCounter);

    counter.append(btnInc, number, btnDec, btnClr, btnDel);
    updateTotalSum(); // อัปเดตผลรวมเริ่มต้นเมื่อ Counter ถูกสร้าง

    return counter;
}

const hdlAddCounter = () => {
    root.append(Counter());
}

btnAdd.addEventListener('click', hdlAddCounter);
