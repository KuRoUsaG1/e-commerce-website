package com.allenliu.springbootecommerce.service;

import com.allenliu.springbootecommerce.dto.Purchase;
import com.allenliu.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
