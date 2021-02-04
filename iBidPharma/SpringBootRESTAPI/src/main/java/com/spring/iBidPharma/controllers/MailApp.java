package com.spring.iBidPharma.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;

@Controller
@RequestMapping(value = "/api")
//@WebServlet("/mail_ehs")
public class MailApp extends HttpServlet {

@CrossOrigin(origins="http://localhost:4200")
@PostMapping(value = "/maill")
protected String mail(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// TODO Auto-generated method stub
response.setContentType("text/jsp;charset=UTF-8");

        String data = "";   
        StringBuilder builder = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            builder.append(line);
        }
        data = builder.toString();
        System.out.println(data);
        JSONObject jsonObj = new JSONObject(data);
        System.out.println(jsonObj);
        
        String to =  jsonObj.getString("to");
        String subject =  jsonObj.getString("subject");
        String message =   jsonObj.getString("message");
     
        String user = "nehaswami0695@gmail.com";
        String pass="vinayakvilla";

        EmailController.send(to,subject, message, user, pass);
        
		return "success";
      
        }

}

