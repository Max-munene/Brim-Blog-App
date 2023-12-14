import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore
import { provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private fs: AngularFirestore) {}

  // formData: any;
  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category,
    };
    this.fs.collection('categories').add(categoryData);
  }
}
