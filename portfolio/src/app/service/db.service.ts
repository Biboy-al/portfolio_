import { Injectable } from '@angular/core';
import {PostgrestClient} from '@supabase/postgrest-js';

@Injectable({
  providedIn: 'root'
})



export class DbService {

  private client: PostgrestClient;

  constructor() {

    this.client = new PostgrestClient('https://app-silent-fog-40200111.dpl.myneon.app', {
      headers: {
        Authorization: 'Bearer pck_r5m12wvvevxnbzwcqde2fg8q8gdfsamg3ncabzxh3jmk0',
        apiKey: 'pck_r5m12wvvevxnbzwcqde2fg8q8gdfsamg3ncabzxh3jmk0'
      }});

   }


  async fetchBlogMetaData() {
    try {
      console.log('Attempting to connect to database...');
      const { data, error } = await this.client.from('blog_meta_data').select('*');
      
      if (error) {
        console.error('Database error:', error);
        return null;
      }
      
      console.log('✅ Successfully connected to database');
      console.log('Data received:', data);
      return data;
      
    } catch (error) {
      console.error('❌ Connection failed:', error);
      return null;

    }
  }

}
