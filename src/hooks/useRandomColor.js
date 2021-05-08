export default function useRandomColor() {
  // const o = Math.round;
  // const r = Math.random;
  // const s = 255;
  // return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  var x = Math.floor(Math.random() * 256);
  var y = 100+ Math.floor(Math.random() * 256);
  var z = 50+ Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}
