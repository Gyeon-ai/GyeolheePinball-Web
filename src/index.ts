import './localization';
import options from './options';
import { registerServiceWorker } from './registerServiceWorker';
import { Roulette } from './roulette';
import { registerPinballTools } from './webmcp';

registerServiceWorker();

const roulette = new Roulette();

(window as any).roulette = roulette;
(window as any).options = options;

registerPinballTools();
