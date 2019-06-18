document.addEventListener("DOMContentLoaded", function() {
  console.log("JS Loaded!");
  getBasePrice();
});

const Tesla = {
  model: { standardRange: 39900, awdLongRange: 49900, awdPerformace: 59900 },
  color: { black: 0, silver: 1000, blue: 1000, white: 1500, red: 1500 },
  wheel: { aero: 0, sport: 1500 },
  interior: { black: 0, white: 1000, red: 1500 },
  upgrade: { streetAutoDrive: 6000 }
};

const getBasePrice = () => {
  document.querySelectorAll(".model-selection-btn").forEach(el => {
    el.addEventListener("click", function() {
      console.log(this.textContent);
      const priceText = document.getElementById("modelPrice");
      switch (this.textContent) {
        case "Standard":
          priceText.textContent = Tesla.model.standardRange;
          return addTotal(Tesla.model.standardRange);
        case "AWD Long Range":
          priceText.textContent = Tesla.model.awdLongRange;
          return addTotal(Tesla.model.awdLongRange);
        case "AWD Performance":
          priceText.textContent = Tesla.model.awdPerformace;
          return addTotal(Tesla.model.awdPerformace);
        default:
          break;
      }
    });
  });
};

const addTotal = modelTotal => {
  const totalText = document.getElementById("totalPrice");
  totalText.textContent = modelTotal;
};
