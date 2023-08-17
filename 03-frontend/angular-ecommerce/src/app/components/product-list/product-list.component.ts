import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;
  
  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  
  previousKeyword: string = "";

  constructor(private productService: ProductService, 
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts() {
    
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }
  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // if we have a different keyword than previous
    // then set thePageNumber to 1
    if(this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    // set the previous keyword to the current keyword
    this.previousKeyword = theKeyword;
    // log the keyword for testing
    console.log(`keyword=${theKeyword}, the PageNumber=${this.thePageNumber}`);

    // now search the product using keyword
    this.productService.searchProductPaginate(this.thePageNumber - 1,
                                              this.thePageSize,
                                              theKeyword).subscribe(this.processResult());
  }

  handleListProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;   
    } else {
      this.currentCategoryId = 1;
    }
    
    // check if we have a different category than previous
    if(this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    // set the previous category id to the current category id
    this.previousCategoryId = this.currentCategoryId;

    // log the current category id and page number for testing
    console.log(`currentCategoryId=${this.currentCategoryId}, the PageNumber=${this.thePageNumber}`)

    // now get the products for the given category id
    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                        this.thePageSize,
                                        this.currentCategoryId)
                                        .subscribe(this.processResult());
  }

  // help function to update page size
  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  // help function to process response
  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  addToCart(theProduct: Product) {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }
}
