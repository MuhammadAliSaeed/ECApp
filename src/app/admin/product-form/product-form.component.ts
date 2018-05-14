import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product={};
  id;
  constructor(
    private router:Router,
    private categoryService: CategoryService,
    private productService:ProductService,
    private route:ActivatedRoute) {
    this.categories$ = categoryService.getCategories().snapshotChanges().map(actions => {
     return actions.map(action => ({key: action.key, ...action.payload.val()}));
    });
    
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id){
     this.productService.get(this.id).valueChanges().take(1).subscribe(val=>{this.product=val;});
    }
    
  }

  ngOnInit() {
    
    
  }

  save(product) {
    if(this.id){
    this.productService.update(this.id,product);
    }else{
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }
  delete(){
    if(!confirm('Are you sure you want to delete?')) return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
