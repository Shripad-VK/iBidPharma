package com.spring.iBidPharma.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="address")
public class Address {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long addr_id;
	
	@Column
	private String line1;
	
	@Column
	private String line2;
	
	@Column
	private String area;
	
	@Column
	private long pincode;
	
	@Column
	private String city;
	
	@Column
	private String state;
	
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address(String line1, String line2, String area, long pincode, String city, String state) {
		super();
		this.line1 = line1;
		this.line2 = line2;
		this.area = area;
		this.pincode = pincode;
		this.city = city;
		this.state = state;
	}

	public long getAddr_id() {
		return addr_id;
	}

	public String getLine1() {
		return line1;
	}

	public void setLine1(String line1) {
		this.line1 = line1;
	}

	public String getLine2() {
		return line2;
	}

	public void setLine2(String line2) {
		this.line2 = line2;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Override
	public String toString() {
		return "Address [addr_id=" + addr_id + ", line1=" + line1 + ", line2=" + line2 + ", area=" + area + ", pincode="
				+ pincode + ", city=" + city + ", state=" + state + "]";
	}
	
}

