import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: [], searchkey: string,propname:string): any[] {

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

}
