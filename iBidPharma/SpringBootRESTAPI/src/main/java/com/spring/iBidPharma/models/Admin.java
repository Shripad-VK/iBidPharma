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
	private long uid;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String fname, String lname, long uid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.uid = uid;
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

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "Admin [aid=" + aid + ", fname=" + fname + ", lname=" + lname + ", uid=" + uid + "]";
	}
	
}
