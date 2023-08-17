import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    
    expect(new Product(1,'BOOK-TECH-1000', 'Crash Course in Python','Learn Python at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!',
                      14.99,'assets/images/products/books/book-luv2code-1000.png', true,
                      100, new Date('2023-02-28'), new Date())).toBeTruthy();
  });
});
