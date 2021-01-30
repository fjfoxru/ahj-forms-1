export default class ElementWithPopover {
  constructor(parentEl, popoverEl, title) {
    this.parentEl = parentEl;
    this.popoverEl = popoverEl;
    this.title = title;
  }

  get markup() {
    return `
        <button type="button" class="btn btn-lg" data-popover-id="1" data-toggle="popover" data-content="${this.title}" data-title="${this.title}">
          ${this.title}
        </button>
        `;
  }

  get buttonSelector() {
    return '[data-toggle="popover"]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.markup;
    const button = this.parentEl.querySelector(this.buttonSelector);
    button.addEventListener('click', (evt) => this.onClick(evt));
  }

  onClick(evt) {
    evt.preventDefault();
    const button = this.parentEl.querySelector(this.buttonSelector);
    this.popoverEl.updatePopover(button.dataset.title, button.dataset.content, button.getBoundingClientRect());
  }
}
