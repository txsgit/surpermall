package com.txs.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/product")
public class ProductController {

	
	@RequestMapping("/add")
	@ResponseBody
	public String addP(HttpServletRequest req){
	   
		String id=req.getParameter("id");
		
		return id;
	}
}
