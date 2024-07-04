# Telegram Mini App

This Angular library provides a set of tools to create Telegram WebApps with ease. It wraps the Telegram WebApp API in a convenient Angular service to streamline the development of your Telegram WebApp. For more information on Telegram Web Apps, please visit the [official documentation](https://core.telegram.org/bots/webapps).

## Prerequisites

Before using this library, you need to include the Telegram WebApp JavaScript API in your project. Add the following script tag to the `head` section of your `index.html` file:

```html
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

## Installation

Install the library using npm:

```bash
npm i --save @m1cron-labs/ng-telegram-mini-app
```

## Usage

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TelegramWebApp } from '@m1cron-labs/ng-telegram-mini-app';

@Component({
  selector: 'app-root',
  template: `<!-- Your template here -->`
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly telegram = inject(TelegramWebApp);

  constructor() {
    this.telegram.ready();
  }

  ngOnInit() {
    console.debug('Telegram Web App is ready', this.telegram.initDataUnsafe);
  }

  ngOnDestroy(): void {
    this.telegram.close();
  }
}
```
