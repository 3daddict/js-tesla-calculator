document.addEventListener('DOMContentLoaded', function () {
    console.log('JS Loaded!');
    selectModel();
});

const getTeslaPrices = () => {
    const option = {
        model: {
            standardRange: 39900,
            awdLongRange: 49900,
            awdPerformace: 59900
        },
        color: {
            black: 0,
            silver: 1000,
            blue: 1000,
            white: 1500,
            red: 1500
        },
        wheel: {
            aero: 0,
            sport: 1500
        },
        interior: {
            black: 0,
            white: 1000
        },
        upgrade: {
            streetAutoDrive: 6000
        }

    }

    return option;
}

console.log(getTeslaPrices().model.standardRange);

const selectModel = () => {
   const buttonGroup = document.querySelectorAll('.model-selection-btn');
   const standardBtn = document.getElementById('standardBtn');
   const awdLongRangeBtn = document.getElementById('awdLongRangeBtn');
   const awdPerformanceBtn = document.getElementById('awdPerformanceBtn');
   const modelPrice = document.getElementById('modelPrice');
   standardBtn.value = getTeslaPrices().model.standardRange;
   awdLongRangeBtn.value = getTeslaPrices().model.awdLongRange;
   awdPerformanceBtn.value = getTeslaPrices().model.awdPerformace;
    //run event listener and value data
   buttonGroupEventListener(buttonGroup, modelPrice);

}

const buttonGroupEventListener = (groupID, dataID) => {
    const getClickedValue = function() {
        return dataID.textContent = this.value;
    };
    
    for (var i = 0; i < groupID.length; i++) {
        groupID[i].addEventListener('click', getClickedValue, false);
    }
}
