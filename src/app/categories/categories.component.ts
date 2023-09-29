import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
// import { Firestore } from '@angular/fire/firestore';
import { provideFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private afs: AngularFirestore) {}

  // formData: any;
  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category,
    };
    this.afs.collection('categories').add(categoryData);
  }
}
