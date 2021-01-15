package com.spring.iBidPharma.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long uid;
	
	@Column
	private String password;
	
	@Column
	private String utype;
	
	@Column
	private int status;
	
	@Column
	private String contact_no;
	
	@Column
	private String email;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String password, String utype, int status, String contact_no, String email) {
		super();
		this.password = password;
		this.utype = utype;
		this.status = status;
		this.contact_no = contact_no;
		this.email = email;
	}

	public long getUid() {
		return uid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUtype() {
		return utype;
	}

	public void setUtype(String utype) {
		this.utype = utype;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
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

	@Override
	public String toString() {
		return "User [uid=" + uid + ", password=" + password + ", utype=" + utype + ", status=" + status
				+ ", contact_no=" + contact_no + ", email=" + email + "]";
	}
	
}
