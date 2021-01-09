import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(p => {
      this.product = p;
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.delete(id!).subscribe(() => {
      this.router.navigate(['/products']);
      this.productService.showMessage('Produto Deletado!');
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
