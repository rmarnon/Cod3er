import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html'
})
export class ProductUpdateComponent implements OnInit {

  product!: Product

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(p => {
      this.product = p;
    })
  }

  cancel(): void {
    this.router.navigate(['products'])
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado!');
      this.router.navigate(['/products']);
    });
  }

}
