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
Model model = null;
response.setContentType("text/jsp;charset=UTF-8");
        PrintWriter out = response.getWriter();
        

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
      //  String user =  jsonObj.getString("gmailuser");
        String user = "nehaswami0695@gmail.com";
        String pass="vinayakvilla";
        //String pass = jsonObj.getString("gmailpass");
      //  System.out.println(jsonObj.getString("file"));
       // String attachement =jsonObj.getString("file");
   //     String attachement = "C:/Users/Dell/eclipse-workspace/erp_lcm/erp_lcm/src/main/webapp/resources/cd_img/HBNCKF.png";
//        String[] attachFiles= new String[2];
//        attachFiles[0]="C:/Users/Dell/Desktop/image-1.jpg";
//        attachFiles[1]="C:/Users/Dell/Desktop/image-1.jpg";
//        attachFiles[2]=" ";
        //EmailController.send(to,subject, message, user, pass,attachement);
        EmailController.send(to,subject, message, user, pass);
        
        
        PrintWriter out1 = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        Gson json = new Gson();
        String Json="";
       
        	  Json=json.toJson("Mail send Successfully");
        	 out1.print(Json);
       
/*
 * String Message="Mail send successfully";
 * 
 * request.setAttribute("Message", Message);
 * 
 * RequestDispatcher dispatcher =
 * getServletContext().getRequestDispatcher("urlString";
 * dispatcher.forward(request, response);
 */
        	// model.addAttribute("Json", Json);
        out1.println("Mail send Successfully");
		return "success";
      
        }

}

