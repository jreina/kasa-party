import { IPattern } from '../IPattern';
import { Color } from '../Color';
import hslToRgb from '../../util/hslToRgb';

const up = (x: number) => x + 5;
const down = (x: number) => x - 5;

export class MoodRing implements IPattern {
  private _h: number = 0;
  private _xform: (x: number) => number = up;
  public delay = 25;
  public loop = true;
  public name = 'Mood Ring';

  colors(color: Color): Color {
    this._h = this._xform(this._h);
    if (this._h === 360) this._xform = down;
    if (this._h === 0) this._xform = up;
    return hslToRgb(this._h, 75, 100) as Color;
  }
}
