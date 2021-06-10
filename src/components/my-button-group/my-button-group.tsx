import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button-group',
  styleUrl: 'my-button-group.css',
  shadow: true,
})
export class MyButtonGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
