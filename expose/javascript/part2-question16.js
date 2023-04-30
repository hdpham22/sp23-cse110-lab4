let statistics = {
    red: 21,
    blue: 45,
    green: 12,
    race: 5, 
    black: 40,
    rare: 2
};
for(const car in statistics) {
    if(car.charAt(0) == 'r') {
        console.log(statistics[car]);
    }
    else if(statistics[car] % 2 == 1) {
        console.log(statistics[car]);
    }
}