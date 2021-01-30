export default class Popover {
  constructor(parentEl, title = '', text = '') {
    this.parentEl = parentEl;
    this.elementinDOM = null;
    this.title = title;
    this.text = text;
    this.show = false;
  }

  get markup() {
    return `
        <div class="popover fade ${this.show ? 'show' : ''}" data-section="popover" style="position: absolute;">
            <div class="arrow" style="top: 34px;"></div>
            <h3 class="popover-header">${this.title}</h3>
            <div class="popover-body">${this.text}</div>
        </div>
        `;
  }

  get popoverSelector() {
    return '[data-section="popover"]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.markup;
    const element = this.parentEl.querySelector(this.popoverSelector);
    this.elementinDOM = element;
  }

  updatePopover(newTitle, newText, newPosition) {
    this.show = true;
    this.title = newTitle;
    this.text = newText;
    this.bindToDOM();
    this.elementinDOM.style.top = `${newPosition.top - this.elementinDOM.getBoundingClientRect().height}px`;
    this.elementinDOM.style.left = `${newPosition.left}px`;
  }
}
