import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return <header>
      <nav class="header-nav">
        <ul>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
        </ul>
        <div><slot name="sub-menu"/></div>
      </nav>
    </header>;
  }
}
