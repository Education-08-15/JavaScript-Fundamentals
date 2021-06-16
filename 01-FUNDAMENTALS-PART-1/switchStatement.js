const day = 'Friday';

switch (day) {
  case 'Saturday':
    console.log("IT's my birthday day ");
    console.log('Saturday is holiday');
    break;
  case 'Sunday':
    console.log('Go to coding meetup');
    break;
  case 'Monday':
    console.log('I dont buy clothes this day');
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('I need to go to college these days');
    break;
  case 'Friday':
    console.log('I play with my dog');
    break;
  default:
    console.log('Not a valid day!');
}
