import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/compat';
import { provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private afs: Firestore) {}

  // formData: any;
  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category,
    };
    this.afs.collection('categories').add(categoryData);
  }
}
