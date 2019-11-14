'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var ARR_LEGHT = 4;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var AllNames = ['Иван', 'Борис', 'Тор', 'Тимур', 'Марсель', 'Анвар', 'Тагир', 'Мансур', 'Женя', 'Жора'];
var names = [];
var times = [];

function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < ARR_LEGHT; i++) {
  times[i] = getRandomRange(1000, 2000);
}

names[0] = 'Вы';

for (i = 1; i < ARR_LEGHT; i++) {
  var x = getRandomRange(0, AllNames.length - 1);
  names[i] = AllNames[x];
}

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };
  var maxTime = getMaxElement(times);

  var random = getRandomRange(30, 80);

  for (i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    if (i > 0) {
      random = getRandomRange(30, 80);
      ctx.fillStyle = 'hsl(240, 100%,' + random + '%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - FONT_GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(times[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - FONT_GAP - 10 - (BAR_HEIGHT * times[i]) / maxTime);
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px "PT Mono", Arial, Tahoma';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!\nСписок результатов:', CLOUD_X + GAP, CLOUD_Y + FONT_GAP);
};
