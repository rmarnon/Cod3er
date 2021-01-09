import { Injectable } from '@angular/core';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private snackbar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

}
