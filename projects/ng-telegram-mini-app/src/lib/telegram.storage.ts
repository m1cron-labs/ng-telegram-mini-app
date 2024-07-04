import { Inject, Injectable, Optional } from '@angular/core';
import { CloudStorage } from './models/cloud-storage';
import { WebApp } from './models/web-app';
import { TelegramWebApp } from './token';

@Injectable({
  providedIn: 'root',
})
export class TelegramStorage {
  private readonly storage: CloudStorage;

  public readonly isAvailable: boolean;

  constructor(@Optional() @Inject(TelegramWebApp) telegram: WebApp) {
    this.storage = telegram.CloudStorage;
    this.isAvailable = Boolean(this.storage);
  }

  getItem(key: string): Promise<string | undefined> {
    return new Promise((resolve, reject) =>
      this.storage.getItem(key, (err: Error | null, data: string | undefined) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }),
    );
  }

  getItems(keys: string[]): Promise<Record<string, string>> {
    return new Promise((resolve, reject) =>
      this.storage.getItems(keys, (err: Error | null, data: Record<string, string>) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }),
    );
  }

  getKeys(): Promise<string[]> {
    return new Promise((resolve, reject) =>
      this.storage.getKeys((err: Error | null, keys: string[]) => {
        if (err) {
          return reject(err);
        }
        resolve(keys);
      }),
    );
  }

  removeItem(key: string): Promise<void> {
    return new Promise((resolve, reject) =>
      this.storage.removeItem(key, (err: Error | null) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }),
    );
  }

  removeItems(keys: string[]): Promise<void> {
    return new Promise((resolve, reject) =>
      this.storage.removeItems(keys, (err: Error | null) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }),
    );
  }

  setItem(key: string, data: string): Promise<void> {
    return new Promise((resolve, reject) =>
      this.storage.setItem(key, data, (err: Error | null) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }),
    );
  }
}
