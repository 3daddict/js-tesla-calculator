document.addEventListener('DOMContentLoaded', function () {
    console.log('JS Loaded!');
    getBasePrice();



    
    
});

const getBasePrice = () => {
    document.querySelectorAll(".model-selection-btn").forEach((el) => {
        el.addEventListener("click", function() {
          console.log(this.textContent);
            const standardRange = '39,900';
            const awdLongRange = '49,900';
            const awdPerformace = '59,900';
            const priceText = document.getElementById('modelPrice');
            switch (this.textContent) {
                case 'Standard':
                        priceText.textContent = standardRange;
                        return standardRange;
                case 'AWD Long Range':
                        priceText.textContent = awdLongRange;
                        return awdLongRange;
                case 'AWD Performance':
                        priceText.textContent = awdPerformace;
                        return awdPerformace;
                default:
                    break;
            }
        });
      });
}
    

