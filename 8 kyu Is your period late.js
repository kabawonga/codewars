const periodIsLate = (last, today, cycleLength) => today.getTime() - last.getTime() > cycleLength * 86400000
