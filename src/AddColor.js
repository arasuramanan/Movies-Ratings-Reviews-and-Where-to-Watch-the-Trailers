import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(["crimson", "orange", "skyblue", "green", "purple"]);

  return (
    <div>
      <input type="text" style={styles} placeholder="Name" onChange={(event) => setColor(event.target.value)} />
      {/* Copy the colorList and add the newColor to it */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
