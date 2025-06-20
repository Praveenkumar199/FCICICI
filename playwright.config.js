// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
 
  reporter: 'html',
  
  timeout:1500*1000,
  use: {
   
      headless: false,
      browserName: 'chromium',
     
      screenshot: 'on',
      trace:'on'
    
    

  },
});

