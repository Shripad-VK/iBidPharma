package com.spring.iBidPharma.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="distributor")
public class Distributor {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long d_id;
	
	@Column
	private String cname;
	
	@Column
	private long addr_id;
	
	@Column
	private long uid;
	
	public Distributor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Distributor(String cname, long addr_id, long uid) {
		super();
		this.cname = cname;
		this.addr_id = addr_id;
		this.uid = uid;
	}

	public long getD_id() {
		return d_id;
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
		return "Distributor [d_id=" + d_id + ", cname=" + cname + ", addr_id=" + addr_id + ", uid=" + uid + "]";
	}
	
}
