   const selectedSeatList = document.getElementById("noSeatSelectedEl");
   let totalSeat = [];
   const seatCount = document.getElementById("seatCount");
   const seatLeftCount = document.getElementById("seatLeftCount");
   const noSeat = document.getElementById("noSeat");
   let totalAmount = 0;
   const totalPrice = document.getElementById("totalPrice");
   const couponInput = document.getElementById("couponInput");
   const couponBtn = document.getElementById("couponBtn");

   function selectedSeat(event) {
   let seatNo = event.innerText;
   if (totalSeat.includes(seatNo)) {
      return alert("Seat has been booked already!!!");
   }
   totalSeat.push(seatNo);
   if (totalSeat.length > 4) {
      return alert("Maximum Seat has been selected!!!");
   }
   event.classList.add("bg-primary", "text-white");
   seatCount.innerText = totalSeat.length;
   seatLeftCount.innerText -= 1;
   noSeat.classList.add("hidden");
   selectedSeatList.innerHTML += `
      <li class="flex justify-between font-normal text base"><span></span><span> ${seatNo}</span><span>Economy</span><span>550.00</span></li>
      `;
   totalAmount += 550;
   totalPrice.innerText = totalAmount.toFixed(2);

   if (totalSeat.length == 4) {
      couponInput.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
   }
   }
