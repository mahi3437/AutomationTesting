// @ts-check
import { test, expect } from '@playwright/test';
import { redbusSourceandDestiny } from '../pages/redbusSourceandDestiny';

test('Redbus', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  const redbus=new redbusSourceandDestiny(page);
  redbus.enterSource('Bangalore');
  


  

  
});
