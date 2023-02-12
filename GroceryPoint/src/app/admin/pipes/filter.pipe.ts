import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], searchkey: any,propname:any): any[] {

    const result:any=[];

    if(!products || searchkey==''||propname==''){
      return products;

    }
    //searching
    
    products.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product);
      }
    })
    return result;



  }

  transform2(orders: any[], searchkey: any,propname:string): Number[] {

    const result:any=[];

    if(!orders|| searchkey==''||propname==''){
      return orders;

    }
    //searching
    
    orders.forEach((order:any)=>{
      if(order[propname].trim().includes(searchkey)){
        result.push(order);
      }
    })
    return result;



  }

}
