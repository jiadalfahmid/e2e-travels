const selectedSeatList = document.getElementById("noSeatSelectedEl");
let totalSeat = [];
const seatCount = document.getElementById("seatCount");
const seatLeftCount = document.getElementById("seatLeftCount");
const noSeat = document.getElementById('noSeat')
let totalAmount = 0;
const totalPrice = document.getElementById("totalPrice");

function selectedSeat(event) {
  event.classList.add("bg-primary", "text-white");
  let seatNo = event.innerText;
  totalSeat.push(seatNo);
  seatCount.innerText = totalSeat.length;
  seatLeftCount.innerText -= 1;
  noSeat.classList.add('hidden')
  selectedSeatList.innerHTML += `
   <li class="flex justify-between font-normal text base"><span>${seatNo}</span><span>Economy</span><span>550</span></li>
   `;
  totalAmount += 550;
  totalPrice.innerText = totalAmount;
}
