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
	private long add_id;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String fname, String lname, String contact_no, String email, String password, long add_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.email = email;
		this.password = password;
		this.add_id = add_id;
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

	public long getAdd_id() {
		return add_id;
	}

	public void setAdd_id(long add_id) {
		this.add_id = add_id;
	}

	@Override
	public String toString() {
		return "Admin [aid=" + aid + ", fname=" + fname + ", lname=" + lname + ", contact_no=" + contact_no + ", email="
				+ email + ", password=" + password + ", add_id=" + add_id + "]";
	}
	
}
