function calculate() {
    // get the input values
    const currentKills = parseFloat(document.getElementById('current-kills').value);
    const currentDeaths = parseFloat(document.getElementById('current-deaths').value);
    const avgK = parseFloat(document.getElementById('avg-k').value);
    const avgD = parseFloat(document.getElementById('avg-d').value);
    const kdGoal = parseFloat(document.getElementById('kd-goal').value);

    // perform calculations
    const currentKD = (currentKills / currentDeaths).toFixed(2);
    const avgKD = (avgK / avgD).toFixed(2);
    const matchesNeeded = ((kdGoal * currentDeaths - currentKills) / (avgK - kdGoal * avgD)).toFixed(2);
    const newK = (currentKills + avgK * matchesNeeded).toFixed(2);
    const newD = (currentDeaths + avgD * matchesNeeded).toFixed(2);
    const newKD = (newK / newD).toFixed(2);

    // update the frontend with the calculated values
    document.getElementById('current-kd').innerText = currentKD;
    document.getElementById('avg-kd').innerText = avgKD;
    document.getElementById('new-k').innerText = newK;
    document.getElementById('new-d').innerText = newD;
    document.getElementById('new-kd').innerText = newKD;
    document.getElementById('matches-needed').innerText = matchesNeeded;

      // Calculate difference between Current Kills and Current Deaths
    const kdDiff = Math.abs(currentKills - currentDeaths).toFixed(2);
    document.getElementById('kd-diff').innerText = kdDiff;

    // Calculate Expected Time to Increase KD
    const matchTime = parseFloat(document.getElementById('match-time').value);
    const expectedTime = (matchesNeeded * matchTime / 60).toFixed(2);
    document.getElementById('expected-time').innerText = expectedTime;
}
