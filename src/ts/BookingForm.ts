document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm") as HTMLFormElement;
  const vip = document.getElementById("vip") as HTMLInputElement;
  const adult = document.getElementById("adult") as HTMLInputElement;
  const enfant = document.getElementById("enfant") as HTMLInputElement;
  const totalPriceEl = document.getElementById("totalPrice") as HTMLElement;

  const PRICES = { vip: 150, adult: 100, enfant: 80 };

  function calculateTotal(): number {
    const vipQty = Number(vip.value) || 0;
    const adultQty = Number(adult.value) || 0;
    const enfantQty = Number(enfant.value) || 0;

    const total = vipQty * PRICES.vip + adultQty * PRICES.adult + enfantQty * PRICES.enfant;
    totalPriceEl.innerText = total.toString();
    return total;
  }

  // Attach input listeners for live calculation
  [vip, adult, enfant].forEach((input) => input.addEventListener("input", calculateTotal));
  calculateTotal();

  form.addEventListener("submit", (event) => { 
    console.log("render");
    const totalTickets = Number(vip.value) + Number(adult.value) + Number(enfant.value);

    if (totalTickets <= 0) {
      alert("Please select at least one ticket.");
      event.preventDefault(); 
    }

    // Update hidden total input
    let totalInput = document.getElementById("total") as HTMLInputElement;
    if (!totalInput) {
      totalInput = document.createElement("input");
      totalInput.type = "hidden";
      totalInput.name = "total";
      totalInput.id = "total";
      form.appendChild(totalInput);
    }
    totalInput.value = calculateTotal().toString();
  });
});
