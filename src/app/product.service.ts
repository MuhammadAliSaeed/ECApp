import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
create(product){
 return  this.db.list('/products').push(product);
}
getAll(){
  return this.db.list("/products");
}
get(prodId){
  return this.db.object("/products/"+prodId);
}
update(productId,product){
return this.db.object('/products/'+productId).update(product);
}
delete(porductId){
  return this.db.object('/products/'+porductId).remove();
}
}
