<div align="center">

[![npm version](https://img.shields.io/npm/v/@m1cron-labs/ng-telegram-mini-app.svg?style=flat-square)](https://www.npmjs.com/package/@m1cron-labs/ng-telegram-mini-app)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@m1cron-labs/ng-telegram-mini-app&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@m1cron-labs/ng-telegram-mini-app)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@m1cron-labs/ng-telegram-mini-app?style=flat-square)](https://bundlephobia.com/package/@m1cron-labs/ng-telegram-mini-app@latest)
[![npm downloads](https://img.shields.io/npm/dm/@m1cron-labs/ng-telegram-mini-app.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@m1cron-labs/ng-telegram-mini-app)

</div>

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

## Typed events (TelegramEvents)

`WebApp.onEvent` now infers the handler payload type from the event name, and enum-typed fields accept plain string literals alongside enum members (e.g. `setParams({ position: 'top' })`).

For a reactive API, inject the `TelegramEvents` service — it bridges `WebApp.onEvent` / `offEvent` into typed RxJS Observables (requires the `rxjs` peer dependency, which every Angular application already has):

```typescript
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TelegramEvents } from '@m1cron-labs/ng-telegram-mini-app';

@Component({
  selector: 'app-root',
  template: `<!-- Your template here -->`
})
export class AppComponent {
  private readonly events = inject(TelegramEvents);

  constructor() {
    this.events.on('viewportChanged')
      .pipe(takeUntilDestroyed())
      .subscribe(({ isStateStable }) => {
        // isStateStable is typed as boolean
      });

    this.events.on('invoiceClosed')
      .pipe(takeUntilDestroyed())
      .subscribe(({ url, status }) => {
        // status is typed as 'paid' | 'cancelled' | 'failed' | 'pending'
      });
  }
}
```

Unsubscribing removes the underlying handler via `WebApp.offEvent` automatically.
