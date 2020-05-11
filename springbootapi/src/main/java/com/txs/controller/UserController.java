package com.txs.controller;

import javax.servlet.http.HttpServletRequest;
import javax.sound.midi.SysexMessage;

import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.txs.model.User;

@RestController
@RequestMapping("/user")
public class UserController {
	
	
	@RequestMapping(value="/userinfo/{id}",method=RequestMethod.GET)
     public User getUserInfo(@PathVariable Long id)
     {
    	 User u=new User();
    	  u.setId(id);
    	  u.setName("txs");
    	  u.setAge(18);
    	  u.setSex(0);
    	  return u;
     }
	
	@RequestMapping(value="/adduser",method=RequestMethod.POST)
    public User getUserInfo(HttpServletRequest req,User u)
    {
//		User u=new User();
//		String id=req.getParameter("id");
//		u.setId(Long.valueOf(id));
   	 System.out.println(u.getId());
   	
   	  return u;
    }
}
