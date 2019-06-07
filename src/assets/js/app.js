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
   buttonGroupEventListener(buttonGroup);

}

const buttonGroupEventListener = (groupID) => {
    const getClickedValue = function() {
        let attribute = this.textContent;
            console.log(attribute);
        };
    
        for (var i = 0; i < groupID.length; i++) {
            groupID[i].addEventListener('click', getClickedValue, false);
        }
}
