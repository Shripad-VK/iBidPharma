package com.spring.iBidPharma.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="manufacturer")
public class Manufacturer {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long mid;
	
	@Column
	private String cname;
	
	@Column
	private long addr_id;
	
	@Column
	private long uid;
	
	public Manufacturer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Manufacturer(String cname, long addr_id, long uid) {
		super();
		this.cname = cname;
		this.addr_id = addr_id;
		this.uid = uid;
	}

	public long getMid() {
		return mid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public long getAddr_id() {
		return addr_id;
	}

	public void setAddr_id(long addr_id) {
		this.addr_id = addr_id;
	}

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "Manufacturer [mid=" + mid + ", cname=" + cname + ", addr_id=" + addr_id + ", uid=" + uid + "]";
	}
	
}
