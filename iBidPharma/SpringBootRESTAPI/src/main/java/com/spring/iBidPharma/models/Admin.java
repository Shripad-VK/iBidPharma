package com.spring.iBidPharma.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long aid;
	
	@Column	
	private String fname;
	
	@Column
	private String lname;
	
	@Column
	private String contact_no;
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column
	private long addr_id;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Admin(String fname, String lname, String contact_no, String password, long addr_id) {
		super();
		

		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.password = password;
		this.addr_id = addr_id;
	}

	public long getAid() {
		return aid;
	}

	
	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getAddr_id() {
		return addr_id;
	}

	public void setAddr_id(long addr_id) {
		this.addr_id = addr_id;
	}
	
}
