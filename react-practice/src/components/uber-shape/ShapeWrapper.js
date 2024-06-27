import Shape from './Shape';

// Uber FE interview question about Shape
// Reference: https://youtu.be/DCoIeGt4g7M?si=0zHuQduGBgaFFNE_

const BOX = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];

export default function ShapeWrapper() {
  return (
    <main>
      <Shape data={BOX} />
    </main>
  )
}