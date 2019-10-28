'use strict';

var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 250;

var CLOUD_X = 100;
var CLOUD_Y = 200;
var GAP = 20;
var FONT_GAP = 20;
var TEXT_HEIGHT = 20;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 20;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var name = ['fff', 'ggg', 'hhh'];
var times = ['10', '12', '7'];

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';

  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, BAR_WIDTH, -barHeight);

  // ctx.fillText('Вы', 120, 240);
  // ctx.fillRect(120, 220, 20, -100);

  ctx.fillText('Иван', CLOUD_X + GAP + TEXT_WIDTH + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + GAP, CLOUD_Y + GAP, BAR_WIDTH, -barHeight);

  // ctx.fillText('Иван', 160, 240);
  // ctx.fillRect(160, 220, 20, -100);

  // ctx.fillText('Юлия', 220, 240);
  // ctx.fillRect(220, 220, 20, -100);

  ctx.fillText('Юлия', CLOUD_X + GAP + TEXT_WIDTH + GAP + TEXT_WIDTH + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + GAP + TEXT_WIDTH + GAP, CLOUD_Y + GAP, BAR_WIDTH, -barHeight);
};
