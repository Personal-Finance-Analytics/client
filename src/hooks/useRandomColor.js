export default function useRandomColor() {
  // const o = Math.round;
  // const r = Math.random;
  // const s = 255;
  // return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  const x = Math.floor(Math.random() * 256);
  const y = 100 + Math.floor(Math.random() * 256);
  const z = 50 + Math.floor(Math.random() * 256);
  return `rgba(${x},${y},${z})`;
}
