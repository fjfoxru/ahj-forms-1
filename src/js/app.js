// TODO: write code here
import ElementWithPopover from './elementWithPopover';
import Popover from './popover';

const containerPopover = document.querySelector('[data-section="page"]');
const popover = new Popover(containerPopover);
popover.bindToDOM();

const containerEl = document.querySelector('[data-section="main"]');
const containerEl2 = document.querySelector('[data-section="main2"]');
const containerEl3 = document.querySelector('[data-section="main3"]');
const button = new ElementWithPopover(containerEl, popover, 'Кнопка1');
const button2 = new ElementWithPopover(containerEl2, popover, 'Кнопка2');
const button3 = new ElementWithPopover(containerEl3, popover, 'Кнопка3');
button.bindToDOM();
button2.bindToDOM();
button3.bindToDOM();
