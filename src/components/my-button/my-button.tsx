import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() type?: 'primary' | 'dashed';

  render() {
    return (
      <button class={this.type ? `type-${this.type}` : ''} type="button">
        <slot></slot>
      </button>
    );
  }

}
