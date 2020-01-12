import { IBlyncDevice } from './IBlyncDevice';
import { IBlyncCommand } from './IBlyncCommand';
import { Client } from 'tplink-smarthome-api';
import rgbToHsl from '../util/rgbToHsl';

export class Kasa implements IBlyncDevice {
  async sendCommand({ red, green, blue }: IBlyncCommand): Promise<number> {
    const device = await new Client().getDevice({ host: '192.168.50.152' });
    const hue = rgbToHsl(red, green, blue);
    if (red + green + blue === 255 * 3) {
      await device.lighting.setLightState({
        on_off: true,
        color_temp: 4200,
        transition_period: 0
      });
    } else {
      await device.lighting.setLightState({
        on_off: red + green + blue > 0,
        saturation: 75,
        brightness: 100,
        transition_period: 0,
        hue: hue[0]
      });
    }
    return 0;
  }
}
