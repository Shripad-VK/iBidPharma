package com.spring.iBidPharma.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bid")
public class Bid {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Column
	private long pid;
	
	@Column
	private long d_id;
	
	@Column
	private long bvalue;
	
	@Column
	private String bid_date;
	
	@Column
	private long addr_id;
	
	@Column
	private long stock;
	
	@Column
	private String state;
	
	@Column
	private long status;

	public Bid() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bid(long pid, long d_id, long bvalue, String bid_date, long addr_id, long stock, String state, long status) {
		super();
		this.pid = pid;
		this.d_id = d_id;
		this.bvalue = bvalue;
		this.bid_date = bid_date;
		this.addr_id = addr_id;
		this.stock = stock;
		this.state = state;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public long getD_id() {
		return d_id;
	}

	public void setD_id(long d_id) {
		this.d_id = d_id;
	}

	public long getBvalue() {
		return bvalue;
	}

	public void setBvalue(long bvalue) {
		this.bvalue = bvalue;
	}

	public String getBid_date() {
		return bid_date;
	}

	public void setBid_date(String bid_date) {
		this.bid_date = bid_date;
	}

	public long getAddr_id() {
		return addr_id;
	}

	public void setAddr_id(long addr_id) {
		this.addr_id = addr_id;
	}

	public long getStock() {
		return stock;
	}

	public void setStock(long stock) {
		this.stock = stock;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getStatus() {
		return status;
	}

	public void setStatus(long status) {
		this.status = status;
	}
		
}
