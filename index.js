const hq = 42;

function distanceFromHqInBlocks(start) {
    if (start > hq) {
        return (start - hq)
    }
    else if (start < hq) {
        return (hq - start)
    }
};

distanceFromHqInBlocks(43);

distanceFromHqInBlocks(50);

distanceFromHqInBlocks(34);

function distanceFromHqInFeet(start) {
    if (start > hq) {
        return ((start - hq) * 264)
    }
    else if (start < hq) {
        return ((hq - start) * 264)
    }
};

distanceFromHqInFeet(43);

distanceFromHqInFeet(50);

distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, stop) {
    if (start > stop) {
        return ((start - stop) * 264)
    }
    else if (start < stop) {
        return ((stop - start) * 264)
    }
};

distanceTravelledInFeet(43, 48);

distanceTravelledInFeet(50, 60);

distanceFromHqInFeet(34, 28);

function calculatesFarePrice(start, stop) {
    if (distanceTravelledInFeet(start, stop) <= 400) {
        return 0
    }
    else if ((distanceTravelledInFeet(start, stop) > 400) && (distanceTravelledInFeet(start, stop) <= 2000)) {
        return ((distanceTravelledInFeet(start, stop) - 400) * .02)
    }
    else if ((distanceTravelledInFeet(start, stop) > 2000) && (distanceTravelledInFeet(start, stop) < 2500)) {
        return 25
    }
    else if (distanceTravelledInFeet(start, stop) >= 2500) {
        return 'cannot travel that far'
    }
};

calculatesFarePrice(43, 44);

calculatesFarePrice(34, 32);

calculatesFarePrice(50, 58);

calculatesFarePrice(34, 23);
