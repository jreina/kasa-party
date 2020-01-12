import { IPattern } from '../IPattern';
import { Color } from '../Color';

export class Strobe implements IPattern {
  name = 'Strobe';
  colors = [[255, 255, 255] as Color, [0, 0, 0] as Color];
  delay = 75;
  loop = true;
}
