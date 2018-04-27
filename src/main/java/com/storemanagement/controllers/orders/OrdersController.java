package com.storemanagement.controllers.orders;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@PreAuthorize("hasAnyRole('ADMIN')")
@RequestMapping("/secured/orders")
public class OrdersController {

    @RequestMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public String orders(){
        return "orders";
    }
}
