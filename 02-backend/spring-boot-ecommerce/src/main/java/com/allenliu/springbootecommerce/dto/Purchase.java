package com.allenliu.springbootecommerce.dto;

import com.allenliu.springbootecommerce.entity.Address;
import com.allenliu.springbootecommerce.entity.Customer;
import com.allenliu.springbootecommerce.entity.Order;
import com.allenliu.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.*;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
