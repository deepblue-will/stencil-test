import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() type?: 'primary' | 'dashed';
  @Prop() danger: boolean = false;

  @Event() clickButton: EventEmitter<any>

  get classes(): string {
    const classes = [];

    if(this.type) {
      classes.push(`type-${this.type}`);
    }
    if(this.danger) {
      classes.push('is-danger');
    }

    return classes.join(' ');
  }

  render() {
    return (
      <button class={this.classes} type="button" onClick={(e) => this.clickButton.emit(e)}>
        <slot></slot>
      </button>
    );
  }

}
