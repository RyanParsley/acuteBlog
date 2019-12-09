import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-list">
        <div class="footer-message">
          <span>Obtuse ramblings.</span>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        padding: 12px;
        margin-top: 40px;
      }
      .footer-list {
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        padding: 8px;
      }
      .footer-message {
        display: flex;
        flex: 1;
        flex-direction: column;
        min-width: 225px;
        text-align: center;
      }
      a {
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: underline;
        }
      }
      @media screen and (max-width: 884px) {
        .footer-list {
          flex-direction: column;
        }
      }
    `
  ]
})
export class FooterComponent {
  constructor() {}
}
