const gamePattern = [];
const buttonColors = ['red', 'blue', 'green', 'yellow'];
const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  let audioObj = new Audio(`sounds/${randomChosenColor}.mp3`);
  audioObj.play();
};

$('body').click(nextSequence);
