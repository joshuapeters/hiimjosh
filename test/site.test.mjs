import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('the home page introduces Josh and links to published posts', async () => {
  const homePage = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

  assert.match(homePage, /Hi, I’m Josh/);
  assert.match(homePage, /href="\/hiimjosh\/posts\/welcome\//);
});
