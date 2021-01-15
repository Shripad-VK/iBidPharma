package com.spring.iBidPharma.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO )
	private long id;
	@Column
	private String pname;
	
	@Column
	private String pimage;
	
	@Column
	private String category;
	
	@Column
	private long min_bvalue;
	
	@Column
	private long max_bvalue;
	
	@Column
	private long stock;
	
	@Column
	private long mid;
	
	@Column
	private long addr_id;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(long id, String pname, String pimage, String category, long min_bvalue, long max_bvalue, long stock,
			long mid, long addr_id) {
		super();
		this.id = id;
		this.pname = pname;
		this.pimage = pimage;
		this.category = category;
		this.min_bvalue = min_bvalue;
		this.max_bvalue = max_bvalue;
		this.stock = stock;
		this.mid = mid;
		this.addr_id = addr_id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPimage() {
		return pimage;
	}

	public void setPimage(String pimage) {
		this.pimage = pimage;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public long getMin_bvalue() {
		return min_bvalue;
	}

	public void setMin_bvalue(long min_bvalue) {
		this.min_bvalue = min_bvalue;
	}

	public long getMax_bvalue() {
		return max_bvalue;
	}

	public void setMax_bvalue(long max_bvalue) {
		this.max_bvalue = max_bvalue;
	}

	public long getStock() {
		return stock;
	}

	public void setStock(long stock) {
		this.stock = stock;
	}

	public long getMid() {
		return mid;
	}

	public void setMid(long mid) {
		this.mid = mid;
	}

	public long getAddr_id() {
		return addr_id;
	}

	public void setAddr_id(long addr_id) {
		this.addr_id = addr_id;
	}
	
	
	
}
